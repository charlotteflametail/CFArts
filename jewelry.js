/* ============================================================
   JEWELRY LIST: edit jewelry HERE. It feeds both the Shop (Jewelry tab) and the home page Jewelry gallery.
   To add a piece: copy one { ... }, entry, paste it below the last one, and change:
   - name, price, desc, tag (small label above the name)
   - img:  photo path, e.g. "images/jewelry/Fall Bracelet.jpg"  (file names are case-sensitive online)
   - link: the Stripe (or PayPal/Square) payment link. While empty, the button opens an email order.
   - colors: optional color choices for the buyer, e.g.
       colors:[ {name:"Red", hex:"#c0392b"}, {name:"Gold", hex:"#d4a017", link:"https://buy.stripe.com/..."} ]
       pick:  how many colors the buyer chooses (default 1, use 2 for two-color bracelets)
       A color can have its own "link" (handy for tracking stock per color); otherwise the
       product's main link is used and the chosen color is attached to the order.
   Pieces WITH an img appear in the home page Jewelry gallery. The Jewelry section stays hidden there
   until at least one piece has a photo.
   ============================================================ */
const JEWELRY = [
  { name:"Fall Collection Bracelet",      tag:"Limited · Fall",      price:20, link:"", img:"", pick:1,
    colors:[{name:"Red",hex:"#b3261e"},{name:"Orange",hex:"#e0701f"},{name:"Gold",hex:"#d4a017"},{name:"Yellow",hex:"#e8c93a"}],
    desc:"Beaded bracelet in autumn reds, oranges and golds with enamel maple-leaf charms." },
  { name:"Halloween Collection Bracelet", tag:"Limited · Halloween", price:20, link:"", img:"", pick:1,
    colors:[{name:"Purple",hex:"#6b3fa0"},{name:"Black",hex:"#15101c"},{name:"Orange",hex:"#e0701f"}],
    desc:"Purple and black beaded bracelet with silver bat and skull charms." },
  { name:"Frangipani Beaded Bracelet",    tag:"Bracelet",            price:20, link:"", img:"", pick:2,
    colors:[{name:"Pink",hex:"#e58fb8"},{name:"Yellow",hex:"#f0d255"},{name:"White",hex:"#f4f1ea"},{name:"Purple",hex:"#8a5fc2"},{name:"Blue",hex:"#4a82c4"}],
    desc:"Beaded bracelet with alternating handmade clay frangipani flowers." },
  { name:"Frangipani Earrings",           tag:"Earrings",            price:10, link:"", img:"",
    desc:"Beaded earrings with clay frangipani flowers, to match the bracelets." }
];
