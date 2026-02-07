export function BalanceSenseSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景：バランス・調整モチーフ */}
      <div className="absolute inset-0 opacity-12 pointer-events-none">

        {/* 中央の支点 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="6" fill="#FCCE00" />
            <circle cx="60" cy="60" r="28" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 微妙に傾いたメインバランスバー */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="900" height="200" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="100"
              y1="110"
              x2="800"
              y2="90"
              stroke="#FCCE00"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* 左側の重み */}
        <div className="absolute left-[18%] top-1/2 -translate-y-1/2">
          <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="40" width="80" height="40" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 右側の重み */}
        <div className="absolute right-[18%] top-1/2 -translate-y-1/2">
          <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="60" height="60" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 調整ライン（微差を表現） */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...Array(6)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={`${35 + i * 6}%`}
                x2="100%"
                y2={`${35 + i * 6}%`}
                stroke="#FCCE00"
                strokeWidth="0.4"
                strokeDasharray="4,6"
              />
            ))}
          </svg>
        </div>

        {/* 四隅のガイド */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#FCCE00]" />
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[9rem] md:text-[11rem] tracking-tight">
        バランス感覚
      </h1>
    </section>
  );
}
