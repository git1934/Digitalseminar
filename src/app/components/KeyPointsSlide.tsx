export function KeyPointsSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">

      {/* 背景タイポグラフィ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-gray-500/30 font-black text-[12rem] md:text-[16rem] tracking-tight select-none">
          Key<br/>Points
        </span>
      </div>

      {/* 背景の幾何学模様（まとめ＝収束構造） */}
      <div className="absolute inset-0 pointer-events-none opacity-20">

        {/* 放射ライン（中心へ収束） */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(20)].map((_, i) => {
            const angle = (i / 20) * 2 * Math.PI;
            const x2 = 50 + Math.cos(angle) * 45;
            const y2 = 50 + Math.sin(angle) * 45;

            return (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="#FCCE00"
                strokeWidth="0.6"
              />
            );
          })}
        </svg>

        {/* 周囲ノード */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(28)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() > 0.75 ? 3 : 1.5}
              fill="#FCCE00"
            />
          ))}
        </svg>

        {/* 同心円（総括感） */}
        <div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -translate-x-1/2 -translate-y-1/2 border-2 border-[#FCCE00] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 border border-[#FCCE00]/60 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-[#FCCE00]/30 rounded-full" />
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-[#FCCE00] font-black text-[8rem] md:text-[10rem] tracking-tight">
        本日のまとめ
      </h1>

    </section>
  );
}
