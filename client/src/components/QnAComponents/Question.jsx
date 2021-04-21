import React from 'react';
import sampleData from '../../../../helpers/sampleData';
import Answer from './Answer';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullAnswerList: [],
      answerList: [],
      isExpanded: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { question } = this.props;
    const answers = [];
    for (const id in question.answers) {
      answers.push(question.answers[id]);
    }
    answers.sort((a, b) => b.helpfulness - a.helpfulness);
    const fullAnswerList = answers.map((answer) => (
      <div key={answer.id}>
        <Answer answer={answer} />
      </div>
    ));
    const answerList = fullAnswerList.slice(0, 2);
    this.setState({ fullAnswerList, answerList });
  }

  onClick() {
    let { isExpanded } = this.state;
    isExpanded = !isExpanded;
    this.setState({ isExpanded });
  }

  render() {
    const { question } = this.props;
    const { answerList, fullAnswerList, isExpanded } = this.state;
    const buttonText = isExpanded ? 'Collapse Answers' : 'See More Answers';
    const answersButton = (
      <button onClick={this.onClick}>
        {buttonText}
      </button>
    );

    const questionTag = `Helpful? Yes(${question.question_helpfulness}) | Add Answer`;

    return (
      <div className="question_wrapper">
        <span className="qa_label" id="q_label">Q:</span>
        <span className="question_body">{question.question_body}</span>
        <span className="question_tags">
          {questionTag}
        </span>
        <span className="qa_label" id="a_label">A:</span>
        <div className="answer_list_wrapper">
          <div className="answer_list">
            {isExpanded ? fullAnswerList : answerList}
          </div>
          {fullAnswerList.length > answerList.length && answersButton}
        </div>
      </div>
    );
  }
}

export default Question;
