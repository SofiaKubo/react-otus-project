import React, { useState } from 'react';
import Modal from '../../ui/Modal/Modal';
import './ModalDemo.css';

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-demo">
      <h2 className="modal-demo__title">Modal Window Demo</h2>

      <div className="modal-demo__input-group">
        <label htmlFor="modal-text" className="modal-demo__label">
          Enter text for the modal window:
        </label>

        <input
          id="modal-text"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your text here..."
          className="modal-demo__input"
        />
      </div>

      <button onClick={handleOpenModal} className="modal-demo__button">
        Open Modal Window
      </button>

      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <p className="modal-demo__modal-content">{inputText || 'You did not enter any text'}</p>
        </Modal>
      )}
    </div>
  );
}
