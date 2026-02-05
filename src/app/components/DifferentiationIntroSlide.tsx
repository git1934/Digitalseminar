export function DifferentiationIntroSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景の幾何学模様 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* 波状の曲線 */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${30 + i * 20} Q 25 ${15 + i * 20}, 50 ${30 + i * 20} T 100 ${30 + i * 20}`}
              stroke="#FCCE00"
              strokeWidth="0.6"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* 同心正方形（45度回転） */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-[900px] h-[900px] border border-[#FCCE00] rotate-45" />
          <div className="absolute w-[650px] h-[650px] border border-[#FCCE00] rotate-45" />
          <div className="absolute w-[400px] h-[400px] border border-[#FCCE00] rotate-45" />
        </div>

        {/* クロスハッチパターン */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(18)].map((_, i) => (
            <line
              key={`diag1-${i}`}
              x1={`${i * 6}%`}
              y1="0"
              x2={`${i * 6 + 40}%`}
              y2="100%"
              stroke="#FCCE00"
              strokeWidth="0.3"
            />
          ))}
          {[...Array(18)].map((_, i) => (
            <line
              key={`diag2-${i}`}
              x1={`${i * 6}%`}
              y1="0"
              x2={`${Math.max(0, i * 6 - 40)}%`}
              y2="100%"
              stroke="#FCCE00"
              strokeWidth="0.3"
            />
          ))}
        </svg>
      </div>

      {/* メインテキスト */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-white font-black text-[rem] md:text-[10rem] tracking-tight">
          そもそも差別化とは？
        </h1>
      </div>
    </section>
  );
}
