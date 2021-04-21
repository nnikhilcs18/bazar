const express = require("express");
crypto = require('crypto');
var cors = require("cors");
var addToCartModule = require("./data/addToCart.js");
var addToCartArray = addToCartModule.array;
var bannersObj = require("./data/banners.json");
var categoriesObj = require("./data/categories.json");
var productsObj = require("./data/products.json");
var usersObj = require("./data/users.json")

const {
  response
} = require("express");
const { fstat } = require("fs");
var app = express(); // one application
var router = express.Router(); // server side router

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({
  extended: true
}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors()); // sets the header instead !

router.get("/addToCart", function (req, res) {

  res.json(addToCartArray); //converts js object to JSON

});

// Method:POST , API -> /addToCart

router.post("/addToCart", function (req, res) {

  let itemIndex = addToCartArray.findIndex(
    element => element.productId === req.body.ID,
  );
  if(itemIndex>=0){
    addToCartArray[itemIndex].productQuantity=addToCartArray[itemIndex].productQuantity+1
  }
  else{
    addToCartArray.push({

      productId: req.body.ID,
      imageURL: req.body.image,
      productQuantity: 1,
      productName: req.body.productName,
      productPrice: req.body.price,
  
    });
  }

  res.json({
    success: "Record Inserted successfully"
  });

});



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
  res.json({
    success: "Record Inserted successfully"
  });
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
  res.json({
    success: "Record Inserted successfully"
  });
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
  res.json({
    success: "Record Inserted successfully"
  });
});

router.get("/users", function (req, res) {
  res.json(usersObj); //converts js object to JSON
});

// Method:POST , API -> /users
/*router.post("/users", function (req, res) {
  console.log(req.body.users); // data received from client side (within request object)
  usersObj.push({
    username: req.body.users.username,
    password: req.body.users.password,
  });
  // res.json(productsObj); //converts js object to JSON
  // OR
  res.json({ success: "Record Inserted successfully" });
});*/

//server side validation 

const generateAuthToken = () => {
  return crypto.randomBytes(30).toString('hex');
}

app.post('/users', (req, res) => {

  const authTokens = {};
  var responseMsg;
  const {
    email,
    password,
    type,
  } = req.body;
  //const hashedPassword = getHashedPassword(password);

  if (req.body.type == "register") {
    var isUserExist = false;
    const data = {
      "responseMsg": isUserExist
    }
    console.log("this is register function in server", req.body);
    var user = usersObj.find(u => {
      return u.username === email
    });
    if (user) {
      console.log("user present")
      isUserExist: true
    } 
    
    else {
      const fs = require('fs')
      const writeData={
        username:email,
        password:password
      }
      const jsonString=JSON.stringify(writeData);
      fs.readFile('./data/users.json','utf-8',function(err,data){
        if(err)
        throw err;
        var arrayOfObject=JSON.parse(data)
        arrayOfObject.push({
          "username":email,
          "password":password
        })
        console.log(arrayOfObject);

        fs.writeFile('./data/users.json',JSON.stringify(arrayOfObject),'utf-8',function(err){
          if(err)throw err
          
        })
      })


      /*fs.appendFile('./data/users.json',jsonString,err=>{
        if(err)
        {
          console.log("error writing file",err);
        }
        else{
          console.log("successfully writen to file");
        }
      })*/

    }
    res.send(data)
  } 
  else {
    const user = usersObj.find(u => {
      return u.username === email && password === u.password
    });
    console.log("-------server talking-------")
    console.log(req.body)
    if (user) {
      console.log("user found successfully");
      const authToken = generateAuthToken();
      responseMsg = "userFound";
      const data = {
        "token": authTokens,
        "responseMsg": true
      }
      authTokens[authToken] = user;
      console.log(authTokens);
      res.send(data);

    } else {
      console.log("user not found");
      const data = {
        "token": null,
        "responseMsg": false
      }
      res.send(data);
    }
  }
});











// Home Url (Optional and do not use)
router.get("/", function (req, res) {
  res.sendFile("client.html", {
    root: __dirname
  });
});













app.use(router);
app.listen(4000, () => console.log("Server running @ 4000 !"));