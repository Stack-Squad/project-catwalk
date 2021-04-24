import React from 'react';

class AddQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { productName } = this.props;

    const title = 'Ask Your Question';
    const subtitle = `About the ${productName}`;

    return (
      <div className="question-form">
        <div className="form-title" id="q-form-title">{title}</div>
        <div className="form-subtitle" id="q-form-subtitle">{subtitle}</div>
      </div>
    );
  }
}

export default AddQuestionForm;
