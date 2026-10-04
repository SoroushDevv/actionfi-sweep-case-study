import React, { useEffect, useRef, useState } from 'react';
import '../../styles/cursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  const badgeRef = useRef(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const trailPos = useRef({ x: -200, y: -200 });
  const badgePos = useRef({ x: -200, y: -200 });

  const [activeBrand, setActiveBrand] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      const hoveredSection = e.target.closest('[data-brand]');
      if (hoveredSection) {
        const brand = hoveredSection.getAttribute('data-brand');
        setActiveBrand(brand);
      } else {
        setActiveBrand(null);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId;
    const render = () => {
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.16;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.16;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      badgePos.current.x += (mousePos.current.x - badgePos.current.x) * 0.22;
      badgePos.current.y += (mousePos.current.y - badgePos.current.y) * 0.22;
      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${badgePos.current.x + 14}px, ${badgePos.current.y + 14}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const brandConfig = {
    sweep: {
      label: 'SWEEP',
      logo: '/logos/sweep/logo-mark.png'
    },
    actionfi: {
      label: 'ActionFi',
      logo: '/logos/sweep/logo-horizontal.png'
    }
  };

  const currentBadge = activeBrand ? brandConfig[activeBrand] : null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`custom-cursor-dot ${activeBrand ? 'has-badge' : ''}`} 
      />
      <div 
        ref={trailRef} 
        className={`custom-cursor-trail ${activeBrand ? 'has-badge' : ''}`} 
      />

      <div
        ref={badgeRef}
        className={`cursor-brand-badge ${activeBrand || ''} ${activeBrand ? 'visible' : ''}`}
      >
        {currentBadge && (
          <>
            <img src={currentBadge.logo} alt={currentBadge.label} />
            <span>{currentBadge.label}</span>
          </>
        )}
      </div>
    </>
  );
}