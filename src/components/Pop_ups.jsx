// src/components/Popup.js
import React from "react";

export default function Popup({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>{message}</p>
        <button className="br-button primary" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}