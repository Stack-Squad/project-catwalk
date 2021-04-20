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

    let photos = null;
    if (answer.photos.length) {
      photos = answer.photos.map(photo =>
        <img className='qa_photo' src={photo}/>
      );
    }

    return (<div className='answer_wrapper'>
      <div className='answer_body'>{answer.body}</div>
      <div className='qa_photo_wrapper'>
        {photos}
      </div>
      <span className='answer_tags'>by {answerer}, {date} | Helpful? Yes{`(${answer.helpfulness})`} | Report</span>
    </div>);
  }
}

export default Answer;
