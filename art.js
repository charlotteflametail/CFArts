/* ============================================================
   ART LIST: edit art HERE. It feeds both the Shop (Art tab) and the home page Gallery.
   To add a piece: copy one { ... }, line, paste it above the "Any 2 Prints" bundle, and change:
   - name, price, desc
   - img:  photo path, e.g. "images/art/Moonlit Fox.jpg"  (file names are case-sensitive online)
   - link: the Stripe (or PayPal/Square) payment link. While empty, the button opens an email order.
   Pieces WITH an img appear in the gallery. The bundle and pieces without an img do not.
   ============================================================ */
const ART = [
  { name:"Fairy Caps",   tag:"Print · 8.5 × 11", price:20, link:"https://buy.stripe.com/7sY28sf606SKfd382edjO01", img:"images/art/Fairy Caps.jpg", desc:"Three glowing purple mushrooms rise from a moonlit forest floor, their golden gills lit like tiny lanterns against the dark water and ferns." },
  { name:"Forbidden Fruit",   tag:"Print · 8.5 × 11", price:20, link:"https://buy.stripe.com/5kQ5kEe1W1yqc0R0zMdjO02", img:"images/art/Forbidden Fruit.jpg", desc:"Mossy stepping stones wind through a violet watercolor forest toward a single golden-stemmed toadstool, glowing quietly at the end of the path." },
  { name:"Phoenix Reborn", tag:"Print · 8.5 × 11", price:20, link:"https://buy.stripe.com/cNi28s5vq6SKd4VfuGdjO03", img:"images/art/Phoenix Reborn.jpg", desc:"Out of ash and midnight it climbs, crowned in flame and trailing sparks, to begin again." },
  { name:"Walk in the Woods", tag:"Print · 8.5 × 11", price:20, link:"https://buy.stripe.com/8x26oI7Dy6SK5Ct82edjO04", img:"images/art/Walk in the Woods.jpg", desc:"A dirt path, dappled with patches of golden light, runs between towering dark trunks toward a small arch of blue sky at the far end of the green canopy." },
  { name:"Starlit Raven", tag:"Print · 8.5 × 11", price:20, link:"https://buy.stripe.com/9B6bJ29LG4KCfd34Q2djO05", img:"images/art/Starlit Raven.jpg", desc:"A raven keeps watch from its mossy perch beneath a crescent moon, its feathers shot through with blue and violet against a glittering midnight sky." },
  { name:"Luna Moth", tag:"Print · 8.5 × 11", price:20, link:"https://buy.stripe.com/cNi8wQ7Dy90S7KB82edjO06", img:"images/art/Luna Moth.jpg", desc:"Moon-green wings, glittering veins, and lettering straight out of a medieval manuscript." },
  { name:"Flower Garden", tag:"Print · 8.5 × 11", price:20, link:"https://buy.stripe.com/bJe5kE2je6SKd4V2HUdjO07", img:"images/art/Flower Garden.jpg", desc:"Somewhere between a greenhouse and a fairy tale, every bloom here grows a little larger, and a little stranger, than life." },
  { name:"I See You", tag:"Print · 8.5 × 11", price:20, link:"https://buy.stripe.com/8x29AUaPKa4W2qh5U6djO08", img:"images/art/I See You.jpg", desc:"Out of the dark, two emerald eyes. You didn't see it coming, but it saw you." },
  { name:"Sea Turtle", tag:"Print · 8.5 × 11", price:20, link:"https://buy.stripe.com/8x2bJ2f607WO6GxgyKdjO09", img:"images/art/Sea Turtle.jpg", desc:"Older than the tides it rides, the turtle moves through sunlit shallows as if time had never asked it to hurry." },
    /* add more pieces here, one per line */
  { name:"Any 2 Prints", tag:"Bundle · Save $5", price:35, link:"", img:"", bundle:true,
    desc:"Pick any two prints for $35. Tell us your choices at checkout or by email." }
];
