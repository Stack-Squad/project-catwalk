import React from 'react';

const Modal = (props) => {
  const { onCloseRequest, children } = props;

  return (
    <div className="modal">
      <div className="review-modal-content">
        <button className="review-close" onClick={onCloseRequest}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
