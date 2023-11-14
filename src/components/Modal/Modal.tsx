// src/components/Modal/Modal.tsx
import React, { FC } from "react";
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">{children}</div>
        <button className="modal-close-btn" onClick={onClose}>
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
