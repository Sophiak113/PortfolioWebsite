import React, { useState, useEffect } from 'react';

const GlitchText = ({ tag, text, textAlign }) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => {
        setGlitching(false);
      }, 300);
    }, 8000); // Glitch every 8 seconds

    return () => {
      clearInterval(glitchInterval);
    };
  }, []);

  const Tag = tag || 'span';

  return (
    <Tag className={`glitch ${glitching ? 'glitching' : ''} ${textAlign}`}>{text}</Tag>
  );
};

export default GlitchText;
