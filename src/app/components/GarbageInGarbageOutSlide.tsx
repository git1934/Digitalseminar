export function GarbageInGarbageOutSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* ===== 背景の巨大英語テキスト ===== */}
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <h2
          className="
            text-[110px] md:text-[180px] lg:text-[220px]
            font-black tracking-tight
            text-white/[0.07]
            select-none
            leading-none
            text-center
            whitespace-nowrap
          "
        >
          Garbage In,
          <br />
          Garbage Out
        </h2>
      </div>

      {/* ===== 前面の日本語メッセージ ===== */}
      <div className="relative z-10 text-center px-12">
        <h1 className="text-3xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-wide leading-tight">
          ゴミからは
          <br />
          ゴミしか生まれない
        </h1>

        {/* 話すための間 */}
        <div className="mt-12 flex justify-center">
          <div className="w-28 h-[2px] bg-white/40" />
        </div>
      </div>

    </section>
  );
}
