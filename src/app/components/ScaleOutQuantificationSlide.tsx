import starSvg from "../../imports/star.svg";

export function ScaleOutQuantificationSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* 背景スター：ホワイト（メイン） */}
      <div className="absolute -top-40 -right-40 opacity-40 pointer-events-none">
        <img
          src={starSvg}
          alt=""
          className="w-[760px] h-[760px] object-contain
                     brightness-150
                     animate-[spin_180s_linear_infinite]"
        />
      </div>

      {/* 背景スター：イエロー（アクセント） */}
      <div className="absolute top-1/2 -left-56 -translate-y-1/2 opacity-25 pointer-events-none">
        <img
          src={starSvg}
          alt=""
          className="w-[520px] h-[520px] object-contain
                     hue-rotate-[20deg] saturate-150
                     animate-[spin_240s_linear_infinite_reverse]"
        />
      </div>

      {/* 背景スター：グレー（奥行き） */}
      <div className="absolute -bottom-48 right-1/4 opacity-20 pointer-events-none">
        <img
          src={starSvg}
          alt=""
          className="w-[420px] h-[420px] object-contain
                     grayscale brightness-110
                     animate-[spin_300s_linear_infinite]"
        />
      </div>

      {/* メインテキスト */}
      <div className="relative z-10 text-center px-16">
        <h1 className="text-white font-black text-[7rem] md:text-[9rem] tracking-tight leading-tight">
          スケールアウト性
          <br />
          の定量化
        </h1>

        {/* サブテキスト（語り用余白） */}
        <p className="mt-10 text-3xl text-white/60 font-bold tracking-wide">
          手段ではなく、成果の拡張性を把握する
        </p>
      </div>
    </section>
  );
}
