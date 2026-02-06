export function ReallySlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景の幾何学模様（波線 × 同心正方形） */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* 波状の曲線 */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${20 + i * 15} Q 25 ${10 + i * 15}, 50 ${20 + i * 15} T 100 ${20 + i * 15}`}
              stroke="#FCCE00"
              strokeWidth="0.5"
              fill="none"
              vectorEffect="non-scaling-stroke"
              transform="scale(1, 1)"
              style={{
                transformOrigin: 'center',
              }}
            />
          ))}
        </svg>

        {/* 同心正方形 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-[#FCCE00] rotate-45" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#FCCE00] rotate-45" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#FCCE00] rotate-45" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#FCCE00] rotate-45" />
        </div>

        {/* クロスハッチパターン */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 左上から右下への細かい線 */}
            {[...Array(20)].map((_, i) => (
              <line
                key={`diag1-${i}`}
                x1={`${i * 5}%`}
                y1="0"
                x2={`${i * 5 + 50}%`}
                y2="100%"
                stroke="#FCCE00"
                strokeWidth="0.3"
              />
            ))}
            {/* 右上から左下への細かい線 */}
            {[...Array(20)].map((_, i) => (
              <line
                key={`diag2-${i}`}
                x1={`${i * 5}%`}
                y1="0"
                x2={`${Math.max(0, i * 5 - 50)}%`}
                y2="100%"
                stroke="#FCCE00"
                strokeWidth="0.3"
              />
            ))}
          </svg>
        </div>

      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[10rem] md:text-[12rem] tracking-tight">
        これって本当？
      </h1>
    </section>
  );
}