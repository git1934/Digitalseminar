import starSvg from "@/imports/star.svg";

export function DataIdeaSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      {/* 背景スター：右上（メイン） */}
      <div className="absolute -top-32 -right-32 opacity-60 pointer-events-none">
        <img
          src={starSvg}
          alt=""
          className="w-[720px] h-[720px] object-contain
               grayscale brightness-160
               animate-[spin_80s_linear_infinite]"
        />
      </div>

      {/* 背景スター：左下（サブ） */}
      <div className="absolute -bottom-40 -left-40 opacity-30 pointer-events-none">
        <img
          src={starSvg}
          alt=""
          className="w-[420px] h-[420px] object-contain animate-[spin_120s_linear_infinite_reverse]"
        />
      </div>

      {/* メインテキスト */}
      <div className="relative z-10 text-center px-16">
        <h1 className="text-[#FCCE00] font-black text-[8rem] md:text-[10rem] tracking-tight leading-tight">
          アイデア出し
          <br />
          データ活用
        </h1>

        {/* サブメッセージ（話す余白） */}
        <p className="mt-10 text-3xl text-white/70 font-bold">
          分析ではなく、発想のために使う
        </p>
      </div>
    </section>
  );
}