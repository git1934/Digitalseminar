import starSvg from "@/imports/star.svg";

export function ThankYou() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      {/* 背景の星型装飾：右上に配置し、透過度をアップ */}
      <div className="absolute -top-24 -right-24 opacity-80 pointer-events-none">
        <img
          src={starSvg}
          alt=""
          className="w-[600px] h-[600px] object-contain animate-[spin_60s_linear_infinite]"
        />
      </div>

      {/* 背景の巨大な英語テキスト */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-[180px] md:text-[240px] font-black tracking-tight
                       text-white/[0.1] select-none leading-tight text-center"
        >
          THANK YOU
          <br />
          SO MUCH
        </h2>
      </div>

      {/* 前面の日本語テキスト */}
      <div className="relative z-10 text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-white tracking-wide">
          ありがとうございました
        </h1>

        {/* 装飾的なアクセント */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-16 h-1 bg-[#FCCE00]"></div>
          <div className="w-16 h-1 bg-white/30"></div>
          <div className="w-16 h-1 bg-[#FCCE00]"></div>
        </div>
      </div>
    </section>
  );
}