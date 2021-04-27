import React from 'react';

class AddAnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerBody: '',
      nickname: '',
      email: '',
      warning: false,
      success: false,
    };
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleNicknameChange = this.handleNicknameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAnswerChange(e) {
    this.setState({ answerBody: e.target.value });
  }

  handleNicknameChange(e) {
    this.setState({ nickname: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  render() {
    const {
      answerBody, nickname, email, warning, success,
    } = this.state;
    const { productName, questionBody } = this.props;

    const title = 'Submit Your Answer';
    const subtitle = `${productName}: ${questionBody}`;

    let warningMessage = 'You must enter the following: ';
    const emailValidation = /.{1,}@[^.]{1,}/;
    if (!questionBody) {
      warningMessage += 'your question, ';
    }
    if (!nickname) {
      warningMessage += 'your nickname, ';
    }
    if (!emailValidation.test(email)) {
      warningMessage += 'your email, ';
    }
    warningMessage = warningMessage.slice(0, warningMessage.length - 2);

    return (
      <div className="form-wrapper">
        <div className="form-title" id="a-form-title">{title}</div>
        <div className="form-subtitle" id="a-form-subtitle">{subtitle}</div>
        <form className="a-form" onSubmit={this.handleSubmit}>
          <label htmlFor="form-body" id="form-body-label">Your Question*: </label>
          <textarea id="form-body" name="body" value={answerBody} onChange={this.handleAnswerChange} maxLength="1000" />
          <label htmlFor="nickname" id="nickname-label">What is your nickname*: </label>
          <input type="text" id="nickname" name="nickname" value={nickname} onChange={this.handleNicknameChange} placeholder="Example: jackson11!" maxLength="60" />
          <span id="nickname-disclaimer">For privacy reasons, do not use your full name or email address.</span>
          <label htmlFor="email" id="email-label">Your email*: </label>
          <input type="text" id="email" name="email" value={email} onChange={this.handleEmailChange} placeholder="Example: jane@doe.com" maxLength="60" />
          <span id="email-disclaimer">For authentication reason, you will not be emailed.</span>
          <div id="img-input-placeholder">picture fields here</div>
          <div id="img-preview-placeholder">picture preview here</div>
          <input type="submit" value="Submit" id="a-form-submit" />
        </form>
        <div className="a-form-message">
          {warning && <span>{warningMessage}</span>}
          {success && <span>Success!</span>}
        </div>
      </div>
    );
  }
}

export default AddAnswerForm;
