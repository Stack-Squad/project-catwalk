import React from 'react';
import formatDate from '../../../../helpers/dateFormatter.js';

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

    let date = new Date(answer.date);
    date = formatDate(date);

    return (<div>
      <div>{answer.body}</div>
      <span>by {answerer}, {date} | Helpful? Yes{`(${answer.helpfulness})`} | Report</span>
    </div>);
  }
}

export default Answer;
