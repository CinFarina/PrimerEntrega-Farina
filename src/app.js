const express = require('express');
const productRouter = require('./routes/products.router.js');
const cartRouter = require('./routes/carts.router.js');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

app.use((req, res) => {
    res.status(404).send({ status: "error", message: "Ruta no encontrada." });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});