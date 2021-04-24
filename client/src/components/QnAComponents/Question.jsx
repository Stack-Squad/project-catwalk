import React from 'react';
import axios from 'axios';
import sampleData from '../../../../helpers/sampleData';
import Answer from './Answer';
import QAModal from './QAModal';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullAnswerList: [],
      answerList: [],
      isExpanded: false,
      markedHelpful: false,
      showModal: false,
    };
    this.onClick = this.onClick.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
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

  handleToggleModal() {
    let { showModal } = this.state;
    showModal = !showModal;
    this.setState({ showModal });
  }

  onClick() {
    let { isExpanded } = this.state;
    isExpanded = !isExpanded;
    this.setState({ isExpanded });
  }

  markHelpful() {
    const { markedHelpful } = this.state;
    const { question } = this.props;
    if (!markedHelpful) {
      axios.put(`/qa/questions/${question.question_id}/helpful`)
        .then((response) => {
          this.setState({ markedHelpful: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const { question } = this.props;
    const {
      answerList, fullAnswerList, isExpanded, markedHelpful, showModal,
    } = this.state;
    const buttonText = isExpanded ? 'Collapse Answers' : 'See More Answers';
    const answersButton = (
      <button onClick={this.onClick}>
        {buttonText}
      </button>
    );

    return (
      <div className="question_wrapper">
        <span className="qa_label" id="q_label">Q:</span>
        <span className="question_body">{question.question_body}</span>
        <span className="question_tags">
          <span>Helpful?</span>
          <button className="tag" onClick={this.markHelpful}>Yes</button>
          <span>
            {markedHelpful ? `(${question.question_helpfulness + 1})` : `(${question.question_helpfulness})`}
          </span>
          <button className="tag" onClick={this.handleToggleModal}>Add Answer</button>
          {showModal && (
            <QAModal onCloseRequest={this.handleToggleModal}>
              Hello Answer Modal!
            </QAModal>
          )}
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
