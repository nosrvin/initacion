import React, { useState, useEffect } from 'react';

const TypewriterLetter = ({ text, typingSpeed = 70, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, typingSpeed, onComplete, isComplete]);

  // Dividir el texto en líneas para mantener el formato
  const lines = displayText.split('\n');

  return (
    <div className="typewriter-letter">
      {lines.map((line, index) => (
        <p key={index} className={`letter-line ${index === 0 ? 'first-line' : ''}`}>
          {line}
          {index === lines.length - 1 && currentIndex < text.length && (
            <span className="typewriter-cursor">_</span>
          )}
        </p>
      ))}
      
      {/* Sonido opcional de máquina de escribir (comentado) */}
      {/* {currentIndex < text.length && (
        <audio autoPlay src="/typewriter-sound.mp3" volume={0.1} />
      )} */}
    </div>
  );
};

export default TypewriterLetter;