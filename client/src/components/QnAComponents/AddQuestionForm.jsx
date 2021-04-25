import React from 'react';
import axios from 'axios';

class AddQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBody: '',
      nickname: '',
      email: '',
      warning: false,
      success: false,
    };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleNicknameChange = this.handleNicknameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQuestionChange(e) {
    this.setState({ questionBody: e.target.value });
  }

  handleNicknameChange(e) {
    this.setState({ nickname: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { questionBody, nickname, email } = this.state;
    const { productId } = this.props;
    const emailValidation = /.{1,}@[^.]{1,}/;
    if (!questionBody || !nickname || !emailValidation.test(email)) {
      this.setState({warning: true});
      return;
    }
    // this.setState({warning: false, success: true});
    // e.target.reset();
    axios.post('/qa/questions', {
      body: questionBody,
      name: nickname,
      email: email,
      product_id: productId,
    })
    .then((response) => {
      this.setState({
        questionBody: '',
        nickname: '',
        email: '',
        warning: false,
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { questionBody, nickname, email, warning, success } = this.state;
    const { productName } = this.props;

    const title = 'Ask Your Question';
    const subtitle = `About the ${productName}`;

    let warningMessage = 'You must enter the following: ';
    const emailValidation = /.{1,}@[^.]{1,}/;
    if (!questionBody) {
      warningMessage = warningMessage + 'your question, ';
    }
    if (!nickname) {
      warningMessage = warningMessage + 'your nickname, ';
    }
    if (!emailValidation.test(email)) {
      warningMessage = warningMessage + 'your email, ';
    }
    warningMessage = warningMessage.slice(0, warningMessage.length - 2);

    return (
      <div className="question-form-wrapper">
        <div className="form-title" id="q-form-title">{title}</div>
        <div className="form-subtitle" id="q-form-subtitle">{subtitle}</div>
        <form className="question-form" onSubmit={this.handleSubmit}>
          <label htmlFor="question-body">Your Question*: </label>
          <textarea id="question-body" name="fname" value={questionBody} onChange={this.handleQuestionChange} maxLength="100"  />
          <label htmlFor="nickname">What is your nickname*: </label>
          <input type="text" id="nickname" name="nickname" value={nickname} onChange={this.handleNicknameChange} placeholder="Example: jackson11!" maxLength="60"  />
          <span>For privacy reasons, do not use your full name or email address.</span>
          <label htmlFor="email">Your email*: </label>
          <input type="text" id="email" name="email" value={email} onChange={this.handleEmailChange} placeholder="Example: jane@doe.com" maxLength="60"  />
          <span>For authentication reason, you will not be emailed.</span>
          <input type="submit" value="Submit" />
        </form>
        {warning && <span>{warningMessage}</span>}
        {success && <span>Success!</span>}
      </div>
    );
  }
}

export default AddQuestionForm;

// email validation regex:
// .{1,}@[^.]{1,}