export function InvisibleReasonSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景の幾何学模様（点線 × フェードアウトパターン） */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* 点線のグリッド（見えにくさを表現） */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 縦の点線 */}
            {[...Array(10)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={`${(i + 1) * 10}%`}
                y1="0"
                x2={`${(i + 1) * 10}%`}
                y2="100%"
                stroke="#FCCE00"
                strokeWidth="1"
                strokeDasharray="5,10"
              />
            ))}
            {/* 横の点線 */}
            {[...Array(7)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={`${(i + 1) * 14}%`}
                x2="100%"
                y2={`${(i + 1) * 14}%`}
                stroke="#FCCE00"
                strokeWidth="1"
                strokeDasharray="5,10"
              />
            ))}
          </svg>
        </div>

        {/* 透明度グラデーションの四角形（フェードアウト効果） */}
        <div className="absolute top-[15%] left-[10%] w-[200px] h-[200px] border-2 border-[#FCCE00] opacity-80" />
        <div className="absolute top-[18%] left-[13%] w-[200px] h-[200px] border-2 border-[#FCCE00] opacity-50" />
        <div className="absolute top-[21%] left-[16%] w-[200px] h-[200px] border-2 border-[#FCCE00] opacity-20" />

        <div className="absolute bottom-[15%] right-[10%] w-[180px] h-[180px] border-2 border-[#FCCE00] opacity-80 rounded-full" />
        <div className="absolute bottom-[18%] right-[13%] w-[180px] h-[180px] border-2 border-[#FCCE00] opacity-50 rounded-full" />
        <div className="absolute bottom-[21%] right-[16%] w-[180px] h-[180px] border-2 border-[#FCCE00] opacity-20 rounded-full" />

        {/* 破線の円（部分的に見えるパターン） */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="700" height="700" xmlns="http://www.w3.org/2000/svg">
            <circle 
              cx="350" 
              cy="350" 
              r="300" 
              fill="none" 
              stroke="#FCCE00" 
              strokeWidth="1.5"
              strokeDasharray="30,20"
            />
            <circle 
              cx="350" 
              cy="350" 
              r="200" 
              fill="none" 
              stroke="#FCCE00" 
              strokeWidth="1"
              strokeDasharray="20,30"
            />
          </svg>
        </div>

        {/* ぼやけた小さな点群（見えにくさの象徴） */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => {
            const x = (i * 17 + 10) % 95;
            const y = (i * 23 + 15) % 90;
            const opacity = 0.3 + (i % 5) * 0.1;
            return (
              <div
                key={`dot-${i}`}
                className="absolute w-1 h-1 bg-[#FCCE00] rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  opacity: opacity,
                }}
              />
            );
          })}
        </div>

        {/* 四隅の破線装飾 */}
        <div className="absolute top-0 left-0 w-28 h-28">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <polyline 
              points="28,0 0,0 0,28" 
              fill="none" 
              stroke="#FCCE00" 
              strokeWidth="2"
              strokeDasharray="8,6"
            />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-28 h-28">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <polyline 
              points="0,0 28,0 28,28" 
              fill="none" 
              stroke="#FCCE00" 
              strokeWidth="2"
              strokeDasharray="8,6"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-28 h-28">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <polyline 
              points="0,0 0,28 28,28" 
              fill="none" 
              stroke="#FCCE00" 
              strokeWidth="2"
              strokeDasharray="8,6"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-28 h-28">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <polyline 
              points="28,28 28,0 0,0" 
              fill="none" 
              stroke="#FCCE00" 
              strokeWidth="2"
              strokeDasharray="8,6"
            />
          </svg>
        </div>

      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[4rem] md:text-[8rem] tracking-tight">
        アドレナリン<br/>ジャンキー?
      </h1>
    </section>
  );
}
