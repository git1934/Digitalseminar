export function ActionAttitudeSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">

      {/* ===== 背景透かしタイポ ===== */}
      <div className="absolute top-10 flex items-center justify-center pointer-events-none">
        <span className="text-yellow-500/10 font-black text-[14rem] md:text-[18rem] tracking-tight select-none">
          CHOICE
        </span>
      </div>

      {/* ===== 背景：行動方向ベクトル ===== */}
      <div className="absolute inset-0 pointer-events-none opacity-15">

        {/* 左 → 右（積極的） */}
        <svg
          className="absolute left-0 top-0 h-full w-1/2"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(8)].map((_, i) => (
            <polygon
              key={i}
              points="0,40 120,60 0,80"
              fill="#FCCE00"
              transform={`translate(0 ${i * 120})`}
            />
          ))}
        </svg>

        {/* 右 → 左（消極的） */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(8)].map((_, i) => (
            <polygon
              key={i}
              points="120,40 0,60 120,80"
              fill="#FCCE00"
              transform={`translate(0 ${i * 120})`}
            />
          ))}
        </svg>

        {/* 中央分断ライン */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#FCCE00]/60" />

        {/* 思考ノイズ点 */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(30)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="1.5"
              fill="#FCCE00"
            />
          ))}
        </svg>
      </div>

      {/* ===== メインテキスト ===== */}
      <div className="relative z-10 flex items-center gap-12 font-black tracking-tight">
        <span className="text-white text-[7rem] md:text-[9rem]">
          積極的
        </span>

        <span className="text-[#FCCE00] text-[5rem] md:text-[6rem]">
          vs
        </span>

        <span className="text-white text-[7rem] md:text-[9rem]">
          消極的
        </span>
      </div>
    </section>
  );
}
