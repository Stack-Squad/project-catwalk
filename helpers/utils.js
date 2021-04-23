const axios = require('axios');

const token = process.env.TOKEN;
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

module.exports.getProducts = () => {
  const options = {
    url: '/products',
    method: 'get',
    baseURL,
    headers: {
      Authorization: token,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getProductById = (id) => {
  const options = {
    url: `/products/${id}`,
    method: 'get',
    baseURL,
    headers: {
      Authorization: token,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getQuestionList = (id) => {
  const options = {
    url: `qa/questions?product_id=${id}`,
    method: 'get',
    baseURL,
    headers: {
      Authorization: token,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getCart = () => {
  const options = {
    url: '/cart',
    method: 'get',
    baseURL,
    headers: {
      Authorization: token,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((err) => {
      console.log('utils get cart error:', error);
    });
};

module.exports.postToCart = (skuId) => {
  const options = {
    url: '/cart',
    body: {
      sku_id: Number.parseInt(skuId),
    },
    method: 'post',
    baseURL,
    headers: {
      Authorization: token,
    },
  };

  return axios(options)
    .then((response) => response)
    .catch((error) => {
      console.log('utils post to cart error: ', error);
    });
};
