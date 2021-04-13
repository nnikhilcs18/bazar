const express = require("express");
var cors = require("cors");
var addToCartModule = require("./data/addToCart.js");
var addToCartArray = addToCartModule.array;
var bannersObj = require("./data/banners.json");
var categoriesObj = require("./data/categories.json");
var productsObj = require("./data/products.json");

const { response } = require("express");
var app = express(); // one application
var router = express.Router(); // server side router

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors()); // sets the header instead !

router.get("/addToCart", function (req, res) {

  res.json(addToCartArray); //converts js object to JSON

});

// Method:POST , API -> /addToCart

router.post("/addToCart", function (req, res) {

  

  addToCartArray.push({

    ProductId: req.body.ID,

    ImageURL: req.body.image,

    ProductQuantity  :1,

    ProductName:req.body.ProductName,

    ProductPrice:req.body.Price,

  });

  // console.log(addToCartArray)

  // res.json(addToCartObj); //converts js object to JSON

  // OR

  res.json({ success: "Record Inserted successfully" });

});
// addToCart API
// Method:GET , API -> /addToCart
// router.get("/addToCart", function (req, res) {
//   res.json(addToCartArray); //converts js object to JSON
// });

// router.post("/addToCart", function (req, res) {
  
//   addToCartArray.push({
//     ProductId: req.body.ID,
//     ImageURL: req.body.image,
//     ProductQuantity  :1,
//   });
//   console.log(addToCartArray)
//   // res.json(addToCartObj); //converts js object to JSON
//   // OR
//   res.json({ success: "Record Inserted successfully" });
// });




// products API
router.get("/products", function (req, res) {
  res.json(productsObj); //converts js object to JSON
});

// Method:POST , API -> /products
router.post("/products", function (req, res) {
  console.log(req.body.products); // data received from client side (within request object)
  productsObj.push({
    name: req.body.products.name,
    imageURL: req.body.products.imageURL,
    description: req.body.products.description,
    price: req.body.products.price,
    stock: req.body.products.stock,
    category: req.body.products.category,
    sku: req.body.products.sku,
    id: req.body.products.id,
  });
  // res.json(productsObj); //converts js object to JSON
  // OR
  res.json({ success: "Record Inserted successfully" });
});

// banners API
//Method:GET , API -> /banners
router.get("/banners", function (req, res) {
  res.json(bannersObj); //converts js object to JSON
});
router.post("/banners", function (req, res) {
  console.log(req.body.banners); // data received from client side (within request object)
  categoriesObj.push({
    bannerImageUrl: req.body.banners.bannerImageUrl,
    bannerImageAlt: req.body.banners.bannerImageAlt,
    isActive: req.body.banners.isActive,
    order: req.body.banners.order,
    id: req.body.banners.id,
  });
  // res.json(productsObj); //converts js object to JSON
  // OR
  res.json({ success: "Record Inserted successfully" });
});

// categories API
router.get("/categories", function (req, res) {
  res.json(categoriesObj); //converts js object to JSON
});

// Method:POST , API -> /categories
router.post("/categories", function (req, res) {
  console.log(req.body.categories); // data received from client side (within request object)
  categoriesObj.push({
    name: req.body.setting.categories.name,
    key: req.body.categories.key,
    description: req.body.categories.description,
    enabled: req.body.categories.enabled,
    order: req.body.categories.order,
    imageUrl: req.body.categories.imageUrl,
    id: req.body.categories.id,
    icon: req.body.categories.icon,
  });
  // res.json(productsObj); //converts js object to JSON
  // OR
  res.json({ success: "Record Inserted successfully" });
});

// Home Url (Optional and do not use)
router.get("/", function (req, res) {
  res.sendFile("client.html", { root: __dirname });
});

app.use(router);
app.listen(4000, () => console.log("Server running @ 4000 !"));
