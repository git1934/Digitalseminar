export function ConclusionPreludeWide2() {
  const scans = [
    { offset: -180, scale: 0.8, delay: 0 },
    { offset: -120, scale: 1.0, delay: 0.15 },
    { offset: -60,  scale: 0.9, delay: 0.3 },
    { offset: 0,    scale: 1.2, delay: 0.45 },
    { offset: 60,   scale: 1.0, delay: 0.6 },
    { offset: 120,  scale: 0.85, delay: 0.75 },
    { offset: 180,  scale: 1.1, delay: 0.9 },
  ];

  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
      >
        {scans.map((s, i) => (
          <g
            key={i}
            transform={`
              translate(0 ${500 + s.offset})
              scale(${s.scale} 1)
            `}
          >
            {/* 左 → 右 */}
            <line
              x1="0"
              y1="0"
              x2="1000"
              y2="0"
              className="scan-line"
              style={{ animationDelay: `${s.delay}s` }}
            />

            {/* 右 → 左 */}
            <line
              x1="1000"
              y1="0"
              x2="0"
              y2="0"
              className="scan-line reverse"
              style={{ animationDelay: `${s.delay + 0.25}s` }}
            />
          </g>
        ))}
      </svg>

      <style>{`
        .scan-line {
          stroke: #FCCE00;
          stroke-width: 2;
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          opacity: 0;
          animation:
            lineFadeIn 0.5s ease-out forwards,
            scanIn 1.4s ease-out forwards;
        }

        .scan-line.reverse {
          animation-name:
            lineFadeIn,
            scanInReverse;
        }

        /* 線だけフェードイン */
        @keyframes lineFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.9;
          }
        }

        @keyframes scanIn {
          0% {
            stroke-dashoffset: 600;
          }
          100% {
            stroke-dashoffset: -600;
            opacity: 0;
          }
        }

        @keyframes scanInReverse {
          0% {
            stroke-dashoffset: -600;
          }
          100% {
            stroke-dashoffset: 600;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
