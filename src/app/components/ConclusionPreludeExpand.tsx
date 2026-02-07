export function ConclusionPreludeExpand() {
  const crosses = [
    // 中心から外へ広がるパターン
    // 中心
    { x: 500, y: 500, scale: 1.3, delay: 0 },
    
    // 第1リング（近い）
    { x: 500, y: 350, scale: 1.0, delay: 0.2 },
    { x: 650, y: 500, scale: 1.0, delay: 0.25 },
    { x: 500, y: 650, scale: 1.0, delay: 0.3 },
    { x: 350, y: 500, scale: 1.0, delay: 0.35 },
    
    // 第2リング（中間）
    { x: 500, y: 200, scale: 0.9, delay: 0.5 },
    { x: 700, y: 300, scale: 0.85, delay: 0.55 },
    { x: 800, y: 500, scale: 0.9, delay: 0.6 },
    { x: 700, y: 700, scale: 0.85, delay: 0.65 },
    { x: 500, y: 800, scale: 0.9, delay: 0.7 },
    { x: 300, y: 700, scale: 0.85, delay: 0.75 },
    { x: 200, y: 500, scale: 0.9, delay: 0.8 },
    { x: 300, y: 300, scale: 0.85, delay: 0.85 },
    
    // 第3リング（外側）
    { x: 500, y: 80, scale: 0.75, delay: 1.0 },
    { x: 750, y: 150, scale: 0.7, delay: 1.05 },
    { x: 920, y: 300, scale: 0.7, delay: 1.1 },
    { x: 920, y: 500, scale: 0.75, delay: 1.15 },
    { x: 920, y: 700, scale: 0.7, delay: 1.2 },
    { x: 750, y: 850, scale: 0.7, delay: 1.25 },
    { x: 500, y: 920, scale: 0.75, delay: 1.3 },
    { x: 250, y: 850, scale: 0.7, delay: 1.35 },
    { x: 80, y: 700, scale: 0.7, delay: 1.4 },
    { x: 80, y: 500, scale: 0.75, delay: 1.45 },
    { x: 80, y: 300, scale: 0.7, delay: 1.5 },
    { x: 250, y: 150, scale: 0.7, delay: 1.55 },
    
    // 追加の散らばり
    { x: 420, y: 420, scale: 0.6, delay: 1.7 },
    { x: 580, y: 420, scale: 0.6, delay: 1.75 },
    { x: 580, y: 580, scale: 0.6, delay: 1.8 },
    { x: 420, y: 580, scale: 0.6, delay: 1.85 },
    { x: 160, y: 160, scale: 0.55, delay: 1.9 },
    { x: 840, y: 160, scale: 0.55, delay: 1.95 },
    { x: 840, y: 840, scale: 0.55, delay: 2.0 },
    { x: 160, y: 840, scale: 0.55, delay: 2.05 },
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
