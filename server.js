const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5001; // Puerto del servidor

app.use(bodyParser.json());
app.use(cors());


const data = require('./data');

app.get('/api/products', (req, res) => {
    // Obtiene todos los productos
    const products = data.getProducts();
    res.json(products);
});



app.listen(port, () => {
    console.log(`Servidor API corriendo en http://localhost:${port}`);
});
