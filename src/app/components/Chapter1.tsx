export function Chapter1() {
  return (
    <section className="relative h-screen w-screen bg-black flex items-center justify-center px-8 overflow-hidden">
      

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center flex flex-col items-center">

        {/* 上部アクセントライン */}
        <div className="flex gap-2 mb-10">
          <div className="w-20 h-5 bg-[#FCCE00]" />
          <div className="w-20 h-5 bg-white/30" />
          <div className="w-20 h-5 bg-white/30" />
        </div>

        {/* SECTION番号 */}
        <h1
          className="font-black tracking-widest text-[#FCCE00]"
          style={{
            fontSize: "140px",
            lineHeight: "1",
          }}
        >
          SECTION.1
        </h1>
      </div>
    </section>
  );
}
