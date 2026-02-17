export function DramaticPause() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* 背景テキスト：Value Proposition */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="
            text-[10rem] md:text-[14rem] lg:text-[18rem]
            font-black tracking-tight
            text-gray-400/10
            select-none
            whitespace-nowrap
          "
        >
          Value
          <br />
          Proposition
        </span>
      </div>

      {/* 背景①：斜めストライプ */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={`${i * 10}%`}
              y1="0"
              x2={`${i * 10 - 40}%`}
              y2="100%"
              stroke="#FCCE00"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* 背景②：右上リング */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full border border-[#FCCE00]/30" />
      <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full border border-[#FCCE00]/20" />

      {/* メインテキスト */}
      <h1
        className="
          relative z-10
            text-[6rem] md:text-[8rem] lg:text-[11rem]
          font-black text-white text-center
          tracking-wider px-8
        "
      >
        提供価値
      </h1>
    </section>
  );
}