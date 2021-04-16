const axios = require('axios');
const config = require('../config.js');

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

module.exports.getProducts = () => {
  let options = {
    url: '/products',
    method: 'get',
    baseURL: baseURL,
    headers: {
      'Authorization': config.TOKEN
    }
  };

  return axios(options)
  .then(response => {
    return response.data;
  })
  .catch(err => {
    console.log(err);
  });
};

module.exports.getProductById = (id) => {
  let options = {
    url: `/products/${id}`,
    method: 'get',
    baseURL: baseURL,
    headers: {
      'Authorization': config.TOKEN
    }
  }

  return axios(options)
  .then(response => {
    return response.data;
  })
  .catch(err => {
    console.log(err);
  });
};