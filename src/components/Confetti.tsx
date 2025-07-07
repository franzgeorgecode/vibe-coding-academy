import React, { useEffect, useState } from 'react';

interface ConfettiProps {
  show: boolean;
  onComplete?: () => void;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  velocityX: number;
  velocityY: number;
  gravity: number;
}

const colors = [
  '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b',
  '#eb4d4b', '#6c5ce7', '#a29bfe', '#fd79a8', '#00b894',
  '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3',
  '#ff9f43', '#10ac84', '#ee5253', '#0abde3', '#3742fa'
];

export default function Confetti({ show, onComplete }: ConfettiProps) {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (show && !isAnimating) {
      startConfetti();
    }
  }, [show, isAnimating]);

  const startConfetti = () => {
    setIsAnimating(true);
    const pieces: ConfettiPiece[] = [];
    
    // Create confetti pieces
    for (let i = 0; i < 150; i++) {
      pieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * 100, // Stagger initial positions
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 6, // Slightly larger pieces
        velocityX: (Math.random() - 0.5) * 12, // More horizontal spread
        velocityY: Math.random() * 4 + 3, // Faster fall
        gravity: Math.random() * 0.4 + 0.15 // More gravity variation
      });
    }
    
    setConfettiPieces(pieces);

    // Animate confetti
    const animationDuration = 4000; // Longer celebration
    const startTime = Date.now();
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      if (elapsed < animationDuration) {
        setConfettiPieces(prevPieces => 
          prevPieces.map(piece => ({
            ...piece,
            x: piece.x + piece.velocityX,
            y: piece.y + piece.velocityY,
            rotation: piece.rotation + 5,
            velocityY: piece.velocityY + piece.gravity
          })).filter(piece => piece.y < window.innerHeight + 50)
        );
        requestAnimationFrame(animate);
      } else {
        // Animation complete
        setConfettiPieces([]);
        setIsAnimating(false);
        onComplete?.();
      }
    };
    
    requestAnimationFrame(animate);
  };

  if (!show && !isAnimating) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map(piece => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px', // Mix of circles and squares
            opacity: 0.9,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)' // Add depth
          }}
        />
      ))}
    </div>
  );
}