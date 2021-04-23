import React from 'react';
import axios from 'axios';
import formatDate from '../../../../helpers/dateFormatter';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markedHelpful: false,
      reported: false,
    };
    this.markHelpful = this.markHelpful.bind(this);
    this.report = this.report.bind(this);
  }

  markHelpful() {
    const { markedHelpful } = this.state;
    const { answer } = this.props;
    if (!markedHelpful) {
      axios.put(`/qa/answers/${answer.id}/helpful`)
        .then((response) => {
          this.setState({ markedHelpful: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  report() {
    const { reported } = this.state;
    const { answer } = this.props;
    if (!reported) {
      axios.put(`/qa/answers/${answer.id}/report`)
        .then((response) => {
          this.setState({ reported: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const { answer } = this.props;
    const { markedHelpful, reported } = this.state;

    let answerer = answer.answerer_name;
    let seller;
    if (answerer === seller) {
      answerer = <strong>Seller</strong>;
    }

    let date = new Date(answer.date);
    date = formatDate(date);

    let photos = null;
    if (answer.photos.length) {
      let index = 0;
      photos = answer.photos.map((photo) => (
        <div key={index++}>
          <img className="qa_photo" src={photo} alt="" />
        </div>
      ));
    }
    const answerTag = `by ${answerer}, ${date} | Helpful?`;

    return (
      <div className="answer_wrapper">
        <div className="answer_body">{answer.body}</div>
        <div className="qa_photo_wrapper">
          {photos}
        </div>
        <span className="answer_tags">
          <span>{answerTag}</span>
          <button className="tag" onClick={this.markHelpful}>Yes</button>
          <span>
            {markedHelpful ? `(${answer.helpfulness + 1})` : `(${answer.helpfulness})`}
          </span>
          {reported ? <span className="report">Reported</span> : <button className="tag" onClick={this.report}>Report</button>}
        </span>
      </div>
    );
  }
}

export default Answer;
