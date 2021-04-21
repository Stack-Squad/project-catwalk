import React from 'react';
import Question from './Question';
import sampleData from '../../../../helpers/sampleData';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullQuestionList: [],
      questionList: [],
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    let { questions } = this.props;
    if (!questions) { questions = sampleData.questionList.results; }
    questions.sort((a, b) => (b.question_helpfulness - a.question_helpfulness));
    const fullQuestionList = questions.map((question) => (
      <div key={question.question_id}>
        <Question question={question} />
      </div>
    ));
    const questionList = fullQuestionList.slice(0, 4);
    this.setState({ fullQuestionList, questionList });
  }

  onClick() {
    const { questionList, fullQuestionList } = this.state;
    this.setState({
      questionList: fullQuestionList.slice(0, questionList.length + 2),
    });
  }

  render() {
    const { questionList, fullQuestionList } = this.state;
    const moreQuestionsButton = (
      <button className="q_button" onClick={this.onClick}>
        More Answered Questions
      </button>
    );

    return (
      <div className="question_list_wrapper">
        {questionList}
        {fullQuestionList.length > questionList.length && moreQuestionsButton}
        <button className="qa_button">Add a Question +</button>
      </div>
    );
  }
}

export default Questions;
