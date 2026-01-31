export function ThreePoints() {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center">
      
      {/* 背景文字：MAGIC NUMBER */}
      <h2
        className="
          absolute
          text-[120px] md:text-[180px] lg:text-[220px]
          font-extrabold
          tracking-tight
          text-white/30
          select-none
          whitespace-nowrap
        "
      >
        MAGIC NUMBER
      </h2>

      {/* メイン文字：3 */}
      <h1
        className="
          relative z-10
          text-[280px] md:text-[420px] lg:text-[520px]
          font-black
          leading-none
          text-[#FCCE00]
          select-none
        "
      >
        3
      </h1>
    </section>
  );
}