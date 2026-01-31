export function KeyMessage() {
  // ラインの設定（角度、位置、太さ、遅延）を配列で管理して密度を上げます
  const lines = [
    { style: "top-[10%] left-[-10%] rotate-[15deg] w-[3500px] h-[1px]", delay: 2.0 },
    { style: "top-[40%] left-[-20%] rotate-[5deg] w-[3500px] h-[2px]", delay: 2.3 },
    { style: "bottom-[20%] left-[-15%] -rotate-[14deg] w-[3500px] h-[1px]", delay: 3.0 },
    { style: "top-[20%] right-[-10%] -rotate-[23deg] w-[3500px] h-[1px]", delay: 3.7 },
    { style: "bottom-[14%] right-[-52%] -rotate-[12deg] w-[3500px] h-[2px]", delay: 4.2 },
    { style: "top-[15%] right-[-25%] -rotate-[23deg] w-[3500px] h-[1.5px]", delay: 5.2 },
    { style: "bottom-[18%] right-[-14%] -rotate-[5deg] w-[3500px] h-[2px]", delay: 5.6 },
    { style: "top-[30%] left-[-16%] rotate-[148deg] w-[4000px] h-[1px]", delay: 6 },
    { style: "bottom-[40%] right-[-20%] -rotate-[5deg] w-[3500px] h-[2px]", delay: 6.4 },
    { style: "top-[50%] left-[-10%] rotate-[175deg] w-[4000px] h-[1px]", delay: 7.2 },
    { style: "bottom-[10%] left-[30%] rotate-[70deg] w-[2000px] h-[1px]", delay: 8.0 },
  ];

  return (
    <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center bg-black">
      
      {/* 背景ライン群 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`absolute bg-[#FCCE00] opacity-0 animate-webLineSlow ${line.style}`}
            style={{ animationDelay: `${line.delay}s` }}
          />
        ))}
      </div>

      {/* メイン文字 */}
   {/* メイン文字 */}
<div className="relative z-10 text-center">
  <h1
    className="
      text-[240px]
      md:text-[320px]
      lg:text-[340px]
      font-black
      tracking-wider
      text-white
      leading-none
      drop-shadow-[0_0_50px_rgba(252,206,0,0.2)]
      select-none
    "
  >
    損小利大
  </h1>
</div>


      {/* アニメーション定義 */}
      <style>{`
        @keyframes webLineSlow {
          0% {
            opacity: 0;
            transform: scaleX(0) translateX(-10%);
          }
          30% {
            opacity: 0.15;
          }
          100% {
            opacity: 0.15; /* 最終的な透明度（控えめにして網らしさを出す） */
            transform: scaleX(1) translateX(0);
          }
        }

        .animate-webLineSlow {
          /* 1本あたり5秒かけてゆっくり描画 */
          animation: webLineSlow 15s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transform-origin: left center;
        }
      `}</style>
    </section>
  );
}