export function TradeOffSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">

      {/* 背景の幾何学模様（断絶 × 破片） */}
      <div className="absolute inset-0 pointer-events-none opacity-15">

        {/* 垂直のカットライン */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#FCCE00]" />

        {/* 欠けた矩形（失われるもの） */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x={`${Math.random() * 90}%`}
              y={`${Math.random() * 90}%`}
              width="60"
              height="20"
              fill="none"
              stroke="#FCCE00"
              strokeWidth="1"
              transform={`rotate(${Math.random() * 40 - 20})`}
            />
          ))}
        </svg>

        {/* 斜めに走る分断ライン */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(6)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={`${20 + i * 15}%`}
              x2="100%"
              y2={`${10 + i * 15}%`}
              stroke="#FCCE00"
              strokeWidth="0.6"
            />
          ))}
        </svg>

        {/* 消えていく点 */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="1.2"
              fill="#FCCE00"
            />
          ))}
        </svg>
      </div>

      {/* メインテキスト */}
      <div className="relative z-10 text-center text-white font-black tracking-tight leading-tight">
        <p className="text-[4.5rem] md:text-[6rem]">
          何かを得るためには
        </p>
        <p className="text-[4.5rem] md:text-[6rem]">
          何かを捨てなければならない
        </p>
      </div>
    </section>
  );
}
