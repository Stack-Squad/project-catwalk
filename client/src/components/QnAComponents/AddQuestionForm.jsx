import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class AddQuestionForm extends React.Component {
  render() {
    const { productName } = this.props;
    return <div>{productName}</div>;
  }
}

export default AddQuestionForm;
