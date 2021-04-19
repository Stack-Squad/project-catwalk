import React from 'react';
import sampleData from '../../../helpers/sampleData.js';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const questionList = sampleData.questionList.results.map((question) =>
      <li key={question.question_id}>
        {question.question_body}
      </li>
    );
    return (<div>
      <div>{'QUESTIONS & ANSWERS'}</div>
      <input type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
      <ul>{questionList}</ul>
    </div>);
  }
}

export default QuestionsAnswers;


// {
//   "question_id": 104619,
//   "question_body": "Where does this product ship from?",
//   "question_date": "2017-11-04T00:00:00.000Z",
//   "asker_name": "toofast",
//   "question_helpfulness": 18,
//   "reported": false,
//   "answers": {
//       "992154": {
//           "id": 992154,
//           "body": "Mine was delivered from Oklahoma",
//           "date": "2017-11-04T00:00:00.000Z",
//           "answerer_name": "toofast",
//           "helpfulness": 14,
//           "photos": []
//       },
//       "992165": {
//           "id": 992165,
//           "body": "It ships from the facility in Tulsa",
//           "date": "2017-11-04T00:00:00.000Z",
//           "answerer_name": "toofast",
//           "helpfulness": 20,
//           "photos": []
//       }
//   }
// }