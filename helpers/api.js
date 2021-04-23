import axios from 'axios';

export const getReviews = (productId, sortBy='relevance') => axios.get(`/reviews/${productId}/${sortBy}`)
  .then((response) => response.data.results)
  .catch((err) => console.log(err.message));
// Can use it when I configure webpack to use async await
// try {
//   const response = await axios.get(`/reviews/${productId}/${sortBy}`);
//   return response.data.results;
// } catch (err) {
//   console.error(err.message);
// }

// export const getReviewMetadata = async (productId) => {
//   try {
//     const response = await axios.get(`/reviews/${productId}`);
//     return response.data;
//   } catch (err) {
//     console.log(err.message);
//   }
// };

export const getReviewMetadata = (productId) => axios.get(`/reviews/${productId}`)
  .then((response) => response.data)
  .catch((err) => console.log(err.message));
