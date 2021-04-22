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

module.exports.markQuestionHelpful = (id) => {
  const options = {
    url: `qa/questions/${id}/helpful`,
    method: 'put',
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

module.exports.markAnswerHelpful = (id) => {
  const options = {
    url: `qa/answers/${id}/helpful`,
    method: 'put',
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

module.exports.reportAnswer = (id) => {
  const options = {
    url: `qa/answers/${id}/report`,
    method: 'put',
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
