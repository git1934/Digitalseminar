export function EnjoyForEveryoneSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* 背景の幾何学模様 */}
      <div className="absolute inset-0 opacity-12 pointer-events-none">
        {/* 波状の曲線 */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${15 + i * 10} 
                  Q 25 ${5 + i * 10}, 
                  50 ${15 + i * 10} 
                  T 100 ${15 + i * 10}`}
              stroke="#FCCE00"
              strokeWidth="0.3" // ← 少し細く
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* 同心正方形 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[900, 700, 500, 300].map((size) => (
            <div
              key={size}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#FCCE00] rotate-45"
              style={{
                width: size,
                height: size,
                borderWidth: "1px",
              }}
            />
          ))}
        </div>

        {/* クロスハッチ */}
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {[...Array(20)].map((_, i) => (
              <line
                key={`diag1-${i}`}
                x1={`${i * 5}`}
                y1="0"
                x2={`${i * 5 + 50}`}
                y2="100"
                stroke="#FCCE00"
                strokeWidth="0.15" // ← さらに細く
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <line
                key={`diag2-${i}`}
                x1={`${i * 5}`}
                y1="0"
                x2={`${Math.max(0, i * 5 - 50)}`}
                y2="100"
                stroke="#FCCE00"
                strokeWidth="0.15"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[4rem] md:text-[6rem] leading-tight text-center tracking-tight px-8">
        多くの方に
        <br />
        楽しんでいただくために
      </h1>
    </section>
  );
}