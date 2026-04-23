import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 }
];

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.post("/api/products", (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1;

    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).send("Product not found");
    }
});

app.put("/api/products/:id", (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);

    if (index !== -1) {
        products[index] = { ...products[index], ...req.body };
        res.json(products[index]);
    } else {
        res.status(404).send("Product not found");
    }
});

app.delete("/api/products/:id", (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);

    if (index !== -1) {
        products.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send("Product not found");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} , http://192.168.1.12:3000/ `);
});