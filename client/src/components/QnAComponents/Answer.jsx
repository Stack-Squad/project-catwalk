import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const answer = this.props.answer;
    let answerer = answer.answerer_name;
    let seller;
    if (answerer === seller) {
      answerer = <strong>Seller</strong>;
    }
    return (<div>
      <div>{answer.body}</div>
      <span>by {answerer}, {answer.date}</span>
    </div>);
  }
}

export default Answer;
