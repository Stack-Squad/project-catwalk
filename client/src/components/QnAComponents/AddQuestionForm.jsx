import React from 'react';

class AddQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBody: '',
      nickname: '',
      email: '',
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

  }

  render() {
    const { questionBody, nickname, email } = this.state;
    const { productName } = this.props;

    const title = 'Ask Your Question';
    const subtitle = `About the ${productName}`;

    return (
      <div className="question-form-wrapper">
        <div className="form-title" id="q-form-title">{title}</div>
        <div className="form-subtitle" id="q-form-subtitle">{subtitle}</div>
        <form className="question-form" onSubmit={this.handleSubmit}>
          <label htmlFor="question-body">Your Question*: </label>
          <textarea id="question-body" name="fname" value={questionBody} onChange={this.handleQuestionChange} maxLength="100" required />
          <label htmlFor="nickname">What is your nickname*: </label>
          <input type="text" id="nickname" name="nickname" value={nickname} onChange={this.handleNicknameChange} required />
          <label htmlFor="email">Your email*: </label>
          <input type="text" id="email" name="email" value={email} onChange={this.handleEmailChange} required />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddQuestionForm;
