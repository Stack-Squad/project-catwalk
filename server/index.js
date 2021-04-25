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

app.get('/reviews/:productId/:sort', (req, res) => {
  const { productId, sort } = req.params;
  utils.getReviews(`/reviews?product_id=${productId}&sort=${sort}`)
    .then((response) => res.send(response))
    .catch((err) => {
      console.log(err.message);
    });
});

app.put('/reviews/:reviewId/helpful', (req, res) => {
  const { reviewId } = req.params;
  utils.markReviewHelpful(`/reviews/${reviewId}/helpful`)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.get('/cart', (req, res) => {
  console.log('cart access request');
  utils.getCart()
    .then((data) => {
      res.statusCode = 200;
      res.send(data);
      res.end();
    })
    .catch((error) => {
      console.log(`Error for getting cart from API: ${error}`);
      res.statusCode = 404;
      res.statusMessage = `Could not get cart info: ${error}`;
      res.end();
    });
});

app.get('/reviews/:productId', (req, res) => {
  const { productId } = req.params;
  utils.getReviews(`/reviews/meta?product_id=${productId}`)
    .then((response) => res.send(response))
    .catch((err) => {
      console.log(err.message);
    });
});

app.post('/cart/:sku_id', (req, res) => {
  const skuId = req.params.sku_id;
  console.log(`Addition to cart request for sku_id: ${skuId}`);
  utils.postToCart(skuId)
    .then((data) => {
      res.statusCode = 201;
      res.statusMessage = 'Created';
      res.send(data);
      res.end();
    })
    .catch((error) => {
      console.log(`Error for addition to cart with sku_id, '${skuId}': ${error}`);
      res.statusCode = 404;
      res.statusMessage = `Could not add to cart: ${error}`;
      res.end();
    });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
