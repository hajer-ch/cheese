const express = require('express');// import express module
const app = express();// create Express application
var protocol = require('protocol');
const mongoose = require('mongoose');// Import Mongoose Module
const bcrypt = require('bcrypt');
const path = require('path');
const bodyParser = require("body-parser");
mongoose.connect('mongodb://localhost:27017/dishes', {
  useNewUrlParser: true, useUnifiedTopology: true
});
const { json } = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const multer = require('multer');
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
const Product = require('./models/product'); 
const Order = require('./models/orders'); 
const recette = require('./models/recettes');
const order = require('./models/orders');
const User = require('./models/users');
const product = require('./models/product');

// products
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-cheese-" + "." + extension;
    cb(null, imgName);
  },
});
app.post('/addProduct', multer({ storage: storage }).single("image"),
(req, res) => {
  console.log("Here into BE, Add product", req.body);
  console.log("file", req.file);
  console.log("req.protocol", req.protocol);
  url = req.protocol + "://" + req.get("host");
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: url + "/images/" + req.file.filename,
  });
  product.save().then((result) => {
    if (result) {
      res.status(200).json({ message: "Added with success" });
    }
  });
}
);

app.get('/products', (req, res) => {
  console.log('here all products');
  product.find((err, docs) => {
    if (err) {
      console.log('pb with db');
    } else {
      res.status(200).json({
        message: 'here all products to homes',
        products: docs
      });
    }
  })
});
app.get("/getProduct/:id", (req, res) => {

  console.log('here in get product by id', req.params.id);

  Product.findOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here team getbyId', result);
      res.status(200).json({
        findedProduct: result
      })
    });
})
app.delete('/deleteById/:id', (req, res) => {
  console.log('here in delete by ID', req.params.id);
  Product.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here result after delete', result);
      res.status(200).json({
        message: 'Product delated with success'
      })
    }
  )
});

app.put("/updateProduct/:id", (req, res) => {
  console.log("Here in update By ID", req.params.id);
  // new instance
  const product = new Product({
    _id: req.body._id,
    title: req.body.title,
    description: req.body.description,
    price:req.body.price, 
    image:req.body.image,
   
  });
  // save instance
  Product.updateOne({ _id: req.params.id }, product).then(
    (result) => {
      res.status(200).json({
        message: 'Updated with success'
      })
    })
});
// search Product by name
app.post('/searchProduct', (req, res) => {
  Product.find({ title: req.body.title }).then(
    (result) => {
      res.status(200).json({
        searchedProducts: result
      })
    });
});
// Recettes

app.post('/addRecette', (req, res) => {
  // comm with db
  const recette = new Recette({
    title: req.body.title,
    description: req.body.description
  });
  recette.save((err, result) => {
    console.log("Error", err);
    console.log("Result", result);

    if (err) {
      res.status(200).json({
        message: "0"
      });
    }
    if (result) {
      res.status(200).json({
        message: "1"
      });
    }

  });


});
app.get('/recettes', (req, res) => {
  console.log('here all recettes');
  recette.find((err, docs) => {
    if (err) {
      console.log('pb with db');
    } else {
      res.status(200).json({
        message: 'here all recettes to homes',
        recettes: docs
      });
    }
  })
});
app.get("/getRecette/:id", (req, res) => {

  console.log('here in get recette by id', req.params.id);

  Recette.findOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here recette getbyId', result);
      res.status(200).json({
        findedRecette: result
      })
    });
})
app.delete('/deleteById/:id', (req, res) => {
  console.log('her in delete by ID', req.params.id);
  Recette.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here result after delete', result);
      res.status(200).json({
        message: 'recette delated with success'
      })
    }
  )
});

app.put("/updateRecette/:id", (req, res) => {
  console.log("Here in update recette By ID", req.params.id);
  // new instance
  const recette = new Recette({
    _id: req.body._id,
    title: req.body.title,
    description: req.body.description,
  });
  // save instance
  Recette.updateOne({ _id: req.params.id }, recette).then(
    (result) => {
      res.status(200).json({
        message: 'Updated with success'
      })
    })
});


// Orders

app.post('/addOrder', (req, res) => {
  // comm with db
  const order = new Order({
    title: req.body.title,
    description: req.body.description
  });
  order.save((err, result) => {
    console.log("Error", err);
    console.log("Result", result);

    if (err) {
      res.status(200).json({
        message: "0"
      });
    }
    if (result) {
      res.status(200).json({
        message: "1"
      });
    }

  });


});
app.get('/orders', (req, res) => {
  console.log('here all orders');
  order.find((err, docs) => {
    if (err) {
      console.log('pb with db');
    } else {
      res.status(200).json({
        message: 'here all orders to homes',
        orders: docs
      });
    }
  })
});
app.get("/getOrder/:id", (req, res) => {

  console.log('here in get order by id', req.params.id);

  Order.findOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here order getbyId', result);
      res.status(200).json({
        findedOrder: result
      })
    });
})
app.delete('/deleteById/:id', (req, res) => {
  console.log('her in delete by ID', req.params.id);
  Order.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here result after delete', result);
      res.status(200).json({
        message: 'Order delated with success'
      })
    }
  )
});
app.put("/updateOrder/:id", (req, res) => {
  console.log("Here in update order By ID", req.params.id);
  // new instance
  const order = new Order({
    _id: req.body._id,
    title: req.body.title,
    description: req.body.description,
  });
  // save instance
  Order.updateOne({ _id: req.params.id }, order).then(
    (result) => {
      res.status(200).json({
        message: 'Updated with success'
      })
    })
});
module.exports = app;



//signUp
app.post("/signup", (req, res) => {
  bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    console.log("Here into signup", req.body);
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      pwd: cryptedPwd,
      role: req.body.role,
      adresse:req.body.adresse,
      region:req.body.region,
      commune:req.body.commune,
      tel:req.body.tel,
      codePostal:req.body.codePostal
    });
    user.save((err, result) => {
      console.log("Error", err);
      if (err) {
        res.status(200).json({
          message: "0",
        });
      }
      if (result) {
        res.status(200).json({
          message: "1",
        });
      }
    });
  });
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((findedUser) => {
      if (!findedUser) {
        res.status(200).json({
          message: "0",
        });
      }
      return bcrypt.compare(req.body.pwd, findedUser.pwd);
    })
    .then((correctUserPwd) => {
      console.log("correctUserPwd", correctUserPwd);
      if (!correctUserPwd) {
        res.status(200).json({
          message: "1",
        });
      }
      User.findOne({ email: req.body.email }).then((finalUser) => {
        let user = {
          id: finalUser._id,
          fullName: finalUser.fullName,
          role: finalUser.role,
        };
        res.status(200).json({
          user: user,
          message: "2",
        });
      });
    });
});
