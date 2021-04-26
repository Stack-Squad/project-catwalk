import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class QAModal extends React.Component {
  render() {
    const { onCloseRequest, children } = this.props;

    return (
      <div className="modal">
        <div className="modal-content">
          <button className="qa-close" onClick={onCloseRequest}>&times;</button>
          {children}
        </div>
      </div>
    );
  }
}

export default QAModal;
