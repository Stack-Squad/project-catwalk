const express = require('express');
const utils = require('../helpers/utils.js');

const app = express();
const port = process.env.PORT;
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/products', (req, res) => {
  console.log('serving GET request to /products');
  utils.getProducts()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.get('/products/:product_id', (req, res) => {
  const id = req.params.product_id;
  console.log(`serving get request to /products/${id}`);
  utils.getProductById()
    .then((productInfo) => {
      res.json(productInfo);
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
