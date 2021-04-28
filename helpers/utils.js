const axios = require('axios');

const token = process.env.TOKEN;
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

const option = {
  baseURL,
  headers: {
    Authorization: token,
  },
};

module.exports.getReviews = (url) => axios.get(url, option)
  .then((response) => response.data)
  .catch((err) => {
    console.error(err.message);
  });

module.exports.updateReview = (url) => axios.put(url, null, option)
  .then((response) => response.data)
  .catch((err) => {
    console.error(err.message);
  });

module.exports.postReview = (url, data) => axios.post(url, data, option)
  .then((response) => response.data)
  .catch((err) => {
    console.error(err.message);
  });

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
    .catch((error) => error);
};

module.exports.postToCart = (skuId) => {
  const options = {
    url: '/cart',
    method: 'post',
    baseURL,
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      sku_id: Number.parseInt(skuId),
    }),
  };

  return axios(options)
    .then((response) => JSON.stringify(response.data))
    .catch((error) => error);
};

module.exports.addQuestion = (form) => {
  const { body, name, email } = form;
  const id = parseInt(form.product_id);

  const options = {
    url: '/qa/questions',
    baseURL,
    headers: {
      Authorization: token,
    },
  };

  return axios.post('/qa/questions', {
    body,
    name,
    email,
    product_id: id,
  }, options)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports.getProductStylesById = (id) => {
  const options = {
    url: `/products/${id}/styles`,
    method: 'get',
    baseURL,
    headers: {
      Authorization: token,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((err) => err);
};

module.exports.addAnswer = (id, form) => {
  const {
    body, name, email, photos,
  } = form;

  const options = {
    baseURL,
    headers: {
      Authorization: token,
    },
  };

  return axios.post(`/qa/questions/${id}/answers`, {
    body,
    name,
    email,
    photos,
  }, options)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err.message);
    });
};
