export function ThreePrinciplesSlide() {
  return (
    <section className="h-screen w-screen bg-black overflow-hidden relative">

      {/* ===== 幾何学背景：戦略放射＋同心スクエア ===== */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">

        {/* 放射ライン */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(24)].map((_, i) => (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${50 + 60 * Math.cos((i * 15 * Math.PI) / 180)}%`}
              y2={`${50 + 60 * Math.sin((i * 15 * Math.PI) / 180)}%`}
              stroke="#FCCE00"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* 同心スクエア */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] border border-[#FCCE00]" />
          <div className="absolute w-[450px] h-[450px] border border-[#FCCE00]" />
          <div className="absolute w-[300px] h-[300px] border border-[#FCCE00]" />
        </div>

        {/* 四隅装飾 */}
        <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-[#FCCE00]" />
      </div>

      {/* ===== ワード①（最強調） ===== */}
      <h1
        className="
          absolute
          top-[18%] left-[40%]
          -translate-x-1/2 -translate-y-1/2
          text-[150px] md:text-[180px]
          font-black
          text-[#FCCE00]/85
          tracking-tight
          select-none
          whitespace-nowrap
          z-10
        "
      >
        徹底的な差別化
      </h1>

      {/* ===== ワード② ===== */}
      <h2
        className="
          absolute
          top-[48%] left-[50%]
          -translate-x-1/2 -translate-y-1/2
          text-[140px] md:text-[180px]
          font-black
          text-white/70
          tracking-tight
          select-none
          whitespace-nowrap
          z-10
        "
      >
        手段の目的化防止
      </h2>

      {/* ===== ワード③ ===== */}
      <h2
        className="
          absolute
          top-[75%] left-[65%]
          -translate-x-1/2 -translate-y-1/2
          text-[130px] md:text-[170px]
          font-black
          text-[#0072BC]/85
          tracking-tight
          select-none
          whitespace-nowrap
          z-10
        "
      >
        撤退KPI
      </h2>

    </section>
  );
}
