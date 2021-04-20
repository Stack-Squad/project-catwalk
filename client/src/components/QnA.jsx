import React from 'react';
import sampleData from '../../../helpers/sampleData.js';

import Questions from './QnAComponents/Questions.jsx';

class QnA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const questionList = sampleData.questionList.results.map((question) =>
      <div key={question.question_id}>
        {question.question_body}
      </div>
    );

    return (<div>
      <div>{'QUESTIONS & ANSWERS'}</div>
      <input type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
      <Questions questions={sampleData.questionList.results} />
    </div>);
  }
}

export default QnA;
