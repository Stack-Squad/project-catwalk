import React from 'react';
import axios from 'axios';
import sampleData from '../../helpers/sampleData';

import Banner from './components/Banner';
import Overview from './components/Overview';
import RatingsAndReviews from './components/RatingsAndReviews';
import QnA from './components/QnA';
import RelatedItems from './components/RelatedItems';
import {
  getReviews, getReviewMetadata, getProducts, getQuestionList,
} from '../../helpers/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: sampleData.productList[0].id,
      questionList: sampleData.questionList,
      currentProduct: sampleData.productList[0],
      reviewsList: [...sampleData.reviewList.results],
      reviewsMetaData: { ...sampleData.reviewMetaData },
    };
  }

  componentDidMount() {
    // grabs a random product from the productList response
    const index = Math.floor(Math.random() * 5);
    axios.get('/products')
      .then((response) => response.data)
      .then((productList) => {
        const productId = productList[index].id;
        const currentProduct= productList[index];
        const metaData = getReviewMetadata(productId);
        const allReviews = getReviews(productId);
        const questionList = getQuestionList(productId);
        Promise.all([metaData, allReviews, questionList])
          .then((values) => {
            this.setState({
              // eslint-disable-next-line react/no-access-state-in-setstate
              ...this.state,
              productId,
              currentProduct,
              questionList: { ...values[2] },
              reviewsList: [...values[1]],
              reviewsMetaData: { ...values[0] },
            });
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    const {
      productId, questionList, currentProduct, reviewsList, reviewsMetaData,
    } = this.state;

    return (
      <div>
        <Banner />
        <Overview productId={productId} />
        <RelatedItems productId={productId} />
        <QnA questionList={questionList} productName={currentProduct.name} />
        <RatingsAndReviews
          productId={productId}
          productName={currentProduct.name}
          metaData={reviewsMetaData}
          allReviews={reviewsList}
        />
      </div>
    );
  }
}

export default App;
