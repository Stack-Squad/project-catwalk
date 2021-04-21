import React from 'react';
import formatDate from '../../../../helpers/dateFormatter';

const Answer = (props) => {
  const { answer } = props;

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
        <img className="qa_photo" src={photo} alt={index} />
      </div>
    ));
  }
  const answerTag = `by ${answerer}, ${date} | Helpful? Yes(${answer.helpfulness}) | Report`;

  return (
    <div className="answer_wrapper">
      <div className="answer_body">{answer.body}</div>
      <div className="qa_photo_wrapper">
        {photos}
      </div>
      <span className="answer_tags">
        {answerTag}
      </span>
    </div>
  );
};

export default Answer;
