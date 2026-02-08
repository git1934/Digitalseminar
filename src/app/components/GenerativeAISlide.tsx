export function GenerativeAISlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">

      {/* 背景タイポグラフィ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-gray-500/20 font-black text-[12rem] md:text-[16rem] tracking-tight select-none">
          Game<br/>Change
        </span>
      </div>

      {/* 背景の幾何学模様（ネットワーク × 集積） */}
      <div className="absolute inset-0 pointer-events-none opacity-15">

        {/* 接続線（ネットワーク） */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(18)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = 50 + (Math.random() * 40 - 20);
            const y2 = 50 + (Math.random() * 40 - 20);

            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="#FCCE00"
                strokeWidth="0.6"
              />
            );
          })}
        </svg>

        {/* ノード（知識・モデル） */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(24)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() > 0.7 ? 3 : 1.5}
              fill="#FCCE00"
            />
          ))}
        </svg>

        {/* 中央のコア（台頭の核） */}
        <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] -translate-x-1/2 -translate-y-1/2 border-2 border-[#FCCE00] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[360px] h-[360px] -translate-x-1/2 -translate-y-1/2 border border-[#FCCE00]/60 rounded-full" />
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[9rem] md:text-[11rem] tracking-tight">
        生成AIの台頭
      </h1>

    </section>
  );
}
