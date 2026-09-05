import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Coin {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
  symbol: string;
  color: string;
  glow: boolean;
}

export const GoldCoinRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create gold coins and sparkling particles
    const coinCount = Math.min(Math.floor(window.innerWidth / 35), 45);
    const coins: Coin[] = [];

    const symbols = ['¥', '¥', '¥', '元', '💰', '✨', '✦'];
    const colors = [
      '#FFD700', // Gold
      '#F59E0B', // Amber
      '#FBBF24', // Light Gold
      '#C9A227', // Rich Fintech Gold
      '#FEF08A', // Pale Gold
    ];

    for (let i = 0; i < coinCount; i++) {
      coins.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 16 + 14, // 14px - 30px
        speed: Math.random() * 1.2 + 0.6, // gentle fall speed
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        opacity: Math.random() * 0.5 + 0.35,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.03 + 0.01,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() > 0.4,
      });
    }

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      coins.forEach((coin) => {
        coin.y += coin.speed;
        coin.wobble += coin.wobbleSpeed;
        coin.rotation += coin.rotationSpeed;
        coin.x += Math.sin(coin.wobble) * 0.8;

        // Reset if bottom or offscreen
        if (coin.y > height + 40) {
          coin.y = -30;
          coin.x = Math.random() * width;
        }
        if (coin.x < -30) coin.x = width + 20;
        if (coin.x > width + 30) coin.x = -20;

        ctx.save();
        ctx.translate(coin.x, coin.y);
        ctx.rotate(coin.rotation);
        ctx.globalAlpha = coin.opacity * (0.85 + 0.15 * Math.sin(time + coin.wobble));

        if (coin.symbol === '✨' || coin.symbol === '✦') {
          // Sparkling star
          ctx.fillStyle = coin.color;
          ctx.shadowColor = '#FFD700';
          ctx.shadowBlur = 10;
          ctx.font = `${coin.size * 0.8}px serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(coin.symbol, 0, 0);
        } else {
          // Luxury 3D Gold Coin with embossed border and ¥ symbol
          const radius = coin.size / 2;

          // Outer Glow
          if (coin.glow) {
            ctx.shadowColor = 'rgba(255, 215, 0, 0.6)';
            ctx.shadowBlur = 12;
          }

          // Gold Coin Outer Rim Gradient
          const grad = ctx.createLinearGradient(-radius, -radius, radius, radius);
          grad.addColorStop(0, '#FFFBEB');
          grad.addColorStop(0.2, '#FDE047');
          grad.addColorStop(0.5, '#D97706');
          grad.addColorStop(0.8, '#F59E0B');
          grad.addColorStop(1, '#78350F');

          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          // Coin Inner Border
          ctx.beginPath();
          ctx.arc(0, 0, radius * 0.82, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Coin Center Fill
          const innerGrad = ctx.createRadialGradient(0, 0, 1, 0, 0, radius * 0.8);
          innerGrad.addColorStop(0, '#FEF08A');
          innerGrad.addColorStop(0.7, '#D97706');
          innerGrad.addColorStop(1, '#92400E');
          ctx.fillStyle = innerGrad;
          ctx.fill();

          // Embossed Yuan ¥ Symbol
          ctx.fillStyle = '#78350F';
          ctx.font = `bold ${radius * 1.1}px "Plus Jakarta Sans", sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(coin.symbol === '💰' ? '¥' : coin.symbol, 0.5, 0.5);

          // Highlight text
          ctx.fillStyle = '#FFFBEB';
          ctx.fillText(coin.symbol === '💰' ? '¥' : coin.symbol, 0, -0.5);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {isEnabled && (
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-85 pointer-events-none"
        />
      )}

      {/* Optional Toggle Button in bottom left corner */}
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        title={isEnabled ? 'Монета жаашын токтотуу' : 'Монета жаашын күйгүзүү'}
        className="pointer-events-auto fixed bottom-4 left-4 z-40 p-2 rounded-xl bg-[#111827]/80 hover:bg-[#111827] text-[#F59E0B] border border-amber-500/30 backdrop-blur-md text-[11px] font-bold flex items-center gap-1.5 shadow-lg transition-all cursor-pointer group opacity-75 hover:opacity-100"
      >
        <Sparkles className={`w-3.5 h-3.5 ${isEnabled ? 'text-[#FFD700] animate-spin' : 'text-slate-400'}`} />
        <span className="hidden sm:inline">
          {isEnabled ? '✨ Монеталар' : '✨ Монеталар өчүрүлдү'}
        </span>
      </button>
    </div>
  );
};
