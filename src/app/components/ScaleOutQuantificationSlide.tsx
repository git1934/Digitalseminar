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

      {/* ⭐ 背景スター：イエロー（ヨーヨー回転） */}
      <div className="absolute top-1/2 -left-56 -translate-y-1/2 opacity-25 pointer-events-none">
        <img
          src={starSvg}
          alt=""
          className="w-[520px] h-[520px] object-contain
                     hue-rotate-[20deg] saturate-150
                     animate-[yoyoSpin_18s_ease-in-out_infinite]"
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

        <p className="mt-10 text-3xl text-white/60 font-bold tracking-wide">
          手段ではなく、成果の拡張性を把握する
        </p>
      </div>

      {/* ⭐ カスタムアニメーション */}
      <style>
        {`
          @keyframes yoyoSpin {
            0% {
              transform: rotate(0deg);
            }

            20% {
              transform: rotate(220deg); /* 速く回る */
            }

            40% {
              transform: rotate(260deg); /* 減速 */
            }

            60% {
              transform: rotate(40deg);  /* 逆方向へ戻る */
            }

            80% {
              transform: rotate(-180deg); /* 加速逆回転 */
            }

            100% {
              transform: rotate(0deg); /* 元に戻る */
            }
          }
        `}
      </style>
    </section>
  );
}
