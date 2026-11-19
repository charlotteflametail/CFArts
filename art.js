/* ============================================================
   ART LIST: edit art HERE. It feeds both the Shop (Art tab) and the home page Gallery.
   To add a piece: copy one { ... }, line, paste it above the "Any 2 Prints" bundle, and change:
   - name, price, desc
   - img:  photo path, e.g. "images/art/Moonlit Fox.jpg"  (file names are case-sensitive online)
   - priceId: the Stripe price ID (price_...). It also has to be added to PRICE_IDS in worker.js. While empty, the button opens an email order.
   Pieces WITH an img appear in the gallery. The bundle and pieces without an img do not.
   ============================================================ */
const ART = [
  { name:"Fairy Caps",   tag:"Print · 8.5 × 11", price:20, priceId:"price_1Ucu9eJlXCVynyVGK62hVwec", img:"images/art/Fairy Caps.jpg", desc:"Three glowing purple mushrooms rise from a moonlit forest floor, their golden gills lit like tiny lanterns against the dark water and ferns." },
  { name:"Forbidden Fruit",   tag:"Print · 8.5 × 11", price:20, priceId:"price_1UcuG2JlXCVynyVGIINy7el9", img:"images/art/Forbidden Fruit.jpg", desc:"Mossy stepping stones wind through a violet watercolor forest toward a single golden-stemmed toadstool, glowing quietly at the end of the path." },
  { name:"Phoenix Reborn", tag:"Print · 8.5 × 11", price:20, priceId:"price_1UcuJeJlXCVynyVGoLqFtuUN", img:"images/art/Phoenix Reborn.jpg", desc:"Out of ash and midnight it climbs, crowned in flame and trailing sparks, to begin again." },
  { name:"Walk in the Woods", tag:"Print · 8.5 × 11", price:20, priceId:"price_1UcuRbJlXCVynyVGwS8SJrC2", img:"images/art/Walk in the Woods.jpg", desc:"A dirt path, dappled with patches of golden light, runs between towering dark trunks toward a small arch of blue sky at the far end of the green canopy." },
  { name:"Starlit Raven", tag:"Print · 8.5 × 11", price:20, priceId:"price_1UcuTzJlXCVynyVGY0WlAnGc", img:"images/art/Starlit Raven.jpg", desc:"A raven keeps watch from its mossy perch beneath a crescent moon, its feathers shot through with blue and violet against a glittering midnight sky." },
  { name:"Luna Moth", tag:"Print · 8.5 × 11", price:20, priceId:"price_1UcuVyJlXCVynyVG4duVhpx9", img:"images/art/Luna Moth.jpg", desc:"Moon-green wings, glittering veins, and lettering straight out of a medieval manuscript." },
  { name:"Flower Garden", tag:"Print · 8.5 × 11", price:20, priceId:"price_1UcuYkJlXCVynyVGIBkwq9gG", img:"images/art/Flower Garden.jpg", desc:"Somewhere between a greenhouse and a fairy tale, every bloom here grows a little larger, and a little stranger, than life." },
  { name:"I See You", tag:"Print · 8.5 × 11", price:20, priceId:"price_1UcuakJlXCVynyVGjfM3Mxjo", img:"images/art/I See You.jpg", desc:"Out of the dark, two emerald eyes. You didn't see it coming, but it saw you." },
  { name:"Sea Turtle", tag:"Print · 8.5 × 11", price:20, priceId:"price_1Ucud2JlXCVynyVGQO69VEgs", img:"images/art/Sea Turtle.jpg", desc:"Older than the tides it rides, the turtle moves through sunlit shallows as if time had never asked it to hurry." },
  { name:"Into the Weeds", tag:"Print · 8.5 × 11", price:20, priceId:"price_1UdCbBJlXCVynyVGB69sLNUH", img:"images/art/Into the Weeds.jpg", desc:"Wild white daisies and lavender blooms tangle together in a dreamy twilight meadow, their sunny yellow centers glowing like tiny stars against the shadowy grass." },
  /* add more pieces here, one per line */
];
