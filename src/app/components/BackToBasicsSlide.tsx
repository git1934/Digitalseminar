export function BackToBasicsSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* 背景の巨大な英語テキスト */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-[160px] md:text-[220px] font-black tracking-tight
                     text-white/[0.08] select-none leading-none text-center"
        >
          Back to
          <br />
          Basics
        </h2>
      </div>

      {/* 前面の日本語テキスト */}
      <div className="relative z-10 text-center px-12">
        <h1 className="text-2xl md:text-8xl font-extrabold text-white tracking-wide leading-tight">
          基本に返る
        </h1>

        {/* サブ的な余白（話すための間） */}
        <div className="mt-10 flex justify-center">
          <div className="w-24 h-1 bg-white/40" />
        </div>
      </div>

    </section>
  );
}
