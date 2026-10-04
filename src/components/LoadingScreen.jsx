import React, { useState, useEffect } from 'react';

const MESSAGES = [
  "Real users.",
  "Verified actions.",
  "Your platform.",
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsFading(true), 400);
          setTimeout(onComplete, 950);
          return 100;
        }

        const next = prev + 1;
        if (next === 20) setMsgIndex(1);
        if (next === 45) setMsgIndex(2);
        if (next === 70) setMsgIndex(3);
        if (next === 90) setMsgIndex(4);
        return next;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#0A0112',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(144, 0, 255, 0.15) 0%, rgba(10, 1, 18, 0.98) 70%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isFading ? 'none' : 'all',
        padding: '24px',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
      }}
    >
      <div style={{ maxWidth: '440px', width: '100%', textAlign: 'center' }}>
        
        <div
          style={{
            position: 'relative',
            width: '108px',
            height: '108px',
            margin: '0 auto 32px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg
            width="108"
            height="108"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'rotate(-90deg)',
              pointerEvents: 'none'
            }}
          >
            <circle
              cx="54"
              cy="54"
              r={radius}
              stroke="rgba(144, 0, 255, 0.15)"
              strokeWidth="3.5"
              fill="transparent"
            />
            <circle
              cx="54"
              cy="54"
              r={radius}
              stroke="#A855F7"
              strokeWidth="3.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 0.08s linear',
                filter: 'drop-shadow(0 0 8px #9000FF)'
              }}
            />
          </svg>

          <div
            style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              overflow: 'hidden',
              padding: '3px',
              background: 'linear-gradient(135deg, rgba(144, 0, 255, 0.4) 0%, rgba(26, 5, 42, 0.9) 100%)',
              border: '1px solid rgba(210, 153, 255, 0.25)',
              boxShadow: '0 0 25px rgba(144, 0, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src="/logos/logo-mark.jpg"
              alt="ActionFi Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                display: 'block'
              }}
            />
          </div>
        </div>

        <div
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#9000FF',
            fontWeight: 700,
            marginBottom: '12px'
          }}
        >
          ActionFi Pipeline Verification
        </div>

        <p
          key={msgIndex}
          style={{
            color: '#F3E8FF',
            fontSize: '14.5px',
            fontWeight: 500,
            minHeight: '26px',
            lineHeight: 1.5,
            margin: 0,
            transition: 'all 0.3s ease'
          }}
        >
          {MESSAGES[msgIndex]}
        </p>

      </div>
    </div>
  );
}