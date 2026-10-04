import React, { useEffect, useRef, useState } from 'react';
import '../../styles/cursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const badgeRef = useRef(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const badgePos = useRef({ x: -200, y: -200 });

  const [activeBrand, setActiveBrand] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // بررسی حضور موس در سکشن دارای برند
      const hoveredSection = e.target.closest('[data-brand]');
      if (hoveredSection) {
        setActiveBrand(hoveredSection.getAttribute('data-brand'));
      } else {
        setActiveBrand(null);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId;
    const render = () => {
      // تعقیب روان بج چسبیده به موس
      badgePos.current.x += (mousePos.current.x - badgePos.current.x) * 0.22;
      badgePos.current.y += (mousePos.current.y - badgePos.current.y) * 0.22;

      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${badgePos.current.x + 16}px, ${badgePos.current.y + 16}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const brandConfig = {
    sweep: {
      label: 'SWEEP',
      logo: '/logos/sweep/sweep-logo.jpg'
    },
    actionfi: {
      label: 'ActionFi',
      logo: '/logos/sweep/logo-mark.png'
    }
  };

  const currentBadge = activeBrand ? brandConfig[activeBrand] : null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`custom-cursor-dot ${isHovered ? 'hovered' : ''}`} 
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