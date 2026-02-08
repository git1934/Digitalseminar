import React from 'react';

export function StrategyIntroSlide() {
  const numRays = 24;
  const numCircles = 8;

  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景の幾何学模様（レーダー風・トーン調整済み） */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* 中心点（弱め） */}
          <circle cx="50" cy="50" r="0.5" fill="#FCCE00" opacity="0.6" />

          {/* 同心円 */}
          {[...Array(numCircles)].map((_, i) => {
            const radius = (i + 1) * (60 / numCircles);
            return (
              <circle
                key={`circle-${i}`}
                cx="50"
                cy="50"
                r={radius}
                stroke="#FCCE00"
                strokeWidth="0.18"
                fill="none"
                opacity="0.5"
                strokeDasharray={i % 2 === 0 ? "none" : "1 3"}
              />
            );
          })}

          {/* 放射線 */}
          {[...Array(numRays)].map((_, i) => {
            const angle = (i * 360) / numRays;
            const radian = (angle * Math.PI) / 180;
            const endRadius = 70;
            const x2 = 50 + endRadius * Math.cos(radian);
            const y2 = 50 + endRadius * Math.sin(radian);

            const isAxis = i % (numRays / 4) === 0;

            return (
              <line
                key={`ray-${i}`}
                x1="50"
                y1="50"
                x2={x2}
                y2={y2}
                stroke="#FCCE00"
                strokeWidth="0.18"
                opacity={isAxis ? 0.35 : 0.2}
              />
            );
          })}
        </svg>
      </div>

      {/* メインテキスト */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-white font-black text-[6rem] md:text-[10rem] tracking-tight leading-none">
          戦略とは？
        </h1>
      </div>
    </section>
  );
}
