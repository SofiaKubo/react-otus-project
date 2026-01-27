import React, { useState } from 'react';
import Modal from '../../ui/Modal/Modal';
import './ModalDemo.css';

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');

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
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text here..."
          className="modal-demo__input"
        />
      </div>

      <button onClick={() => setIsOpen(true)} className="modal-demo__button">
        Open Modal Window
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <p className="modal-demo__modal-content">{inputText || 'You did not enter any text'}</p>
        </Modal>
      )}
    </div>
  );
}
