import React from 'react';
import '../../styles/section-guide.css';

export default function SectionGuide({ 
  type = 'sweep', 
  tag = 'Guide', 
  text, 
  position = 'top-right' 
}) {
  const isSweep = type === 'sweep';

  const imgSrc = isSweep 
    ? '/logos/sweep/vector.jpg' 
    : '/logos/vector-action.jpg';

  const altText = isSweep ? 'SWEEP Mascot' : 'Action Model Mascot';

  return (
    <div className={`section-guide-wrap ${position}`}>
      <div className="guide-speech-bubble">
        <span className="guide-speech-tag">{tag}</span>
        <p className="guide-speech-text">{text}</p>
      </div>

      <div className="guide-char-box">
        <img 
          src={imgSrc} 
          alt={altText} 
          className="guide-char-img"
          onError={(e) => {
            // اگر پسوند فایل png بود پشتیبانی کند
            if (!e.currentTarget.src.endsWith('.png')) {
              e.currentTarget.src = isSweep ? '/sweep/vector.png' : '/logos/vector-action.png';
            }
          }}
        />
      </div>
    </div>
  );
}