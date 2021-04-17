import React from 'react';
import axios from 'axios';
import sampleData from '../../helpers/sampleData.js';

import Banner from './components/Banner.jsx';
import Overview from './components/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QuestionsAnswers from './components/QuestionsAnswers.jsx';
import RelatedItems from './components/RelatedItems.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: sampleData.productList,
      productId: sampleData.productList[0].id
    }
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
    let id = this.state.productId;
    return (
      <div>
        <Banner />
        <Overview productId={id} />
        <RatingsAndReviews />
        <QuestionsAnswers productId={id} />
        <RelatedItems productId={id} />
      </div>
    );
  }
}


export default App;