export function Chapter1() {
  return (
    <section className="relative h-screen w-screen bg-black flex items-center justify-center px-8 overflow-hidden">
      
      {/* 背景ワード */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className="
            text-white/5
            font-black
            tracking-[0.2em]
            select-none
            whitespace-nowrap
          "
          style={{
            fontSize: "200px",
          }}
        >
          DIGITAL STRATEGY
        </p>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center flex flex-col items-center">

        {/* 上部アクセントライン */}
        <div className="flex gap-2 mb-10">
          <div className="w-20 h-1 bg-[#FCCE00]" />
          <div className="w-20 h-1 bg-white/30" />
          <div className="w-20 h-1 bg-white/30" />
        </div>

        {/* SECTION番号 */}
        <h1
          className="font-black tracking-widest text-[#FCCE00]"
          style={{
            fontSize: "280px",
            lineHeight: "1",
          }}
        >
          SECTION01
        </h1>
      </div>
    </section>
  );
}
