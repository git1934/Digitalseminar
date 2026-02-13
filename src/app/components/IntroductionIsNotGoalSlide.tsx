export function IntroductionIsNotGoalSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景：放射状グリッド＋ノード */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* 放射状ライン */}
          {[...Array(24)].map((_, i) => {
            const angle = (i / 24) * 360;
            return (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${50 + 70 * Math.cos((angle * Math.PI) / 180)}%`}
                y2={`${50 + 70 * Math.sin((angle * Math.PI) / 180)}%`}
                stroke="#FCCE00"
                strokeWidth="0.8"
                strokeDasharray="4,6"
              />
            );
          })}

          {/* 縦横グリッド */}
          {[...Array(12)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${i * 8}%`}
              y1="0"
              x2={`${i * 8}%`}
              y2="100%"
              stroke="#FCCE00"
              strokeWidth="0.4"
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${i * 12}%`}
              x2="100%"
              y2={`${i * 12}%`}
              stroke="#FCCE00"
              strokeWidth="0.4"
            />
          ))}

          {/* ランダムノード */}
          {[...Array(20)].map((_, i) => (
            <circle
              key={`node-${i}`}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="3"
              fill="#FCCE00"
            />
          ))}
        </svg>
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[8rem] md:text-[10rem] tracking-tight leading-tight text-center">
        導入が<br />
        ゴールではない
      </h1>
    </section>
  );
}
