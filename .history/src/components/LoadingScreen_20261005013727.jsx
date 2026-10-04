import React, { useState, useEffect } from 'react';

const MESSAGES = [
  "Own the Future of AI",
  "Get paid to explore the internet.",
  "Your AI employee that actually works",
  "Turn Your Actions into Real Value",
  "Language Models know what to say. Action Models know what to do."
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsFading(true), 400);
          setTimeout(onComplete, 900);
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
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(144, 0, 255, 0.12) 0%, rgba(10, 1, 18, 0.98) 70%)',
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
      <style>
        {`
          @keyframes actionPulse {
            0%, 100% {
              opacity: 0.35;
              transform: scale(0.96);
              filter: drop-shadow(0 0 8px rgba(144, 0, 255, 0.2));
            }
            50% {
              opacity: 1;
              transform: scale(1.02);
              filter: drop-shadow(0 0 24px rgba(144, 0, 255, 0.75));
            }
          }
          .action-logo-pulse {
            animation: actionPulse 2.8s infinite ease-in-out;
          }
        `}
      </style>

      <div style={{ maxWidth: '440px', width: '100%', textAlign: 'center' }}>
        
        <div style={{ marginBottom: '28px' }} className="action-logo-pulse">

          <img src="/logos/action-logo.jpg"/>
        </div>

        <div
          style={{
            display: 'inline-block',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#9000FF',
            fontWeight: 700,
            marginBottom: '10px'
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
            marginBottom: '20px',
            transition: 'all 0.3s ease'
          }}
        >
          {MESSAGES[msgIndex]}
        </p>

        <div
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '999px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#9000FF',
              boxShadow: '0 0 14px #9000FF, 0 0 24px rgba(210, 153, 255, 0.5)',
              borderRadius: '999px',
              transition: 'width 0.08s linear'
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '12px'
          }}
        >
          <span style={{ fontSize: '11px', color: '#664D75', letterSpacing: '1px' }}>
            STATUS: ACTIVE
          </span>
          <span
            style={{
              color: '#D299FF',
              fontSize: '13px',
              fontWeight: 700,
              fontFamily: 'monospace'
            }}
          >
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}