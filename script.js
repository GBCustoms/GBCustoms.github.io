/* ============================================================
   SETTINGS: change these to match your business
   ============================================================ */
const CONFIG = {
  store: "GBCustoms",
  instagram: "gbcustom.br",     // your Instagram username. Leave "" to use WhatsApp or email
  instagramLink: "dm",          // "dm" opens a chat with you. If that does not open, use "profile"
  whatsapp: "",                 // optional: country code + number, digits only
  email: "sales@example.com",
  currency: "EUR",              // EUR, USD, GBP, BRL...
  locale: "en-IE",              // English with euro formatting (€149)
  imageFolder: "images/",       // folder with your photos, next to this HTML file
  imageExt: "jpg",              // jpg, png or webp
  pageSize: 48                  // products shown per "Show more" click
};

/* ============================================================
   PRODUCTS (191 real wheels so far. Add one line per wheel)

   sku    unique code. Also used to find the photo automatically:
          SW-0001 loads  images/SW-0001.jpg
   img    IMAGE FIELD. Leave "" to use the automatic path above, or paste
          a full path or URL (e.g. "images/my-photo.jpg" or "https://...").
          If the image is missing, a drawing of the wheel is shown instead.
   fit    optional. "contain" shows the whole photo (use for wide photos)
   cat    Sport, Classic or Luxury
   brand  BMW, Mercedes-Benz, Audi or Volkswagen (the menu list is BRANDS, further below)
   mat    material.   shape: Round, Flat-bottom or D-shape
   dia    diameter in mm, or null if unknown (the Size filter hides itself)
   price  number with no currency symbol, or null to show "On request"
   accent stitching or trim colour (blue, red, yellow, white, green, orange, purple, black)
   extras optional short text, e.g. "Shift paddles, LED shift light"
   badge  "New", "Best seller" or ""      stock: true or false
   desc   optional. Replaces the auto-written description
   ============================================================ */
const PRODUCTS = [
  {sku:"SW-0001",name:"Smooth Leather, Tri-Color Stitch",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in smooth black leather with M tri-color stitching, gloss black spoke trim and metal shift paddles."},
  {sku:"SW-0002",name:"Alcantara, Carbon Trim",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Round",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Round rim in black Alcantara with carbon fiber spoke and control trim, M Performance badge and shift paddles. Photo shows the bare hub."},
  {sku:"SW-0003",name:"Leather and Alcantara, Matte Carbon",cat:"Sport",brand:"BMW",mat:"Leather and Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Leather top and bottom with Alcantara side grips, tri-color stitching, matte carbon fiber spoke trim and shift paddles."},
  {sku:"SW-0004",name:"Forged Carbon Purple, LED",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"purple",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light",desc:"Forged carbon rim with purple flakes, purple carbon spoke trim, perforated leather grips and purple stitching, with an LED shift light strip across the top."},
  {sku:"SW-0005",name:"Smooth Leather, Gloss Black Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in smooth black leather with M tri-color stitching, gloss black spoke trim and metal shift paddles."},
  {sku:"SW-0006",name:"Alcantara Red Marker, Carbon Trim",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Carbon shift paddles",desc:"Flat-bottom rim in black Alcantara with a red 12 o'clock marker, carbon fiber control trim and carbon shift paddles with red accents. Newer button layout with Resume, Cancel and Set."},
  {sku:"SW-0007",name:"Leather, Matte Silver Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with M stitching, matte silver spoke trim and shift paddles."},
  {sku:"SW-0008",name:"Leather Red Marker, Gloss Black",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Smooth black leather rim with a red 12 o'clock marker, M tri-color stitching and gloss black spoke trim. Photo shows the bare hub."},
  {sku:"SW-0009",name:"Leather Red Trim and Marker",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Smooth leather top with perforated side grips, a red 12 o'clock marker, red spoke and airbag trim and red stitching."},
  {sku:"SW-0010",name:"Leather Red Marker, Carbon Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red M1 and M2 buttons",desc:"Flat-bottom rim in black leather with a red 12 o'clock marker, carbon fiber control trim and red M1 and M2 buttons. Newer button layout."},
  {sku:"SW-0011",name:"Alcantara Red Stitch, Gloss Black",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim wrapped in black Alcantara with red stitching and gloss black spoke trim."},
  {sku:"SW-0012",name:"Carbon Fiber, Perforated Grips",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Gloss carbon fiber rim with perforated leather grips, a tri-color marker at 12 o'clock, carbon and silver spoke trim and blue stitching."},
  {sku:"SW-0013",name:"Carbon Fiber, Yellow Trim",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"yellow",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Gloss carbon fiber rim with perforated leather grips, a tri-color marker at 12 o'clock and a yellow spoke and airbag trim."},
  {sku:"SW-0014",name:"Leather and Alcantara, Red Marker",cat:"Sport",brand:"BMW",mat:"Leather and Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",fit:"contain",extras:"Carbon shift paddles",desc:"Leather and Alcantara rim with a red 12 o'clock marker and carbon fiber control trim. Newer button layout. The photo shows two wheels with the bare hub."},
  {sku:"SW-0015",name:"Carbon LED Shift Light, Red Buttons",cat:"Luxury",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light, red M1 and M2 buttons",desc:"Perforated leather grips with an LED shift light strip on top, carbon fiber trim, blue stitching and red M1 and M2 buttons. Newer button layout."},
  {sku:"SW-0016",name:"Perforated Leather, Gloss Black",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Black leather rim with perforated side grips, black stitching and gloss black spoke trim."},
  {sku:"SW-0017",name:"Perforated Leather, Red Trim",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Black leather rim with perforated side grips, red stitching and a red spoke and airbag trim."},
  {sku:"SW-0018",name:"Carbon Fiber LED, Silver Trim",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light",desc:"Carbon fiber rim with perforated leather grips, an LED shift light strip on top, carbon fiber spoke trim with silver edging and an M Performance badge."},
  {sku:"SW-0019",name:"Leather and Alcantara, Blue Marker",cat:"Sport",brand:"BMW",mat:"Leather and Alcantara",shape:"Round",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",fit:"contain",extras:"",desc:"Round rim in black leather with Alcantara side grips, a blue 12 o'clock marker, tri-color stitching and matte silver spoke trim. Photo shows the bare hub."},
  {sku:"SW-0020",name:"Carbon Fiber, Carbon Trim",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Gloss carbon fiber rim with perforated leather grips, a tri-color marker at 12 o'clock, carbon fiber spoke trim and blue stitching."},
  {sku:"SW-0021",name:"Smooth Leather, White Stitch",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Round",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Round rim in smooth black leather with white stitching, a matching leather airbag cover, gloss black spoke trim and shift paddles."},
  {sku:"SW-0022",name:"Alcantara Red Marker, Carbon Spokes",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Carbon shift paddles",desc:"Flat-bottom rim in black Alcantara with a red 12 o'clock marker, M tri-color stitching, carbon fiber control and spoke trim and carbon shift paddles. Newer button layout with Resume, Cancel and Set."},
  {sku:"SW-0023",name:"Alcantara Red Stripe, Matte Carbon",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with a red 12 o'clock stripe, matte carbon fiber spoke trim with an M Performance badge and metal shift paddles."},
  {sku:"SW-0024",name:"Carbon LED Shift Light, Alcantara Grips",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light, red M1 and M2 buttons",desc:"Gloss carbon fiber rim with an LED shift light strip on top, Alcantara grips, carbon fiber spoke trim, M Performance badge and red M1 and M2 buttons. Photo shows the bare hub."},
  {sku:"SW-0025",name:"Smooth Leather, Silver Spoke Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Round",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Round rim in smooth black leather with M tri-color stitching, silver-finish control and spoke trim and silver shift paddles. Newer button layout."},
  {sku:"SW-0026",name:"Leather and Alcantara, Blue Marker, Matte Carbon",cat:"Sport",brand:"BMW",mat:"Leather and Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim with leather top and bottom, Alcantara side grips, a blue 12 o'clock marker, tri-color stitching and matte carbon fiber spoke trim with an M Performance badge."},
  {sku:"SW-0027",name:"Leather and Alcantara, Red Marker, Red M Paddles",cat:"Sport",brand:"BMW",mat:"Leather and Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Carbon shift paddles, red M1 and M2 buttons",desc:"Flat-bottom rim in leather and Alcantara with a red 12 o'clock marker, carbon fiber control trim, carbon shift paddles and red M1 and M2 buttons. Newer button layout. Photo shows the bare hub and a label reading G20."},
  {sku:"SW-0028",name:"Perforated Leather, Blue Marker",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with perforated side grips, a blue 12 o'clock marker, M tri-color stitching and matte silver spoke trim."},
  {sku:"SW-0029",name:"Forged Carbon Blue, LED",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light",desc:"Forged carbon rim with blue flakes and an LED shift light strip on top, Alcantara grips, forged carbon spoke trim and paddles, and a black and white badge on an Alcantara airbag cover."},
  {sku:"SW-0030",name:"Perforated Leather Red Marker, Matte Carbon",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Carbon shift paddles",desc:"Flat-bottom rim in black leather with perforated side grips, a red 12 o'clock marker, tri-color stitching, matte carbon fiber spoke trim with an M Performance badge and carbon shift paddles."},
  {sku:"SW-0031",name:"Alcantara Red Dot Marker, Carbon Trim",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Round",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red M1 and M2 buttons",desc:"Round rim wrapped in black Alcantara with a red dotted marker at 12 o'clock, blue stitching, carbon fiber spoke trim and red M1 and M2 buttons."},
  {sku:"SW-0032",name:"Alcantara LED Shift Light, Matte Carbon",cat:"Luxury",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Carbon shift paddles, LED shift light",desc:"Alcantara rim with an LED shift light strip on top, an Alcantara airbag cover with red and blue stitching, matte carbon fiber spoke trim, M Performance badge and carbon shift paddles."},
  {sku:"SW-0034",name:"Forged Carbon Blue, Leather Grips",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, blue M1 and M2 buttons",desc:"Forged carbon rim with blue flakes, smooth black leather grips, a blue and red marker at 12 o'clock, blue M1 and M2 buttons and a tri-color stitched airbag cover."},
  {sku:"SW-0035",name:"Forged Carbon Purple, Cream Leather, LED",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"purple",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light",desc:"Forged carbon rim with purple flakes and an LED shift light strip, cream perforated leather grips and airbag cover, and forged carbon spoke trim and paddles."},
  {sku:"SW-0036",name:"White Leather, Blue Marker, Carbon Spokes",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Carbon shift paddles",desc:"Flat-bottom rim in white leather with a blue 12 o'clock marker, blue stitching, a white airbag cover and carbon fiber control and spoke trim. Newer button layout."},
  {sku:"SW-0037",name:"Carbon Fiber Rim, Carbon Spokes",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Carbon shift paddles",desc:"Gloss carbon fiber rim top and bottom with perforated leather grips, blue stitching, carbon fiber control and spoke trim and carbon shift paddles with red markings. Newer button layout."},
  {sku:"SW-0038",name:"Carbon Fiber, Alcantara Grips, Red M Paddles",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Carbon shift paddles, red M1 and M2 buttons",desc:"Gloss carbon fiber rim with Alcantara grips, a tri-color marker at 12 o'clock, a tri-color stitched Alcantara airbag cover, carbon fiber trim and red M1 and M2 buttons. Newer button layout. The label in the photo reads G30."},
  {sku:"SW-0039",name:"Leather Orange and Black",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"orange",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with orange side grips and matching orange stitching, silver spoke trim and shift paddles."},
  {sku:"SW-0040",name:"Perforated Leather, Red Marker, Carbon Trim",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Carbon shift paddles, red M1 and M2 buttons",desc:"Flat-bottom rim in black perforated leather with a red 12 o'clock marker, carbon fiber control and spoke trim, carbon shift paddles and red M1 and M2 buttons. Newer button layout. Photo shows the bare hub and a label reading G20."},
  {sku:"SW-0041",name:"Leather and Alcantara, White Marker, Carbon Trim",cat:"Sport",brand:"BMW",mat:"Leather and Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim with leather top and Alcantara side grips, a white 12 o'clock marker, gray stitching and gloss carbon fiber spoke trim. Photo shows the bare hub."},
  {sku:"SW-0042",name:"Perforated Leather, Orange Marker",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"orange",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black perforated leather with an orange 12 o'clock marker, matching orange stitching and gloss black spoke trim. Photo shows the bare hub."},
  {sku:"SW-0043",name:"Leather, Orange Marker, Silver Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"orange",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with an orange 12 o'clock marker, orange stitching and matte silver spoke trim. Photo shows the bare hub."},
  {sku:"SW-0044",name:"Carbon Fiber LED, Red Paddles",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light, red carbon paddles",desc:"Gloss carbon fiber rim with an LED shift light strip on top, perforated leather grips, carbon fiber spoke trim with a gloss finish and red carbon shift paddles."},
  {sku:"SW-0045",name:"Alcantara, Blue Marker, Silver Trim",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with a blue 12 o'clock marker, blue stitching and matte silver spoke trim. Photo shows the bare hub."},
  {sku:"SW-0046",name:"Perforated Leather, Blue Stitch, LED",cat:"Luxury",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light",desc:"Flat-bottom rim in black perforated leather with an LED shift light strip on top, blue stitching and chrome-finish spoke trim."},
  {sku:"SW-0047",name:"Alcantara, Gloss Black Trim",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim wrapped in black Alcantara with black stitching, a gloss black spoke trim and shift paddles. Photo shows the bare hub."},
  {sku:"SW-0048",name:"Perforated Leather, Yellow Marker",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"yellow",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black perforated leather with a yellow 12 o'clock marker, matching yellow stitching and gloss black spoke trim. Photo shows the bare hub."},
  {sku:"SW-0049",name:"Alcantara Red Marker, Carbon Trim, Red Buttons",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red M1 and M2 buttons",desc:"Flat-bottom rim in black Alcantara with a red 12 o'clock marker, carbon fiber spoke trim and red M1 and M2 buttons. Photo shows the bare hub."},
  {sku:"SW-0050",name:"Alcantara Blue Marker, Carbon Trim, Blue Buttons",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, blue M1 and M2 buttons",desc:"Flat-bottom rim in black Alcantara with a blue 12 o'clock marker, carbon fiber spoke trim and blue M1 and M2 buttons. Photo shows the bare hub."},
  {sku:"SW-0051",name:"Leather and Perforated Leather, Tri-Color Stitch",cat:"Sport",brand:"BMW",mat:"Leather and Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in smooth leather with perforated side grips, M tri-color stitching and gloss black spoke trim with a full BMW badge."},
  {sku:"SW-0052",name:"Leather, Tri-Color Stitch, Gloss Black",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with M tri-color stitching, a full BMW badge and gloss black spoke trim."},
  {sku:"SW-0053",name:"Carbon Fiber, Yellow Marker, Yellow Trim",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"yellow",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Gloss carbon fiber rim with a yellow 12 o'clock marker, matching yellow stitching and a yellow spoke and airbag trim."},
  {sku:"SW-0054",name:"Carbon Fiber, Tri-Color, LED",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light",desc:"Gloss carbon fiber rim with a tri-color marker at 12 o'clock and an LED shift light strip on top, perforated leather grips, tri-color stitching and an M Performance badge."},
  {sku:"SW-0055",name:"Leather and Alcantara, White Marker, Silver Trim",cat:"Sport",brand:"BMW",mat:"Leather and Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim with leather top and Alcantara side grips, a white 12 o'clock marker, a full BMW badge and matte silver and carbon fiber spoke trim."},
  {sku:"SW-0056",name:"Forged Carbon Red, Red Leather",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red M1 and M2 buttons",desc:"Forged carbon rim with red flakes, red leather grips and airbag cover, red M1 and M2 buttons and an M Performance badge."},
  {sku:"SW-0057",name:"Perforated Leather and Alcantara, White Marker",cat:"Sport",brand:"BMW",mat:"Leather and Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim with perforated leather top and Alcantara side grips, a white 12 o'clock marker, tri-color stitching, a full BMW badge and chrome-finish spoke trim."},
  {sku:"SW-0058",name:"Forged Carbon, Alcantara Grips",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Forged carbon rim with Alcantara grips, gloss forged carbon spoke trim and an M badge. Photo shows the bare hub."},
  {sku:"SW-0059",name:"Leather, Tri-Color Marker, Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a tri-color marker at 12 o'clock, tri-color stitching, a full BMW badge and chrome-finish spoke trim."},
  {sku:"SW-0060",name:"Leather, 50 Years BMW Badge, Red and Blue Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a red and blue spoke trim, a special red and blue BMW badge and matching stitching."},
  {sku:"SW-0061",name:"Perforated Leather, Tri-Color, Two Wheels Shown",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",fit:"contain",extras:"Shift paddles",desc:"Flat-bottom rim in black perforated leather with a tri-color spoke trim and matching stitching, a full BMW badge and shift paddles. The photo shows two identical wheels side by side."},
  {sku:"SW-0062",name:"Leather, Blue Marker, Carbon Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Carbon shift paddles",desc:"Flat-bottom rim in black leather with a blue 12 o'clock marker, blue stitching, gloss carbon fiber spoke trim and carbon shift paddles."},
  {sku:"SW-0063",name:"Forged Carbon Blue, LED, Suede Grips",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light",desc:"Forged carbon rim with blue flakes and an LED shift light strip on top, gray suede grips and forged carbon spoke trim with blue flakes."},
  {sku:"SW-0064",name:"Gloss Black and White Leather",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss piano black with white leather side grips, a white airbag cover and white and black spoke trim."},
  {sku:"SW-0065",name:"Carbon Fiber, Red Marker, Red Trim",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red M1 button",desc:"Gloss carbon fiber rim with a red 12 o'clock stripe, perforated leather grips, a red airbag cover and spoke trim, a red M1 button and an M Performance badge."},
  {sku:"SW-0066",name:"Alcantara, Perforated Leather Grips",cat:"Sport",brand:"BMW",mat:"Leather and Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with perforated leather side grips, a suede airbag cover and chrome-finish spoke trim."},
  {sku:"SW-0067",name:"Carbon Fiber, Tri-Color Stripe, Orange Stitch",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"orange",badge:"",stock:true,img:"",extras:"Shift paddles, LED indicator strip",desc:"Gloss woven carbon fiber rim with a tri-color pinstripe and an LED indicator strip on top, Alcantara grips, orange stitching on the airbag cover and carbon fiber spoke trim."},
  {sku:"SW-0068",name:"Alcantara Blue Marker, Carbon Trim, Blue Buttons",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, blue M1 and M2 buttons",desc:"Flat-bottom rim in black Alcantara with a blue 12 o'clock marker, carbon fiber spoke trim with chrome edging and blue M1 and M2 buttons."},
  {sku:"SW-0069",name:"Alcantara, Red Marker, Carbon Trim",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with a red 12 o'clock marker, carbon fiber spoke trim and shift paddles."},
  {sku:"SW-0070",name:"Perforated Leather, LED, Chrome Trim",cat:"Luxury",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, LED indicator strip",desc:"Flat-bottom rim in black perforated leather with an LED indicator strip on top and chrome-finish spoke trim."},
  {sku:"SW-0071",name:"Forged Carbon Blue, Perforated Leather Grips",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Forged carbon rim with blue flakes, perforated leather side grips and forged carbon spoke trim with blue flakes. Photo shows the bare hub."},
  {sku:"SW-0072",name:"Gloss Black Leather, Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss piano black leather with perforated leather side grips and gloss black spoke trim."},
  {sku:"SW-0073",name:"Forged Carbon, Perforated Leather, Orange Stitch",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"orange",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Forged carbon rim with black and silver flakes, black perforated leather grips, orange stitching on the airbag cover and forged carbon spoke trim."},
  {sku:"SW-0074",name:"Leather, Blue Marker, Carbon Trim, Blue Accent",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Carbon shift paddles",desc:"Flat-bottom rim in black leather with a blue 12 o'clock marker, blue stitching, carbon fiber spoke trim with a blue accent stripe and an M Performance badge. Photo shows the bare hub."},
  {sku:"SW-0075",name:"Two-Tone Leather, White Grips, Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather on top with white perforated leather side grips and chrome-finish spoke trim. Photo shows the bare hub."},
  {sku:"SW-0076",name:"Gloss Black Leather, Carbon and Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss piano black leather with carbon fiber and chrome spoke trim and an M Performance badge."},
  {sku:"SW-0077",name:"Alcantara, Woven Carbon Trim",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with woven carbon fiber spoke trim and an M Performance badge. Photo shows the bare hub."},
  {sku:"SW-0078",name:"Alcantara, Carbon Trim, M Performance",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with carbon fiber spoke trim and an M Performance badge. Photo shows the bare hub."},
  {sku:"SW-0079",name:"Cognac Leather, Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in cognac tan leather with black buttons and chrome-finish spoke trim. Photo shows the bare hub."},
  {sku:"SW-0080",name:"Cream Leather, Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in cream leather with black buttons and chrome-finish spoke trim. Photo shows the bare hub."},
  {sku:"SW-0081",name:"Gloss Red Carbon, Tri-Color Marker",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss red carbon fiber with a tri-color marker at 12 o'clock, black perforated leather grips and matching red carbon spoke trim with an M Performance badge."},
  {sku:"SW-0082",name:"Alcantara, Red Dashed Marker",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Round",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Round rim in black Alcantara with a red dashed marker at 12 o'clock and gloss black spoke trim. Shown on a display stand."},
  {sku:"SW-0083",name:"Red Alcantara, Black Carbon Top, Orange Paddles",cat:"Luxury",brand:"BMW",mat:"Leather and Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Carbon shift paddles",desc:"Flat-bottom rim with a black carbon fiber top and red Alcantara side grips, a red Alcantara airbag cover, red carbon spoke trim and orange carbon shift paddles."},
  {sku:"SW-0084",name:"Forged Carbon Blue Marble, LED Trim",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in forged carbon with a blue marbled pattern, black suede grips with blue stitching and a silver trim strip on top."},
  {sku:"SW-0085",name:"Perforated Leather, Red Stripe, Red Buttons",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red M1 and M2 buttons",desc:"Flat-bottom rim in black perforated leather with a red 12 o'clock stripe, gloss black spoke trim and red M1 and M2 buttons."},
  {sku:"SW-0086",name:"Two-Tone Alcantara, Blue and Red",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Round",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"",desc:"Round rim in Alcantara split into a light and dark blue half and a red half, with matching two-tone spoke trim and an M badge on the airbag cover. A wiring harness is shown loose in the photo."},
  {sku:"SW-0087",name:"Leather, Blue Marker, Gloss Black Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a blue 12 o'clock marker, perforated leather grips and gloss black spoke trim."},
  {sku:"SW-0088",name:"Gloss Carbon, Red Marker, Red Button",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red M1 button",desc:"Flat-bottom rim in gloss woven carbon fiber with a red 12 o'clock marker, black perforated leather grips, gloss black spoke trim and a red M1 button."},
  {sku:"SW-0089",name:"Forged Carbon Blue Marble, Orange Trim",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"orange",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in forged carbon with a blue marbled pattern, black perforated leather grips, orange spoke trim and orange shift paddles with an M Performance badge."},
  {sku:"SW-0090",name:"Perforated Leather, Tri-Color Marker",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black perforated leather with a tri-color marker at 12 o'clock and gloss black spoke trim with an M badge."},
  {sku:"SW-0091",name:"Forged Carbon, Blue Paddles",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in forged carbon with a marbled pattern, black perforated leather grips, blue carbon shift paddles and an M badge."},
  {sku:"SW-0092",name:"Leather, White Grips, Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather on top with white perforated leather side grips and chrome-finish spoke trim."},
  {sku:"SW-0093",name:"Cream Leather, Silver Fleck Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in cream leather throughout with black buttons and a silver-fleck forged carbon spoke trim."},
  {sku:"SW-0094",name:"Leather and Suede, Matte Black Trim",cat:"Sport",brand:"BMW",mat:"Leather and Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather on top with black suede lower sections, matte black spoke trim and an M Performance badge."},
  {sku:"SW-0095",name:"Alcantara, Blue Marker, Blue Carbon Trim",cat:"Luxury",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with a blue 12 o'clock marker, blue carbon fiber spoke trim and an M badge."},
  {sku:"SW-0096",name:"Woven Carbon, White Marker, White Trim",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss woven carbon fiber with a white 12 o'clock marker, black leather grips and a white spoke insert with an M Performance badge."},
  {sku:"SW-0097",name:"Perforated Leather, Orange Marker, Orange Carbon Trim",cat:"Luxury",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"orange",badge:"",stock:true,img:"",extras:"Carbon shift paddles",desc:"Flat-bottom rim in black perforated leather with an orange 12 o'clock marker, orange carbon fiber spoke trim and orange carbon shift paddles."},
  {sku:"SW-0098",name:"Alcantara, White Marker, Red Buttons",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles, red M1 and M2 buttons",desc:"Flat-bottom rim in black Alcantara with a white dashed marker at 12 o'clock, gloss black spoke trim and red M1 and M2 buttons."},
  {sku:"SW-0099",name:"Leather, Blue Marker, Carbon and Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a blue 12 o'clock marker, perforated leather grips and chrome-finish spoke trim with carbon fiber accents."},
  {sku:"SW-0100",name:"Leather, White Marker, White Grips",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a white 12 o'clock marker, white perforated leather side grips and gloss black spoke trim."},
  {sku:"SW-0101",name:"Gloss Carbon, Red Stitch, Bare Hub",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss carbon fiber with black perforated leather grips, red stitching and gloss black spoke trim. Photo shows the bare hub."},
  {sku:"SW-0102",name:"Gloss Carbon, Perforated Grips",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Round",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Round rim in gloss carbon fiber with black perforated leather grips and gloss black spoke trim."},
  {sku:"SW-0103",name:"Carbon Fiber, Tri-Color Marker",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in carbon fiber with a tri-color marker at 12 o'clock, black perforated leather grips and gloss black spoke trim."},
  {sku:"SW-0104",name:"Carbon Top, Red Marbled Carbon, Red Paddles",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim with a black carbon top and red marbled forged carbon lower section, red stitching, matching red spoke trim and red carbon shift paddles."},
  {sku:"SW-0105",name:"Gloss Carbon, Bare Hub, Silver Trim",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss carbon fiber with black perforated leather grips and gloss black spoke trim with a silver edge. Photo shows the bare hub."},
  {sku:"SW-0106",name:"Tan Leather, Silver Fleck Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Round",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Round rim in tan leather with matching tan grips, black buttons and a silver-fleck forged carbon spoke trim. Shown on a display stand."},
  {sku:"SW-0107",name:"Carbon Fiber, Blue LED, Blue Stitch",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light",desc:"Flat-bottom rim in carbon fiber with a blue LED shift light strip on top, black perforated leather grips with blue stitching and gloss black spoke trim with blue accents."},
  {sku:"SW-0108",name:"Carbon Fiber, Tan Leather Hub",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in carbon fiber with black perforated leather grips, a tan leather airbag cover and gloss black spoke trim with a silver edge."},
  {sku:"SW-0109",name:"Leather, Tan Grips, Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with tan perforated leather grips, a tan airbag cover and chrome-finish spoke trim."},
  {sku:"SW-0110",name:"Woven Carbon, White Grips, Tri-Color Stripe",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss woven carbon fiber with white leather grips, a tri-color stripe at 12 o'clock and a white spoke insert with an M badge."},
  {sku:"SW-0111",name:"Red Leather, Chrome Trim, Red Paddles",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim entirely in red leather with chrome-finish spoke trim and red shift paddles. Photo shows the bare hub."},
  {sku:"SW-0112",name:"Leather, Blue Marker, Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a blue 12 o'clock marker, black perforated leather grips and chrome-finish spoke trim."},
  {sku:"SW-0113",name:"Perforated Leather, Bare Hub",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black perforated leather with gloss black spoke trim. Photo shows the bare hub with the BMW roundel visible."},
  {sku:"SW-0114",name:"Alcantara, Bare Hub, Gloss Black Trim",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with gloss black spoke trim. Photo shows the bare hub."},
  {sku:"SW-0115",name:"Carbon Top, White Leather Grips",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim with a black carbon top, white perforated leather grips, a cream airbag cover and chrome-finish spoke trim."},
  {sku:"SW-0116",name:"Forged Carbon, Purple Flecks",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"purple",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in forged carbon with purple flecks, black suede grips and matching forged carbon spoke trim with an M badge."},
  {sku:"SW-0117",name:"Woven Carbon, Tri-Color Stitched Hub, Chrome Trim",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss woven carbon fiber with black leather grips, a tri-color stitched airbag cover and chrome-finish spoke trim."},
  {sku:"SW-0118",name:"Forged Carbon Blue Marble, Custom Engraved",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in forged carbon with a blue marbled pattern, black perforated leather grips with blue stitching and blue carbon spoke trim. Custom names are engraved into the lower spokes in this photo; a plain version can be made without the engraving."},
  {sku:"SW-0119",name:"Carbon Fiber, Red Marker, Bare Hub",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in carbon fiber with a red 12 o'clock stripe, black leather grips and gloss black spoke trim. Photo shows the bare hub."},
  {sku:"SW-0120",name:"Leather, Yellow Marker, Yellow Paddle",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"yellow",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a yellow 12 o'clock marker, yellow stitching, black perforated grips, carbon fiber spoke trim and a yellow-highlighted shift paddle. Photo shows the bare hub."},
  {sku:"SW-0122",name:"Gloss Black, Blue LED, Grey Suede Grips",cat:"Luxury",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light",desc:"Flat-bottom rim in gloss piano black with a blue LED shift light strip on top, grey suede grips, blue stitching and an M Performance badge."},
  {sku:"SW-0123",name:"Forged Carbon, Gold Flecks, Orange Stitch",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"orange",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in forged carbon with gold flecks, black perforated leather grips and orange stitching."},
  {sku:"SW-0124",name:"Red Leather, Carbon Top, Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim with a black carbon top and red leather grips and airbag cover, with chrome-finish spoke trim."},
  {sku:"SW-0125",name:"Woven Carbon, Red Leather Grips, M Performance",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss woven carbon fiber with red leather grips and gloss black spoke trim with an M Performance badge."},
  {sku:"SW-0126",name:"Gloss Black, Blue LED, Grey Suede Grips",cat:"Luxury",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles, LED shift light",desc:"Flat-bottom rim in gloss piano black with a blue LED shift light strip on top, grey suede grips, blue stitching and gloss black spoke trim."},
  {sku:"SW-0127",name:"Leather, Red Carbon Trim, Tri-Color Stripe",cat:"Sport",brand:"BMW",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Carbon shift paddles",desc:"Flat-bottom rim in black perforated leather with a tri-color stripe at 12 o'clock and red carbon fiber spoke trim. Photo shows the bare hub."},
  {sku:"SW-0128",name:"Carbon Fiber, Black Suede Grips, Red Paddles",cat:"Luxury",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Carbon shift paddles",desc:"Flat-bottom rim in carbon fiber with black suede grips, gloss black spoke trim and red carbon shift paddles."},
  {sku:"SW-0130",name:"Leather, Round, Chrome Trim",cat:"Sport",brand:"Volkswagen",mat:"Leather",shape:"Round",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"",desc:"Round rim in black leather with a VW badge and gloss black spoke trim."},
  {sku:"SW-0131",name:"Flat-Bottom, Carbon Trim, Red Button",cat:"Sport",brand:"Volkswagen",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim in black perforated leather with a VW badge, carbon-look spoke trim and a red highlighted button. Shown on a display rack."},
  {sku:"SW-0132",name:"GTI Style, Red Top Stripe",cat:"Sport",brand:"Volkswagen",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim in black perforated leather with a red 12 o'clock stripe, red stitching and a GTI-style VW badge."},
  {sku:"SW-0133",name:"Flat-Bottom, Chrome Trim, Blue Button",cat:"Sport",brand:"Volkswagen",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim in black perforated leather with a VW badge, chrome-finish spoke trim and a blue highlighted button. Shown on a display rack."},
  {sku:"SW-0134",name:"Round, Chrome Spoke Trim",cat:"Sport",brand:"Volkswagen",mat:"Leather",shape:"Round",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"",desc:"Round rim in black leather with a VW badge and chrome-finish spoke trim."},
  {sku:"SW-0135",name:"Round, Plain Black",cat:"Sport",brand:"Volkswagen",mat:"Leather",shape:"Round",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"",desc:"Round rim in black leather with a VW badge and gloss black spoke trim."},
  {sku:"SW-0136",name:"Round, Plain Black, Gloss Trim",cat:"Sport",brand:"Volkswagen",mat:"Leather",shape:"Round",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"",desc:"Round rim in black leather with a VW badge and gloss black spoke trim."},
  {sku:"SW-0137",name:"Round, Plain Black",cat:"Sport",brand:"Volkswagen",mat:"Leather",shape:"Round",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"",desc:"Round rim in black leather with a VW badge."},
  {sku:"SW-0138",name:"Flat-Bottom, Carbon Trim, Red Button",cat:"Sport",brand:"Volkswagen",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim in black perforated leather with a VW badge, carbon-look spoke trim and a red highlighted button. Shown on a display rack."},
  {sku:"SW-0139",name:"Flat-Bottom, Carbon Trim, Blue Top Marker",cat:"Sport",brand:"Volkswagen",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim in black perforated leather with a blue 12 o'clock marker, carbon-look spoke trim and a red highlighted button. Shown on a display rack."},
  {sku:"SW-0140",name:"Flat-Bottom, Carbon Top, Red Button",cat:"Sport",brand:"Volkswagen",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim with a carbon fiber top, black perforated leather grips, a VW badge and a red highlighted button. Photo shows the wheel in its foam packaging."},
  {sku:"SW-0141",name:"Flat-Bottom, Carbon Top, Red Stripe",cat:"Sport",brand:"Volkswagen",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim with a carbon fiber top, a red 12 o'clock stripe, black perforated leather grips and a VW badge. Photo shows the wheel in its foam packaging."},
  {sku:"SW-0142",name:"Flat-Bottom, Blue Trim, Red Button",cat:"Sport",brand:"Volkswagen",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim in black perforated leather with a VW badge, a blue lower trim accent and a red highlighted button."},
  {sku:"SW-0143",name:"Flat-Bottom, Installed Photo",cat:"Sport",brand:"Volkswagen",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim in black perforated leather with a VW badge and a blue lower trim accent. Photo shows the wheel installed in a car."},
  {sku:"SW-0144",name:"Forged Carbon, Purple Marble",cat:"Luxury",brand:"Volkswagen",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"purple",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim in forged carbon with a purple marbled pattern, black perforated leather grips and a VW badge."},
  {sku:"SW-0145",name:"Carbon Fiber, Red Top Stripe",cat:"Luxury",brand:"Volkswagen",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim in carbon fiber with a red 12 o'clock stripe, black perforated leather grips and a VW badge."},
  {sku:"SW-0146",name:"Forged Carbon, Purple Marble",cat:"Luxury",brand:"Volkswagen",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"purple",badge:"",stock:true,img:"",extras:"",desc:"Flat-bottom rim in forged carbon with a purple marbled pattern, black perforated leather grips and a VW badge."},
  {sku:"SW-0147",name:"M Sport, Leather, Chrome Trim",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with an M badge and chrome-finish spoke trim."},
  {sku:"SW-0148",name:"M Sport, Leather, Plain Black",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a BMW roundel and gloss black spoke trim."},
  {sku:"SW-0149",name:"M Sport, Carbon Trim, Red Stripe",cat:"Luxury",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a red 12 o'clock stripe, a BMW roundel and carbon fiber spoke trim."},
  {sku:"SW-0150",name:"Carbon Marble, Orange Leather",cat:"Luxury",brand:"BMW",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"orange",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in marbled forged carbon with orange leather grips and a BMW roundel."},
  {sku:"SW-0151",name:"Alcantara, Tri-Color Stripe, Red Trim",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in grey Alcantara with a tri-color stripe at 12 o'clock, a red lower trim accent and a BMW roundel. Shown on a display stand."},
  {sku:"SW-0152",name:"Alcantara, Tri-Color Stripe",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in grey Alcantara with a tri-color stripe at 12 o'clock and a BMW roundel. Shown on a display stand."},
  {sku:"SW-0153",name:"Carbon Fiber, Tri-Color Stripe",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in carbon fiber with a tri-color stripe at 12 o'clock, grey Alcantara grips and a BMW roundel. Shown on a display stand."},
  {sku:"SW-0154",name:"Carbon Fiber, Tri-Color Stripe, Red Buttons",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red M1 and M2 buttons",desc:"Flat-bottom rim in carbon fiber with a tri-color stripe at 12 o'clock, grey Alcantara grips, red M1 and M2 buttons and a BMW roundel. Shown on a display stand."},
  {sku:"SW-0155",name:"Alcantara, Plain Black",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with a BMW roundel and gloss black spoke trim."},
  {sku:"SW-0156",name:"Carbon Fiber, Chrome Trim",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss carbon fiber with a BMW roundel and chrome-finish spoke trim."},
  {sku:"SW-0157",name:"Carbon Fiber, Red Buttons",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red M1 and M2 buttons",desc:"Flat-bottom rim in carbon fiber with a BMW roundel and red M1 and M2 buttons."},
  {sku:"SW-0158",name:"Alcantara, Blue and White Stripe",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"blue",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in grey Alcantara with a blue and white stripe at 12 o'clock and a BMW roundel."},
  {sku:"SW-0159",name:"Alcantara, Red Top Stripe",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in grey Alcantara with a red 12 o'clock stripe and a BMW roundel."},
  {sku:"SW-0160",name:"Alcantara, Plain Black, Silver Badge",cat:"Sport",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with a silver-finish BMW roundel and gloss black spoke trim."},
  {sku:"SW-0161",name:"Carbon Fiber, Red Trim, Digital Display",cat:"Luxury",brand:"BMW",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in carbon fiber with a red lower trim accent, a BMW roundel and a digital display strip built into the top of the rim."},
  {sku:"SW-0162",name:"Leather, Chrome Trim, Boxed",cat:"Sport",brand:"BMW",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a BMW roundel and chrome-finish spoke trim. Photo shows the wheel in its box."},
  {sku:"SW-0163",name:"Perforated Leather, Red Top Stripe, Boxed",cat:"Sport",brand:"Audi",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black perforated leather with a red 12 o'clock stripe and an Audi badge. Photo shows the wheel in its box."},
  {sku:"SW-0164",name:"Carbon Trim, Red Buttons",cat:"Luxury",brand:"Audi",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red buttons",desc:"Flat-bottom rim in black perforated leather with carbon fiber spoke trim, an Audi badge and red highlighted buttons."},
  {sku:"SW-0165",name:"Alcantara, Plain Black",cat:"Sport",brand:"Audi",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with an Audi badge and gloss black spoke trim."},
  {sku:"SW-0166",name:"Carbon Fiber, Red Top Stripe",cat:"Luxury",brand:"Audi",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss carbon fiber with a red 12 o'clock stripe and an Audi badge."},
  {sku:"SW-0167",name:"Carbon Fiber, Red Top Stripe, Textured",cat:"Luxury",brand:"Audi",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in textured carbon fiber with a red 12 o'clock stripe and an Audi badge."},
  {sku:"SW-0168",name:"Alcantara, Plain Grey",cat:"Sport",brand:"Audi",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in grey Alcantara with an Audi badge and gloss black spoke trim."},
  {sku:"SW-0169",name:"Perforated Leather, Red Top Stripe, Boxed",cat:"Sport",brand:"Audi",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black perforated leather with a red 12 o'clock stripe and an Audi badge. Photo shows the wheel in its box."},
  {sku:"SW-0170",name:"Alcantara, Plain Black, Chrome Trim",cat:"Sport",brand:"Audi",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black Alcantara with an Audi badge and chrome-finish spoke trim."},
  {sku:"SW-0171",name:"Carbon Fiber, Plain Black",cat:"Luxury",brand:"Audi",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in carbon fiber with an Audi badge and gloss black spoke trim."},
  {sku:"SW-0172",name:"Alcantara, Red Top Stripe, Red Buttons",cat:"Sport",brand:"Audi",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red buttons",desc:"Flat-bottom rim in grey Alcantara with a red 12 o'clock stripe, red highlighted buttons and an Audi badge."},
  {sku:"SW-0173",name:"Carbon Fiber, Red Buttons",cat:"Luxury",brand:"Audi",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles, red buttons",desc:"Flat-bottom rim in carbon fiber with an Audi badge and red highlighted buttons."},
  {sku:"SW-0174",name:"Perforated Leather, Plain Black",cat:"Sport",brand:"Audi",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black perforated leather with an Audi badge and gloss black spoke trim."},
  {sku:"SW-0175",name:"Leather, Plain Black",cat:"Sport",brand:"Audi",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with an Audi badge and gloss black spoke trim."},
  {sku:"SW-0176",name:"Leather, Plain Black, Hand-Held",cat:"Sport",brand:"Audi",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with an Audi badge and gloss black spoke trim."},
  {sku:"SW-0177",name:"Leather, Plain Black, Bare Hub",cat:"Sport",brand:"Audi",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with an Audi badge and gloss black spoke trim. Photo shows the wiring harness."},
  {sku:"SW-0178",name:"Leather, Red Top Stripe",cat:"Sport",brand:"Audi",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a red 12 o'clock stripe and an Audi badge."},
  {sku:"SW-0179",name:"Leather, Chrome Trim",cat:"Sport",brand:"Audi",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with an Audi badge and chrome-finish spoke trim."},
  {sku:"SW-0180",name:"Forged Carbon, Grey Marble",cat:"Luxury",brand:"Mercedes-Benz",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in marbled forged carbon with black leather grips and an AMG badge."},
  {sku:"SW-0181",name:"Leather, Red Top Stripe",cat:"Sport",brand:"Mercedes-Benz",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a red 12 o'clock stripe, red stitching and an AMG badge."},
  {sku:"SW-0182",name:"Leather, Red Top Stripe, Variant",cat:"Sport",brand:"Mercedes-Benz",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with a red 12 o'clock stripe, red stitching and an AMG badge."},
  {sku:"SW-0183",name:"Forged Carbon, Red Top Stripe",cat:"Luxury",brand:"Mercedes-Benz",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in forged carbon with a red 12 o'clock stripe and an AMG badge."},
  {sku:"SW-0184",name:"Perforated Leather, Gold Stitch",cat:"Sport",brand:"Mercedes-Benz",mat:"Perforated leather",shape:"Flat-bottom",dia:null,price:null,accent:"yellow",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black perforated leather with gold-tone stitching and an AMG badge."},
  {sku:"SW-0185",name:"Leather, Red Stitch",cat:"Sport",brand:"Mercedes-Benz",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with red stitching and an AMG badge."},
  {sku:"SW-0186",name:"Carbon Fiber, Silver Grey, Plain",cat:"Luxury",brand:"Mercedes-Benz",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in silver-grey carbon fiber with an AMG badge."},
  {sku:"SW-0187",name:"Carbon Fiber, White Top Marker",cat:"Luxury",brand:"Mercedes-Benz",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"white",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in carbon fiber with a white 12 o'clock marker and an AMG badge."},
  {sku:"SW-0188",name:"Forged Carbon, Red Top Stripe",cat:"Luxury",brand:"Mercedes-Benz",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in forged carbon with a red 12 o'clock stripe and an AMG badge."},
  {sku:"SW-0189",name:"Carbon Fiber, Plain Black, Bare Hub",cat:"Luxury",brand:"Mercedes-Benz",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in carbon fiber with an AMG badge. Photo shows the wiring harness."},
  {sku:"SW-0190",name:"Leather, Plain Black, Hand-Held",cat:"Sport",brand:"Mercedes-Benz",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with an AMG badge and gloss black spoke trim."},
  {sku:"SW-0191",name:"Forged Carbon, Cream Leather Grips",cat:"Luxury",brand:"Mercedes-Benz",mat:"Forged carbon",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in forged carbon with cream leather grips and an AMG badge."},
  {sku:"SW-0192",name:"Silver Carbon, Plain",cat:"Luxury",brand:"Mercedes-Benz",mat:"Carbon fiber",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in silver-finish carbon fiber with an AMG badge."},
  {sku:"SW-0193",name:"Leather, Cream Grips",cat:"Sport",brand:"Mercedes-Benz",mat:"Leather",shape:"Flat-bottom",dia:null,price:null,accent:"black",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in black leather with cream leather grips and an AMG badge."},
  {sku:"SW-0129",name:"Gloss Black, Grey Suede Grips, Red Trim",cat:"Luxury",brand:"BMW",mat:"Alcantara",shape:"Flat-bottom",dia:null,price:null,accent:"red",badge:"",stock:true,img:"",extras:"Shift paddles",desc:"Flat-bottom rim in gloss piano black with grey suede grips, a red trim ring around the airbag cover and gloss black spoke trim with red buttons."},
];

/* ============================================================
   Drawings used when a photo is missing
   ============================================================ */
const MAT_COLOR = {
  "Leather": "#232B38", "Perforated leather": "#232B38", "Alcantara": "#2E3441",
  "Suede": "#3B3742", "Wood": "#8C5A36", "Carbon fiber": "#2A2F36", "Rubber": "#3A3F47",
  "Leather and Alcantara": "#2A303C", "Forged carbon": "#2A2F36"
};
const ACCENT = {
  blue: "#2B4BFF", red: "#D8402F", yellow: "#E3B94F", white: "#F5F7F9", green: "#2F9E6B", orange: "#E8772E", purple: "#8E3FBF", black: "#14213D"
};
const RIM_WIDTH = { "Classic": 10, "Luxury": 13, "Sport": 14 };
const STITCHED = new Set(["Leather", "Perforated leather", "Alcantara", "Suede", "Leather and Alcantara"]);

function wheelSvg(p) {
  const rim = MAT_COLOR[p.mat] || "#232B38";
  const ac = ACCENT[p.accent] || ACCENT.blue;
  const sp = "#6B7587";
  const w = RIM_WIDTH[p.cat] || 14;
  const flatTop = p.shape === "D-shape";
  const flatBottom = p.shape !== "Round";
  let rimPath;
  if (flatTop) rimPath = "M48.6 44H151.4A76 76 0 0 1 151.4 156H48.6A76 76 0 0 1 48.6 44Z";
  else if (flatBottom) rimPath = "M48.6 156A76 76 0 1 1 151.4 156Z";
  else rimPath = "M100 24A76 76 0 1 1 99.99 24Z";
  const top = flatTop ? 44 : 24;
  const bottom = flatBottom ? 154 : 172;
  return `<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><g transform="translate(14 14) scale(.86)">
    <g stroke="${sp}" stroke-width="16" stroke-linecap="round" fill="none">
      <path d="M100 100L32 112"/><path d="M100 100L168 112"/><path d="M100 100L100 ${bottom}"/>
    </g>
    <path d="${rimPath}" fill="none" stroke="${rim}" stroke-width="${w}" stroke-linejoin="round"/>
    ${STITCHED.has(p.mat) ? `<path d="${rimPath}" fill="none" stroke="${ac}" stroke-width="2" stroke-dasharray="3 4" stroke-linejoin="round"/>` : ""}
    <rect x="95" y="${top - 7}" width="10" height="14" rx="2" fill="${ac}"/>
    <circle cx="100" cy="100" r="21" fill="${sp}"/><circle cx="100" cy="100" r="9" fill="${ac}"/>
  </g></svg>`;
}

/* ============================================================
   Page logic
   ============================================================ */
const $ = s => document.querySelector(s);
const fmt = v => new Intl.NumberFormat(CONFIG.locale, { style: "currency", currency: CONFIG.currency, minimumFractionDigits: v % 1 ? 2 : 0 }).format(v);
const norm = s => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const hasPrice = p => typeof p.price === "number";
const priceOf = p => hasPrice(p) ? fmt(p.price) : "On request";
const imgSrc = p => p.img || `${CONFIG.imageFolder}${p.sku}.${CONFIG.imageExt}`;

const BLURB = {
  "Sport": "Everyday sport wheel with a grippy rim and a direct feel.",
  "Classic": "Timeless design with a thin rim and light, relaxed steering.",
  "Luxury": "Refined wheel with premium materials and careful finishing."
};
const descOf = p => p.desc ||
  `${BLURB[p.cat] || ""} ${p.dia ? p.dia + " mm " : ""}${p.shape.toLowerCase()} rim in ${p.mat.toLowerCase()} with ${p.accent} ${STITCHED.has(p.mat) ? "stitching" : "accents"}.`.trim();

function contact(text) {
  if (CONFIG.instagram) {
    // accepts "gbcustom.br", "@gbcustom.br" or a full instagram.com link
    const user = encodeURIComponent(CONFIG.instagram.trim()
      .replace(/^https?:\/\/(www\.)?instagram\.com\//i, "").replace(/^@/, "").split(/[\/?]/)[0]);
    return CONFIG.instagramLink === "profile" ? `https://www.instagram.com/${user}/` : `https://ig.me/m/${user}`;
  }
  if (CONFIG.whatsapp) return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  return `mailto:${CONFIG.email}?subject=${encodeURIComponent(text.slice(0, 80))}&body=${encodeURIComponent(text)}`;
}
const sizeOf = d => !d ? "" : d < 370 ? "s" : d < 390 ? "m" : "l";

const state = { cat: "All", brand: "All", q: "", mat: "", shape: "", size: "", sort: "featured", stock: false, shown: CONFIG.pageSize };
const CATEGORIES = [...new Set(PRODUCTS.map(p => p.cat))];
// Car brands shown in the menu. Add or remove names here (each product needs a matching brand:"...")
const BRANDS = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen"];

// Store texts
document.title = `Steering wheel catalog | ${CONFIG.store}`;
$("#brand").textContent = CONFIG.store;
$("#footer-text").textContent = `${CONFIG.store}. Prices and availability may change without notice.`;
$("#contact-top").href = contact(`Hello! I'm browsing the ${CONFIG.store} catalog and have a question.`);
$("#contact-foot").href = contact(`Hello! I have a question about the ${CONFIG.store} catalog.`);

// Filters
function fillSelect(sel, allLabel, values) {
  sel.innerHTML = `<option value="">${allLabel}</option>` + values.map(v => `<option>${v}</option>`).join("");
}
fillSelect($("#f-mat"), "All materials", [...new Set(PRODUCTS.map(p => p.mat))].sort());
fillSelect($("#f-shape"), "All shapes", [...new Set(PRODUCTS.map(p => p.shape))].sort());
// Hide filters that have no data yet (no diameters, no prices)
if (!PRODUCTS.some(p => p.dia)) $("#f-size").closest("label").style.display = "none";
if (!PRODUCTS.some(hasPrice)) $("#f-sort").querySelectorAll('option[value="low"], option[value="high"]').forEach(o => o.remove());

function navList(key, allLabel, names) {
  return ["All", ...names].map(name => {
    const n = name === "All" ? PRODUCTS.length : PRODUCTS.filter(p => p[key] === name).length;
    return `<li><button type="button" data-${key}="${name}" aria-pressed="${state[key] === name}">
      <span>${name === "All" ? allLabel : name}</span><span class="n">${n}</span></button></li>`;
  }).join("");
}
function renderCats() {
  $("#cats").innerHTML = navList("cat", "All", CATEGORIES);
  $("#brands").innerHTML = navList("brand", "All brands", BRANDS);
}

function filtered() {
  const q = norm(state.q.trim());
  const list = PRODUCTS.filter(p =>
    (state.cat === "All" || p.cat === state.cat) &&
    (state.brand === "All" || p.brand === state.brand) &&
    (!state.mat || p.mat === state.mat) &&
    (!state.shape || p.shape === state.shape) &&
    (!state.size || sizeOf(p.dia) === state.size) &&
    (!state.stock || p.stock) &&
    (!q || norm(`${p.name} ${p.sku} ${p.brand} ${p.cat} ${p.mat} ${p.shape} ${p.dia || ""} ${p.desc || ""} ${p.extras || ""}`).includes(q))
  );
  if (state.sort === "low") list.sort((a, b) => (hasPrice(a) ? a.price : 1e12) - (hasPrice(b) ? b.price : 1e12));
  if (state.sort === "high") list.sort((a, b) => (hasPrice(b) ? b.price : -1) - (hasPrice(a) ? a.price : -1));
  if (state.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, CONFIG.locale, { numeric: true }));
  return list;
}

function render() {
  const list = filtered();
  const visible = list.slice(0, state.shown);
  $("#count").textContent = list.length === 0 ? "0 wheels"
    : `Showing ${visible.length} of ${list.length} ${list.length === 1 ? "wheel" : "wheels"}`;
  $("#empty").hidden = list.length > 0;
  $("#more").hidden = visible.length >= list.length;
  $("#shown").textContent = `${visible.length} of ${list.length} shown`;
  $("#more-btn").textContent = `Show ${Math.min(CONFIG.pageSize, list.length - visible.length)} more`;

  $("#grid").innerHTML = visible.map(p => {
    const tag = !p.stock ? `<span class="badge off">Sold out</span>` : (p.badge ? `<span class="badge">${p.badge}</span>` : "");
    return `<li>
      <button type="button" class="tile" data-sku="${p.sku}" aria-label="${p.name}, ${priceOf(p)}${p.stock ? "" : ", sold out"}. View details">
        <span class="art${p.stock ? "" : " off"}">${tag}<img class="ph${p.fit === "contain" ? " fit" : ""}" data-sku="${p.sku}" src="${imgSrc(p)}" alt="${p.name}" loading="lazy" decoding="async"></span>
        <span class="info"><span class="nome">${p.name}</span><span class="preco">${priceOf(p)}</span></span>
        <span class="cat">${p.brand}, ${p.cat}${p.dia ? ", " + p.dia + " mm" : ""}</span>
      </button>
    </li>`;
  }).join("");
}

function resetPage() { state.shown = CONFIG.pageSize; }

// Product detail
const dlg = $("#dlg");
function openProduct(sku) {
  const p = PRODUCTS.find(x => x.sku === sku);
  if (!p) return;
  const quoteMsg = `Hello! I'd like a quote for ${p.name}${hasPrice(p) ? `, listed at ${fmt(p.price)}` : ""}.\nReference number: ${p.sku}`;
  const restockMsg = `Hello! When will ${p.name} be back in stock?\nReference number: ${p.sku}`;
  const link = (msg, cls, label) =>
    `<a class="btn${cls}" target="_blank" rel="noopener" href="${contact(msg)}" data-copy="${msg.replace(/"/g, "&quot;")}">${label}</a>`;
  const action = (p.stock
    ? link(quoteMsg, "", "Request a quote")
    : `<p class="d-note">This wheel is sold out right now.</p>` + link(restockMsg, " ghost", "Ask about restock"))
    + (CONFIG.instagram ? `<p class="d-warn"><strong>&#9888; Before you send:</strong> Instagram does not let us pre-fill your message. The wheel details &mdash; including the reference number <strong>${p.sku}</strong> &mdash; were just copied to your clipboard. You must paste them into the chat yourself, or we won't know which wheel you mean.</p>` : "");
  $("#dlg-body").innerHTML = `
    <div class="d-art"><img class="ph fit" data-sku="${p.sku}" src="${imgSrc(p)}" alt="${p.name}"></div>
    <div class="d-info">
      <p class="d-cat">${p.cat}</p>
      <h2 id="d-title">${p.name}</h2>
      <p class="d-preco">${hasPrice(p) ? fmt(p.price) : "Price on request"}</p>
      <p>${descOf(p)}</p>
      <dl class="specs">
        <dt>SKU</dt><dd>${p.sku}</dd>
        <dt>Car brand</dt><dd>${p.brand}</dd>
        <dt>Material</dt><dd>${p.mat}</dd>
        <dt>Shape</dt><dd>${p.shape}</dd>
        ${p.dia ? `<dt>Diameter</dt><dd>${p.dia} mm</dd>` : ""}
        ${p.extras ? `<dt>Extras</dt><dd>${p.extras}</dd>` : ""}
        <dt>Fitment</dt><dd>Tell us your car model and year and we will confirm it fits</dd>
      </dl>
      <div class="d-actions">${action}</div>
    </div>
    <button type="button" class="close" aria-label="Close details">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>`;
  dlg.showModal();
}

// Missing photo: swap in the drawing
document.addEventListener("error", e => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement) || !img.classList.contains("ph")) return;
  const p = PRODUCTS.find(x => x.sku === img.dataset.sku);
  if (p) img.outerHTML = wheelSvg(p);
}, true);

// Instagram cannot pre-fill a message, so copy it for the customer to paste
document.addEventListener("click", e => {
  const a = e.target.closest("a[data-copy]");
  if (a && CONFIG.instagram && navigator.clipboard) navigator.clipboard.writeText(a.dataset.copy).catch(() => {});
});

// Events
$("#cats").addEventListener("click", e => {
  const b = e.target.closest("button[data-cat]");
  if (!b) return;
  state.cat = b.dataset.cat; resetPage(); renderCats(); render();
});
$("#brands").addEventListener("click", e => {
  const b = e.target.closest("button[data-brand]");
  if (!b) return;
  state.brand = b.dataset.brand; resetPage(); renderCats(); render();
});
$("#search").addEventListener("input", e => { state.q = e.target.value; resetPage(); render(); });
$("#f-mat").addEventListener("change", e => { state.mat = e.target.value; resetPage(); render(); });
$("#f-shape").addEventListener("change", e => { state.shape = e.target.value; resetPage(); render(); });
$("#f-size").addEventListener("change", e => { state.size = e.target.value; resetPage(); render(); });
$("#f-sort").addEventListener("change", e => { state.sort = e.target.value; resetPage(); render(); });
$("#f-stock").addEventListener("change", e => { state.stock = e.target.checked; resetPage(); render(); });
$("#more-btn").addEventListener("click", () => { state.shown += CONFIG.pageSize; render(); });
$("#clear").addEventListener("click", () => {
  Object.assign(state, { cat: "All", brand: "All", q: "", mat: "", shape: "", size: "", sort: "featured", stock: false });
  $("#search").value = ""; $("#f-mat").value = ""; $("#f-shape").value = "";
  $("#f-size").value = ""; $("#f-sort").value = "featured"; $("#f-stock").checked = false;
  resetPage(); renderCats(); render();
});
$("#grid").addEventListener("click", e => {
  const t = e.target.closest(".tile");
  if (t) openProduct(t.dataset.sku);
});
dlg.addEventListener("click", e => {
  if (e.target === dlg || e.target.closest(".close")) dlg.close();
});

renderCats();
render();