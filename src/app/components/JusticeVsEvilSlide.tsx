export function JusticeVsEvilSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      {/* ===== 背景：左右対立構造 ===== */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* 左側：正義（直線・整然） */}
        <svg
          className="absolute left-0 top-0 w-1/2 h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(12)].map((_, i) => (
            <line
              key={`left-${i}`}
              x1="0"
              y1={`${5 + i * 8}%`}
              x2="100%"
              y2={`${5 + i * 8}%`}
              stroke="#FCCE00"
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* 右側：悪（斜線・混沌） */}
        <svg
          className="absolute right-0 top-0 w-1/2 h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(12)].map((_, i) => (
            <line
              key={`right-${i}`}
              x1="100%"
              y1={`${i * 10}%`}
              x2="0%"
              y2={`${(i + 1) * 10}%`}
              stroke="#FCCE00"
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* 中央の対立ライン */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#FCCE00]/60" />
      </div>

      {/* ===== メインテキスト ===== */}
      <div className="relative z-10 flex items-center font-black tracking-tight text-center leading-none">
        <span className="text-white text-[6.5rem] md:text-[12rem]">
          RevOps
        </span>
      </div>
    </section>
  );
}