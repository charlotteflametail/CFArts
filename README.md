# Charlotte Flametail Arts LLC: website

Files: `index.html` (home), `shop.html` (online store), `images/`.

## 1. Put it on GitHub Pages
1. Create a new GitHub repository (e.g. `charlotteflametail`).
2. Upload everything in this folder (keep the `images` folder).
3. Repo **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**.
4. Your site appears at `https://YOUR-USERNAME.github.io/charlotteflametail/` after a minute or two.
   (A custom domain can be added later under the same Pages settings.)

## 2. Turn on online payments (Stripe Payment Links, no code, no monthly fee)
GitHub Pages can't process payments itself, so each "Buy now" button opens a hosted checkout page.
1. Create a free account at stripe.com and finish the business verification (Charlotte Flametail Arts LLC).
2. Dashboard → **Payment Links → New**. Add the product, name, and price (e.g. Fall Collection Bracelet, $20).
3. Turn on **"Collect customers' addresses"** (shipping) and, if wanted, **"Let customers adjust quantity"**.
   You can add a flat shipping rate under Shipping options.
4. Copy the link (looks like `https://buy.stripe.com/...`) and paste it into the matching product's `link:` in `shop.html`.
5. Commit the change. The button changes from "Order" (email) to "Buy now".

Alternatives that work the same way: PayPal "Payment Links", Square "Online Checkout" links.

## 3. Add photos
Put jewelry photos in `images/` and art photos in `images/art/`, then set `img: "images/art/your-photo.jpg"` for each product in `shop.html`.



## Notes
- Until a product has a `link`, its button opens a pre-filled email to charlotteflametail@gmail.com.
- Stripe takes a per-sale fee (currently about 2.9% + 30¢ in the US). Check stripe.com/pricing.
- Collecting sales tax and shipping rules vary by state; check the requirements for your state.

## Bracelet colors
Each bracelet in the `JEWELRY` list has a `colors:[ ... ]` list and a `pick:` number (how many colors the buyer chooses: 1 or 2).
- Edit the names and swatch colors (`hex`) to match what Charlotte actually makes. Add or remove colors freely.
- The buyer must choose before the button works. Their choice is added to the email order, or, with a Stripe link, saved on the payment as the "Client reference ID" (Stripe Dashboard → the payment → details).
- To track stock per color, give a color its own `link:` (a separate Stripe Payment Link just for that color).
- Remove `colors` from a product to hide the picker (the earrings have none).
