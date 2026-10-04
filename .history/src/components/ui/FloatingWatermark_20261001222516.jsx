import React from 'react';
import '../../styles/watermark.css';

export default function FloatingWatermark({ brand = 'sweep', position = 'top-right' }) {
  const isSweep = brand === 'sweep';

  const logoSrc = isSweep 
    ? '/logos/sweep/sweep.jpg' 
    : '/logos/logo-mark.png';

  const labelText = isSweep ? 'Sweep Case' : 'ActionFi Model';

  return (
    <div className={`floating-watermark ${brand} ${position}`}>
      <div className="watermark-img-wrap">
        <img src={logoSrc} alt={`${brand} identity badge`} />
      </div>
      <span className={`watermark-label ${brand}`}>{labelText}</span>
    </div>
  );
}