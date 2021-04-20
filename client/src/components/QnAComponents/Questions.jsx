import React from 'react';
import Question from './Question.jsx';
import sampleData from '../../../../helpers/sampleData.js';

class Questions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let questions = this.props.questions || sampleData.questionList.results;
    questions.sort((a, b) => {
      return b.question_helpfulness - a.question_helpfulness;
    });
    const questionList = questions.map((question) =>
      <div key={question.question_id}>
        <Question question={question} />
      </div>
    );

    return (<div className='questionscontainer'>
      {questionList[0]}
      {questionList[1]}
      <button className='qa_button'>More Answered Questions</button><button className='qa_button'>Add a Question +</button>
    </div>);
  }
}

export default Questions;
