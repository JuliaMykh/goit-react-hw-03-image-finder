import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalDiv, Button } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

//   закриття по бекдропу
  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

//   закриття по Esc
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { onClose, currentImageUrl, currentImageDescription } =
      this.props;

    return createPortal(
      <Overlay onClick={this.handleClickBackdrop}>
        <ModalDiv >
          
            <Button type="button" onClick={onClose}>Close</Button>
         
          <img
            src={currentImageUrl}
            alt={currentImageDescription}
            loading="lazy"
          />
        </ModalDiv>
      </Overlay>,
      modalRoot
    );
  }
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string.isRequired,
    currentImageDescription: PropTypes.string.isRequired,
}
