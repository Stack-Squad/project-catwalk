import axios from 'axios';

export const getReviews = (productId, sortBy='relevance') => axios.get(`/reviews/${productId}/${sortBy}`)
  .then((response) => response.data.results)
  .catch((err) => console.log(err.message));

export const getReviewMetadata = (productId) => axios.get(`/reviews/${productId}`)
  .then((response) => response.data)
  .catch((err) => console.log(err.message));

export const markReviewHelpful = (reviewId) => axios.put(`/reviews/${reviewId}/helpful`)
  .then((response) => response.data)
  .catch((err) => console.log(err.message));

export const reportReview = (reviewId) => axios.put(`/reviews/${reviewId}/report`)
  .then((response) => response.data)
  .catch((err) => console.log(err.message));
