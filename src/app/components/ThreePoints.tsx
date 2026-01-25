export function ThreePoints() {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center">

      {/* 幾何学背景 */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)]
          [background-size:48px_48px]
        "
      />

      {/* 背景にうっすら入る斜めライン */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-white/5
          via-transparent
          to-transparent
        "
      />

      {/* メインテキスト */}
      <h1
        className="
          relative z-10
          text-[180px] md:text-[260px] lg:text-[320px]
          font-extrabold
          tracking-tight
          text-white/8
          text-center
          leading-none
          select-none
        "
      >
        MAGIC NUMBER 3
      </h1>

    </section>
  );
}
