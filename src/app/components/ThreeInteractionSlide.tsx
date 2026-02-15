export function ThreeInteractionSlide() {
  return (
    <section className="h-screen w-screen bg-black overflow-hidden relative">

      {/* 幾何学背景(黄色アクセント) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* 斜線グリッド */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
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

        {/* 中央クロス */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#FCCE00" strokeWidth="1" />
          </svg>
        </div>

        {/* 四隅装飾 */}
        <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-[#FCCE00]" />
      </div>

      {/* ワード① アンケート */}
      <h1
        className="
          absolute
          top-[30%] left-[45%]
          -translate-x-1/2 -translate-y-1/2
          text-[180px] md:text-[220px]
          font-black
          text-[#FCCE00]/85
          tracking-widest
          select-none
          whitespace-nowrap
        "
      >
        アンケート
      </h1>

      {/* ワード② クイズ */}
      <h1
        className="
          absolute
          top-[50%] left-[55%]
          -translate-x-1/2 -translate-y-1/2
          text-[190px] md:text-[240px]
          font-black
          text-white/75
          tracking-widest
          select-none
          whitespace-nowrap
        "
      >
        クイズ
      </h1>

      {/* ワード③ 拍手 */}
      <h1
        className="
          absolute
          top-[72%] left-[78%]
          -translate-x-1/2 -translate-y-1/2
          text-[170px] md:text-[210px]
          font-black
          text-[#0072BC]/90
          tracking-wider
          select-none
          whitespace-nowrap
        "
      >
        拍手
      </h1>

    </section>
  );
}
