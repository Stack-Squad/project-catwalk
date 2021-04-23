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
      questionList: sampleData.questionList,
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
      .then((productId) => {
        axios.get(`qa/questions/${productId}`)
          .then((response) => response.data)
          .then((questionList) => {
            console.log(questionList);
            this.setState({ questionList });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { productId, questionList } = this.state;
    return (
      <div>
        <Banner />
        <Overview productId={productId} />
        <RelatedItems productId={productId} />
<<<<<<< HEAD
        <QnA productId={productId} />
        <RatingsAndReviews productId={productId} />
=======
        <QnA questionList={questionList} />
        <RatingsAndReviews />
>>>>>>> 2a96a09170088924dab4293fa77a02a4b4679d34
      </div>
    );
  }
}

export default App;
