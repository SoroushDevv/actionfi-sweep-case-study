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
          setIsFading(true);
          setTimeout(onComplete, 5000);
          return 100;
        }
        const next = prev + 1;
        if (next === 25) setMsgIndex(1);
        if (next === 50) setMsgIndex(2);
        if (next === 75) setMsgIndex(3);
        if (next === 95) setMsgIndex(4);
        return next;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#0D0214',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: isFading ? 'none' : 'all',
        padding: '20px'
      }}
    >
      <div style={{ maxWidth: '420px', width: '100%', textAlign: 'center' }}>
        <p
          style={{
            color: '#D299FF',
            fontSize: '14px',
            letterSpacing: '0.5px',
            marginBottom: '16px',
            minHeight: '24px',
            fontWeight: 600
          }}
        >
          {MESSAGES[msgIndex]}
        </p>

        <div
          style={{
            width: '100%',
            height: '6px',
            backgroundColor: 'rgba(144, 0, 255, 0.15)',
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
              boxShadow: '0 0 16px #9000FF',
              borderRadius: '999px',
              transition: 'width 0.1s linear'
            }}
          />
        </div>

        <p
          style={{
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: 700,
            marginTop: '12px',
            opacity: 0.8
          }}
        >
          {progress}%
        </p>
      </div>
    </div>
  );
}