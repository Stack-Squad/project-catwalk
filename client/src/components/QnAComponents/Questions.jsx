import React from 'react';
import Question from './Question.jsx';
import sampleData from '../../../../helpers/sampleData.js';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullQuestionList: [],
      questionList: []
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({questionList: this.state.fullQuestionList.slice(0, this.state.questionList.length + 2)});
  }

  componentDidMount() {
    let questions = this.props.questions || sampleData.questionList.results;
    questions.sort((a, b) => {
      return b.question_helpfulness - a.question_helpfulness;
    });
    const fullQuestionList = questions.map((question) =>
      <div key={question.question_id}>
        <Question question={question} />
      </div>
    );
    let questionList = fullQuestionList.slice(0, 4);
    this.setState({
      fullQuestionList: fullQuestionList,
      questionList: questionList
    });
  }

  render() {
    const moreQuestionsButton = <button className='qa_button' onClick={this.onClick}>
      More Answered Questions
    </button>;
    return (<div className='question_list_wrapper'>
      {this.state.questionList}
      {this.state.fullQuestionList.length > this.state.questionList.length && moreQuestionsButton}
      <button className='qa_button'>Add a Question +</button>
    </div>);
  }
}

export default Questions;
