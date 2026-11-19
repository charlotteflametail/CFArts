/* Charlotte Flametail Arts: cart checkout (Cloudflare Worker)
   Secret needed: STRIPE_SECRET_KEY (Settings > Variables and Secrets, type "Secret")
   Add each new product's price ID to PRICE_IDS below, as well as to art.js / jewelry.js. */

const SITE = "https://YOUR-SITE-ADDRESS-HERE";   // e.g. https://charlotteflametail.com (no trailing slash)

/* Shipping in cents: first item, then each additional item. US orders with items totaling freeOver or more ship free.
   Keep the same as SHIP in shop.html. */
const SHIPPING = {
  us:   { first: 500,  extra: 100, freeOver: 6000, label: "USPS shipping" },
  intl: { first: 1500, extra: 300, label: "International shipping (varies by country)" },
};

const US = ["US"];
const INTL = ["CA","MX","GB","IE","AU","NZ","DE","FR","IT","ES","NL","BE","SE","NO","DK","FI","CH","AT","PT","JP"];

/* Only these prices can be bought. A tampered cart can't invent a price.
   The number is the price in cents, used only to work out free shipping (Stripe still charges its own price). */
const PRICE_IDS = {
  "price_1UdCbBJlXCVynyVGB69sLNUH": 2000, // Into the Weeds
  "price_1Ucud2JlXCVynyVGQO69VEgs": 2000, // Sea Turtle
  "price_1UcuakJlXCVynyVGjfM3Mxjo": 2000, // I See You
  "price_1UcuYkJlXCVynyVGIBkwq9gG": 2000, // Flower Garden
  "price_1UcuVyJlXCVynyVG4duVhpx9": 2000, // Luna Moth
  "price_1UcuTzJlXCVynyVGY0WlAnGc": 2000, // Starlit Raven
  "price_1UcuRbJlXCVynyVGwS8SJrC2": 2000, // Walk in the Woods
  "price_1UcuJeJlXCVynyVGoLqFtuUN": 2000, // Phoenix Reborn
  "price_1UcuG2JlXCVynyVGIINy7el9": 2000, // Forbidden Fruit
  "price_1Ucu9eJlXCVynyVGK62hVwec": 2000, // Fairy Caps
};

const cors = {
  "Access-Control-Allow-Origin": SITE,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
const reply = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json", ...cors } });

export default {
  async fetch(req, env) {
    if (req.method === "OPTIONS") return new Response(null, { headers: cors });
    if (req.method !== "POST") return reply({ error: "POST only" }, 405);

    let body;
    try { body = await req.json(); } catch { return reply({ error: "Bad request" }, 400); }

    const zone = SHIPPING[body.region] ? body.region : null;
    const items = Array.isArray(body.items) ? body.items : [];
    if (!zone || !items.length || items.length > 30) return reply({ error: "Invalid cart" }, 400);

    let count = 0, subtotal = 0;
    const p = new URLSearchParams();
    p.set("mode", "payment");
    p.set("success_url", SITE + "/shop.html?paid=1");
    p.set("cancel_url", SITE + "/shop.html");

    try { items.forEach((it, i) => {
      const qty = Math.floor(Number(it.qty));
      if (!(it.id in PRICE_IDS) || !(qty >= 1 && qty <= 20)) throw new Error("bad item");
      count += qty; subtotal += qty * PRICE_IDS[it.id];
      p.set(`line_items[${i}][price]`, it.id);
      p.set(`line_items[${i}][quantity]`, String(qty));
    }); } catch { return reply({ error: "Invalid cart" }, 400); }

    const s = SHIPPING[zone];
    const free = s.freeOver && subtotal >= s.freeOver;
    const amount = free ? 0 : s.first + s.extra * (count - 1);
    p.set("shipping_options[0][shipping_rate_data][type]", "fixed_amount");
    p.set("shipping_options[0][shipping_rate_data][display_name]", free ? "Free shipping" : s.label);
    p.set("shipping_options[0][shipping_rate_data][fixed_amount][amount]", String(amount));
    p.set("shipping_options[0][shipping_rate_data][fixed_amount][currency]", "usd");
    (zone === "us" ? US : INTL).forEach((c, i) => p.set(`shipping_address_collection[allowed_countries][${i}]`, c));

    /* Jewelry colors etc. show up in the Stripe dashboard under the order's metadata. */
    const notes = items.map(it => `${String(it.name || "").slice(0, 40)} x${it.qty}${it.note ? " (" + String(it.note).slice(0, 40) + ")" : ""}`).join("; ");
    p.set("metadata[order]", notes.slice(0, 480));

    const r = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: { Authorization: "Bearer " + env.STRIPE_SECRET_KEY, "Content-Type": "application/x-www-form-urlencoded" },
      body: p,
    });
    const data = await r.json();
    if (!r.ok) return reply({ error: "Stripe error" }, 502);
    return reply({ url: data.url });
  },
};
