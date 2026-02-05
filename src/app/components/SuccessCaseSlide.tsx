export function SuccessCaseSlide() {
  return (
    <section className="h-screen w-screen bg-black overflow-hidden relative">

      {/* 幾何学背景 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* 格子状のグリッド */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 縦線 */}
            {[...Array(12)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={`${(i + 1) * 8}%`}
                y1="0"
                x2={`${(i + 1) * 8}%`}
                y2="100%"
                stroke="#FCCE00"
                strokeWidth="0.5"
              />
            ))}
            {/* 横線 */}
            {[...Array(8)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={`${(i + 1) * 12}%`}
                x2="100%"
                y2={`${(i + 1) * 12}%`}
                stroke="#FCCE00"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        {/* 三角形パターン */}
        <div className="absolute top-[10%] left-[10%] w-[150px] h-[150px]">
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 90,90 10,90" fill="none" stroke="#FCCE00" strokeWidth="1" />
            <polygon points="50,30 75,70 25,70" fill="none" stroke="#FCCE00" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute bottom-[15%] right-[15%] w-[200px] h-[200px]">
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 90,90 10,90" fill="none" stroke="#FCCE00" strokeWidth="1" />
          </svg>
        </div>

        {/* 円形と正方形の組み合わせ */}
        <div className="absolute top-[60%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] border border-[#FCCE00] rounded-full" />
        <div className="absolute top-[60%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] border border-[#FCCE00] rotate-45" />

        {/* 対角線のアクセント */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="30%" y2="100%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="70%" y1="0" x2="100%" y2="100%" stroke="#FCCE00" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 四隅の装飾 - L字 */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#FCCE00]" />

      </div>

      {/* 背景ワード①：デジタルツール（黄色：一番濃い） */}
      <h2
        className="
          absolute
          top-[48%] left-[48%]
          -translate-x-1/2 -translate-y-1/2
          text-[170px] md:text-[200px]
          font-black
          text-[#FCCE00]/75
          tracking-widest
          select-none
          whitespace-nowrap
          z-0
        "
      >
        便利ツール
      </h2>

      {/* 背景ワード②：生成AI（白：一番薄い） */}
      <h2
        className="
          absolute
          top-[70%] left-[55%]
          -translate-x-1/2 -translate-y-1/2
          text-[160px] md:text-[210px]
          font-black
          text-white/68
          tracking-widest
          select-none
          whitespace-nowrap
          z-0
        "
      >
        生成AI
      </h2>

      {/* 背景ワード③：成功事例（白：中間の濃さ） */}
      <h1
        className="
          absolute
          top-[25%] left-[42%]
          -translate-x-1/2 -translate-y-1/2
          text-[180px] md:text-[230px]
          font-black
          text-[#0072BC]/85
          tracking-wider
          select-none
          whitespace-nowrap
          z-0
        "
      >
        成功事例
      </h1>

    </section>
  );
}