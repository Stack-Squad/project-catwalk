import React from 'react';
import Overview from './components/Overview.jsx';
import Ratings from './components/Ratings.jsx';
import QuestionsAnswers from './components/QuestionsAnswers.jsx';
import RelatedItems from './components/RelatedItems.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Overview/>
        <Ratings/>
        <QuestionsAnswers/>
        <RelatedItems/>
      </div>
    )

  }
}


export default App;