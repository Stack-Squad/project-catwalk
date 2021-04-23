import React from 'react';
import Question from './Question';
import sampleData from '../../../../helpers/sampleData';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { questions, fullList, onClick } = this.props;
    questions.sort((a, b) => (b.question_helpfulness - a.question_helpfulness));
    const listItems = questions.map((question) => (
      <div key={question.question_id}>
        <Question question={question} />
      </div>
    ));

    const moreQuestionsButton = (
      <button className="q_button" onClick={onClick}>
        More Answered Questions
      </button>
    );

    return (
      <div className="question_list_wrapper">
        {listItems}
        {fullList.length > questions.length && moreQuestionsButton}
        <button className="qa_button">Add a Question +</button>
      </div>
    );
  }
}

export default Questions;
