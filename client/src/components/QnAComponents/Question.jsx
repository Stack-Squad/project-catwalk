import React from 'react';

import Answer from './Answer.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const question = this.props.question;

    let answers = [];
    for (let id in question.answers) {
      answers.push(question.answers[id]);
    }
    answers.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });

    let button;
    if (answers.length > 2) {
      button = <button>See More Answers</button>;
    }

    const AnswerList = answers.map((answer) =>
    <div key={answer.id}>
      <Answer answer={answer} />
    </div>
    );

    return (<div className='question_wrapper'>
      <span className='qa_label' id='q_label'>Q:</span><span className='question_body'>{question.question_body}</span>
      <span className='question_tags'>Helpful? Yes{`(${question.question_helpfulness})`} | Add Answer</span>
      <span className='qa_label' id='a_label'>A:</span>
      <div className='answer_list'>
        {AnswerList[0]}
        {AnswerList[1]}
        {button}
      </div>
    </div>);
  }
}

export default Question;
