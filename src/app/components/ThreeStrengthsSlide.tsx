export function ThreeStrengthsSlide() {
  return (
    <section className="h-screen w-screen bg-black overflow-hidden relative">

      {/* 幾何学背景 - バイナリ風パターン */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* 平行斜線グリッド */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 右下がりの斜線 */}
            {[...Array(15)].map((_, i) => (
              <line
                key={`diag1-${i}`}
                x1={`${i * 7}%`}
                y1="0"
                x2={`${i * 7 + 40}%`}
                y2="100%"
                stroke="#FCCE00"
                strokeWidth="0.5"
              />
            ))}
            {/* 右上がりの斜線 */}
            {[...Array(15)].map((_, i) => (
              <line
                key={`diag2-${i}`}
                x1={`${i * 7}%`}
                y1="0"
                x2={`${Math.max(0, i * 7 - 40)}%`}
                y2="100%"
                stroke="#FCCE00"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        {/* 歯車風の円形 */}
        <div className="absolute top-[20%] left-[15%] w-[160px] h-[160px]">
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#FCCE00" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="#FCCE00" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute bottom-[20%] right-[20%] w-[200px] h-[200px]">
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="35" fill="none" stroke="#FCCE00" strokeWidth="1" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#FCCE00" strokeWidth="1" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="#FCCE00" strokeWidth="1" />
          </svg>
        </div>

        {/* 矩形パターン */}
        <div className="absolute top-[65%] left-[10%] w-[140px] h-[140px] border-2 border-[#FCCE00]">
          <div className="absolute top-3 left-3 w-16 h-16 border border-[#FCCE00]" />
        </div>

        <div className="absolute top-[15%] right-[10%] w-[120px] h-[120px] border-2 border-[#FCCE00] rotate-12">
          <div className="absolute top-2 right-2 w-12 h-12 border border-[#FCCE00]" />
        </div>

        {/* 十字のアクセント */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#FCCE00" strokeWidth="1" />
          </svg>
        </div>

        {/* 四隅の装飾 - 角丸L字 */}
        <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-[#FCCE00] rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-[#FCCE00] rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-[#FCCE00] rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-[#FCCE00] rounded-br-lg" />

      </div>

      {/* 背景ワード①：計算（黄色：一番濃い） */}
      <h2
        className="
          absolute
          top-[30%] left-[25%]
          -translate-x-1/2 -translate-y-1/2
          text-[180px] md:text-[220px]
          font-black
          text-[#FCCE00]/80
          tracking-widest
          select-none
          whitespace-nowrap
          z-0
        "
      >
        計算
      </h2>

      {/* 背景ワード②：記憶（白：中間の濃さ） */}
      <h2
        className="
          absolute
          top-[50%] left-[55%]
          -translate-x-1/2 -translate-y-1/2
          text-[190px] md:text-[240px]
          font-black
          text-white/70
          tracking-widest
          select-none
          whitespace-nowrap
          z-0
        "
      >
        記憶
      </h2>

      {/* 背景ワード③：反復（黄色：薄め） */}
      <h1
        className="
          absolute
          top-[72%] left-[38%]
          -translate-x-1/2 -translate-y-1/2
          text-[170px] md:text-[210px]
          font-black
          text-[#FCCE00]/65
          tracking-wider
          select-none
          whitespace-nowrap
          z-0
        "
      >
        反復
      </h1>

    </section>
  );
}
