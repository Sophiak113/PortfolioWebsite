import React, { useState, useEffect } from 'react';

const GlitchText = ({ tag, text }) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => {
        setGlitching(false);
      }, 300);
    }, 8000); // Glitch every 5 seconds

    return () => {
      clearInterval(glitchInterval);
    };
  }, []);

  const Tag = tag || 'span';

  return (
    <Tag className={`glitch ${glitching ? 'glitching' : ''}`}>{text}</Tag>
  );
};

export default GlitchText;
