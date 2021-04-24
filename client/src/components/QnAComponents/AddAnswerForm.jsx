import React from 'react';

class AddAnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { productName, questionBody } = this.props;

    const title = 'Submit Your Answer';
    const subtitle = `${productName}: ${questionBody}`;

    return (
      <div className="answer-form">
        <div className="form-title" id="a-form-title">{title}</div>
        <div className="form-subtitle" id="a-form-subtitle">{subtitle}</div>
      </div>
    );
  }
}

export default AddAnswerForm;
