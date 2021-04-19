import React from 'react';
import Question from './Question.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let questions = this.props.questions;
    questions.sort((a, b) => {
      return b.question_helpfulness - a.question_helpfulness;
    });
    const questionList = questions.map((question) =>
      <div key={question.question_id}>
        <Question question={question} />
      </div>
    );

    return (<div>
      {questionList[0]}
      {questionList[1]}
      <button>More Answered Questions</button><button>Add a Question +</button>
    </div>);
  }
}

export default Questions;
