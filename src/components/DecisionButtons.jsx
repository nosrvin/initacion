import React, { useState } from 'react';

const DecisionButtons = ({ onDecision }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="decision-buttons">
      <p className="decision-question">¿Cuál es tu respuesta?</p>
      <div className="buttons-wrapper">
        <button 
          className={`decision-btn btn-si ${hoveredButton === 'si' ? 'hover' : ''}`}
          onClick={() => onDecision('si')}
          onMouseEnter={() => setHoveredButton('si')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <span className="btn-decoration left">[</span>
          <span className="btn-text">SÍ</span>
          <span className="btn-decoration right">]</span>
          <span className="btn-underline"></span>
        </button>
        
        <button 
          className={`decision-btn btn-no ${hoveredButton === 'no' ? 'hover' : ''}`}
          onClick={() => onDecision('no')}
          onMouseEnter={() => setHoveredButton('no')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <span className="btn-decoration left">[</span>
          <span className="btn-text">NO</span>
          <span className="btn-decoration right">]</span>
          <span className="btn-underline"></span>
        </button>
      </div>
      
      {/* Línea de firma decorativa */}
      <div className="decision-footer">
        <span className="signature-line"></span>
        <span className="signature-text">Tu respuesta será sellada</span>
        <span className="signature-line"></span>
      </div>
    </div>
  );
};

export default DecisionButtons;