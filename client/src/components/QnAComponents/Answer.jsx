import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      {this.props.answer.body}
    </div>);
  }
}

export default Answer;
