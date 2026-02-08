export function TopDownBottomUpSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">

      {/* 背景テキスト：Management */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="
            text-[10rem] md:text-[14rem] lg:text-[18rem]
            font-black tracking-tight
            text-gray-400/10
            select-none
            whitespace-nowrap
          "
        >
          Management
        </span>
      </div>

      {/* 背景：上下方向の構造（Top-down / Bottom-up） */}
      <div className="absolute inset-0 pointer-events-none opacity-15">

        {/* トップダウン：上 → 下 */}
        <svg
          className="absolute top-0 left-0 w-full h-1/2"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(10)].map((_, i) => (
            <line
              key={`top-${i}`}
              x1={`${10 + i * 8}%`}
              y1="0"
              x2={`${10 + i * 8}%`}
              y2="100%"
              stroke="#FCCE00"
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* ボトムアップ：下 → 上 */}
        <svg
          className="absolute bottom-0 left-0 w-full h-1/2"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(10)].map((_, i) => (
            <polyline
              key={`bottom-${i}`}
              points={`
                ${10 + i * 8},100
                ${12 + i * 8},70
                ${10 + i * 8},40
              `}
              fill="none"
              stroke="#FCCE00"
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* 中央の境界ライン */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#FCCE00]/60" />

        {/* 思考の粒（ランダム点） */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(36)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="1.5"
              fill="#FCCE00"
            />
          ))}
        </svg>
      </div>

      {/* メインテキスト */}
      <div className="relative z-10 flex flex-col items-center font-black tracking-tight text-center leading-none">
        <span className="text-white text-[6.5rem] md:text-[8.5rem]">
          トップダウン
        </span>

        <span className="text-[#FCCE00] text-[4.5rem] md:text-[6rem] my-4">
          VS
        </span>

        <span className="text-white text-[6.5rem] md:text-[8.5rem]">
          ボトムアップ
        </span>
      </div>
    </section>
  );
}
