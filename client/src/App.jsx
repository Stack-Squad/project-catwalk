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
      // products: sampleData.productList,
      productId: sampleData.productList[0].id,
    };
  }

  // Commented this one out so I don't
  // make network calls for now.
  // Just using sampleData for now.
  // componentDidMount() {
  //   utils.getProducts()
  //   .then(productList => {
  //     this.setState({
  //       products: productList,
  //       productId: productList[0].id
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

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
