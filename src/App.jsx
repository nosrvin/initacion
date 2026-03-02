import React, { useState } from 'react';
import TypewriterLetter from './components/TypewriterLetter';
import './App.css';

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [decision, setDecision] = useState(null);

  const letterContent = `Querida Sheyla:

  ¿Le aceptarías una cita más a este tonto que no supo demostrar lo que siente por ti?
  A este tonto que se confundió por pndj, pero que no quiere que esto termine.
  A este tonto que, si usted lo permite, quiere hacer las cosas mejor y dejar de lado los malentendidos.

  ¿Aceptarías darle una oportunidad —o al menos una cita— a este tonto?`;

  const handleTypingComplete = () => {
    setShowButtons(true);
  };

  const handleDecision = (choice) => {
    setDecision(choice);
    console.log(`Usuario eligió: ${choice}`);
  };

  return (
    <div className="letter-page">
      <div className="letter-container">
        {/* Sello o marca de agua opcional */}
        <div className="watermark">
          <img src="/hello_kitty.svg" alt="sello" />
        </div>
        
        {/* La carta con efecto máquina de escribir - TAMAÑO FIJO */}
        <div className="letter-paper fixed-size">
          <TypewriterLetter 
            text={letterContent}
            typingSpeed={70}
            onComplete={handleTypingComplete}
          />
          
          {/* Botones SÍ/NO dentro del papel */}
          {showButtons && !decision && (
            <div className="decision-section fade-in">
              <div className="decision-prompt">
                <span className="prompt-symbol">&gt;</span>
                <button 
                  className="decision-btn btn-si"
                  onClick={() => handleDecision('si')}
                >
                  SÍ
                </button>
                <span className="prompt-separator">/</span>
                <button 
                  className="decision-btn btn-no"
                  onClick={() => handleDecision('no')}
                >
                  NO
                </button>
                <span className="cursor-blink">_</span>
              </div>
            </div>
          )}

          {/* Mensaje después de la decisión */}
          {decision && (
            <div className="response-section fade-in">
              <p className="response-line">
                <span className="prompt-symbol">&gt;</span>
                {decision === 'si' ? ':) okey entonces te espero mañana martes a las 1 pm en la puerta del jardin botanico (si hay complicaciones con el dia o la hora por favor comunicarlo con anticipacion)' : 'segura? :('}
                <span className="cursor-blink">_</span>
              </p>
            </div>
          )}
          
          {/* Línea decorativa de máquina de escribir */}
          <div className="typewriter-line"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
