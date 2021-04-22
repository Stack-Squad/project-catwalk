import React from 'react';
import axios from 'axios';
import sampleData from '../../helpers/sampleData';

import Banner from './components/Banner';
import Overview from './components/Overview';
import RatingsAndReviews from './components/RatingsAndReviews';
import QnA from './components/QnA';
import RelatedItems from './components/RelatedItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: sampleData.productList[0].id,
      // questionList
    };
  }

  componentDidMount() {
    // grabs a random product from the productList response
    const index = Math.floor(Math.random() * 5);
    axios.get('/products')
      .then((response) => response.data)
      .then((productList) => productList[index].id)
      .then((productId) => {
        this.setState({ productId });
        return productId;
      })
      // .then((productId) => {
      //   // getquestionList(productId)
      //     // setState({ questionList })
      // })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { productId } = this.state;
    return (
      <div>
        <Banner />
        <Overview productId={productId} />
        <RelatedItems productId={productId} />
        <QnA productId={productId} />
        <RatingsAndReviews />
      </div>
    );
  }
}

export default App;
