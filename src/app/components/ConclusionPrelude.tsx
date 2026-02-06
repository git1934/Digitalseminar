export function ConclusionPrelude() {
  const crosses = [
    { x: 500, y: 500, scale: 1.0, delay: 0 },
    { x: 300, y: 300, scale: 0.6, delay: 0.2 },
    { x: 700, y: 280, scale: 0.8, delay: 0.4 },
    { x: 250, y: 650, scale: 0.7, delay: 0.6 },
    { x: 750, y: 700, scale: 1.2, delay: 0.8 },
    { x: 600, y: 450, scale: 0.5, delay: 1.0 },
    { x: 420, y: 720, scale: 0.9, delay: 1.2 },
  ];

  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
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
            {/* 上 */}
            <line
              x1="500"
              y1="500"
              x2="500"
              y2="200"
              className="radar-line"
              style={{ animationDelay: `${c.delay}s` }}
            />

            {/* 右 */}
            <line
              x1="500"
              y1="500"
              x2="800"
              y2="500"
              className="radar-line"
              style={{ animationDelay: `${c.delay + 0.1}s` }}
            />

            {/* 下 */}
            <line
              x1="500"
              y1="500"
              x2="500"
              y2="800"
              className="radar-line"
              style={{ animationDelay: `${c.delay + 0.2}s` }}
            />

            {/* 左 */}
            <line
              x1="500"
              y1="500"
              x2="200"
              y2="500"
              className="radar-line"
              style={{ animationDelay: `${c.delay + 0.3}s` }}
            />
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
          filter: drop-shadow(0 0 6px #FCCE00);
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
