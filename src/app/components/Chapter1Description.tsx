export function Chapter1Description() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-[#e1e1e1] px-4">

      {/* 背景ワード：DIGITAL STRATEGY（透過） */}
      <h2
        className="
          absolute
          top-1/4 left-1/2
          -translate-x-1/2 -translate-y-1/2
          text-[80px] md:text-[100px] lg:text-[120px]
          font-black
          tracking-widest
          text-black/20
          whitespace-nowrap
          select-none
          z-0
        "
      >
        DIGITAL STRATEGY
      </h2>

      {/* 背景の太い白い横線 */}
      <div
        className="
          absolute
          top-1/2
          left-0
          w-full
          h-32
          bg-white
          opacity-70
          -translate-y-1/2
          z-[1]
        "
      />

      {/* メインテキスト */}
      <div className="relative z-10 text-center">
        <h1
          className="
            text-[140px]
            md:text-[180px]
            lg:text-[200px]
            font-black
            text-black
            leading-none
            tracking-tight
          "
        >
          徹底的な差別化
        </h1>
      </div>

    </section>
  );
}
