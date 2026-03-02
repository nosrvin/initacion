import React from 'react';

const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <button className="btn-letter btn-primary">
        <span className="btn-text">Responder carta</span>
        <span className="btn-underline"></span>
      </button>
      <button className="btn-letter btn-secondary">
        <span className="btn-text">Guardar borrador</span>
        <span className="btn-underline"></span>
      </button>
      <button className="btn-letter btn-outline">
        <span className="btn-text">Escribir nueva</span>
        <span className="btn-underline"></span>
      </button>
    </div>
  );
};

export default ActionButtons;