import React from 'react';
import Question from './Question';
import QAModal from './QAModal';
import AddQuestionForm from './AddQuestionForm';
import sampleData from '../../../../helpers/sampleData';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal() {
    let { showModal } = this.state;
    showModal = !showModal;
    this.setState({ showModal });
  }

  render() {
    const {
      questions,
      fullList,
      productName,
      onClick,
      productId,
    } = this.props;
    const { showModal } = this.state;
    questions.sort((a, b) => (b.question_helpfulness - a.question_helpfulness));
    const listItems = questions.map((question) => (
      <div key={question.question_id}>
        <Question question={question} productName={productName} productId={productId} />
      </div>
    ));

    const moreQuestionsButton = (
      <button className="qa_button" onClick={onClick}>
        More Answered Questions
      </button>
    );

    return (
      <div className="question_list_wrapper">
        {listItems}
        {fullList.length > questions.length && moreQuestionsButton}
        <button className="qa_button" onClick={this.handleToggleModal}>Add a Question +</button>
        {showModal && (
          <QAModal onCloseRequest={this.handleToggleModal}>
            <AddQuestionForm productName={productName} productId={productId} />
          </QAModal>
        )}
      </div>
    );
  }
}

export default Questions;
