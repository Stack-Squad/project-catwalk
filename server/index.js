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
  console.log(`serving GET request to /products/${id}`);
  utils.getProductById()
    .then((productInfo) => {
      res.json(productInfo);
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.get('/qa/questions/:product_id', (req, res) => {
  const id = req.params.product_id;
  console.log(`serving GET request to /qa/questions/${id}`);
  utils.getQuestionList(id)
    .then((questionList) => {
      res.json(questionList);
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  const id = req.params.question_id;
  console.log(`serving PUT request to /qa/questions/${id}/helpful`);
  utils.markQuestionHelpful(id)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  const id = req.params.answer_id;
  console.log(`serving PUT request to /qa/answers/${id}/helpful`);
  utils.markAnswerHelpful(id)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  const id = req.params.answer_id;
  console.log(`serving PUT request to /qa/answers/${id}/report`);
  utils.reportAnswer(id)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.get('/cart', (req, res) => {
  console.log('cart access request');
  utils.getCart()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post('/cart/:sku_id', (req, res) => {
  const skuId = req.params.sku_id;
  console.log(`addition to cart request for sku_id: ${skuId}`);
  utils.postToCart(skuId)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
