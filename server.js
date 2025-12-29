const express = require('express');

const app = express();
const PORT = 8000;


// Middleware to parse JSON requests
app.use(express.json());


let Products = [
    {
        "id": 1,
        "name": "saabun",
        "dec": "saabun aad u fiicn",
        "price":4,
        "image": "🧼",
        "qty": 200
    },
    {
        "id":2,
         "name": "shaampo",
        "dec": "shaampo aad u fiicn",
        "price":14,
        "image": "🧴",
        "qty": 100
    }
];


app.get('/', function (req, res) {
    res.send("Welcome 🔴");
});

// get Product
app.get('/Products', function (req, res) {
    res.json(Products);
});

// post Create Product

app.post('/register-product', function (req, res) {

    const newUser = {
        id: Products.length + 1,
        name: req.body.name,
        dec: req.body.dec,
        price: req.body.price,
        image: req.body.image,
        qty: req.body.qty

    };

    Products.push(newUser);

    res.status(201).json(Products);

});


app.get('/test', (req, res)=>{
    res.send("hi zaki")
})

// Delete Product

app.delete('/delete-product/:id', function (req, res) {

    const deleteUser = req.params.id;

    // ! =
    Products = Products.filter((product) => product.id != deleteUser);

    res.json(Products);

});

//put update product

app.put('/update-product/:id', function (req, res) {
    const productId = parseInt(req.params.id);
    const { name, dec, price, image, qty } = req.body;

    // Find product
    const product = Products.find(p => p.id === productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Update only if data is provided
    if (name) product.name = name;
    if (dec) product.dec = dec;
    if (price) product.price = price;
    if (image) product.image = image;
    if (qty) product.qty = qty;

    res.json(Products); // Return updated array
});




app.listen(PORT, function () {
    console.log(`app listening on port ${PORT}`);
});