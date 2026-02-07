export function ConclusionPreludeWide() {
  const crosses = [
    // 中央エリア
    { x: 500, y: 500, scale: 1.2, delay: 0 },
    { x: 500, y: 250, scale: 1.0, delay: 0.15 },
    { x: 500, y: 750, scale: 1.0, delay: 0.3 },
    
    // 左側エリア
    { x: 150, y: 200, scale: 0.8, delay: 0.45 },
    { x: 200, y: 500, scale: 1.1, delay: 0.6 },
    { x: 120, y: 750, scale: 0.7, delay: 0.75 },
    { x: 280, y: 350, scale: 0.6, delay: 0.9 },
    
    // 右側エリア
    { x: 850, y: 180, scale: 0.9, delay: 1.05 },
    { x: 800, y: 500, scale: 1.0, delay: 1.2 },
    { x: 880, y: 780, scale: 0.8, delay: 1.35 },
    { x: 720, y: 350, scale: 0.65, delay: 1.5 },
    
    // 上部エリア
    { x: 350, y: 100, scale: 0.7, delay: 1.65 },
    { x: 650, y: 120, scale: 0.75, delay: 1.8 },
    
    // 下部エリア
    { x: 350, y: 900, scale: 0.85, delay: 1.95 },
    { x: 650, y: 880, scale: 0.8, delay: 2.1 },
    
    // 四隅
    { x: 100, y: 100, scale: 0.6, delay: 2.25 },
    { x: 900, y: 100, scale: 0.6, delay: 2.4 },
    { x: 100, y: 900, scale: 0.6, delay: 2.55 },
    { x: 900, y: 900, scale: 0.6, delay: 2.7 },
    
    // 追加の散らばり
    { x: 420, y: 650, scale: 0.55, delay: 2.85 },
    { x: 580, y: 350, scale: 0.65, delay: 3.0 },
    { x: 300, y: 820, scale: 0.7, delay: 3.15 },
    { x: 700, y: 180, scale: 0.6, delay: 3.3 },
  ];

  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
      >
        {crosses.map((c, i) => (
          <g
            key={i}
            transform={`
              translate(${c.x} ${c.y})
              scale(${c.scale})
              translate(-500 -500)
            `}
          >
            {/* 各 line 要素 */}
            <line x1="500" y1="500" x2="500" y2="200" className="radar-line" style={{ animationDelay: `${c.delay}s` }} />
            <line x1="500" y1="500" x2="800" y2="500" className="radar-line" style={{ animationDelay: `${c.delay + 0.1}s` }} />
            <line x1="500" y1="500" x2="500" y2="800" className="radar-line" style={{ animationDelay: `${c.delay + 0.2}s` }} />
            <line x1="500" y1="500" x2="200" y2="500" className="radar-line" style={{ animationDelay: `${c.delay + 0.3}s` }} />
          </g>
        ))}
      </svg>

      <style>{`
        .radar-line {
          stroke: #FCCE00;
          stroke-width: 2;
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          opacity: 1;
          animation: radarOut 1.3s ease-in-out forwards;
        }
        @keyframes radarOut {
          0% {
            stroke-dashoffset: 400;
            opacity: 1;
          }
          70% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -400;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
