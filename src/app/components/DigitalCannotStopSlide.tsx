export function DigitalCannotStopSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景：絡みつくループ構造 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">

        {/* 無限ループ風ライン */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="900" height="500" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M150 250
                 C150 100, 450 100, 450 250
                 C450 400, 750 400, 750 250
                 C750 100, 450 100, 450 250
                 C450 400, 150 400, 150 250"
              fill="none"
              stroke="#FCCE00"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* デジタルの流れを表す直線群 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...Array(10)].map((_, i) => (
              <line
                key={i}
                x1={`${10 + i * 8}%`}
                y1="0"
                x2={`${10 + i * 8}%`}
                y2="100%"
                stroke="#FCCE00"
                strokeWidth="0.6"
                strokeDasharray="6,8"
              />
            ))}
          </svg>
        </div>

        {/* ノード（止められない接点） */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...Array(12)].map((_, i) => (
              <circle
                key={i}
                cx={`${15 + (i % 4) * 20}%`}
                cy={`${20 + Math.floor(i / 4) * 20}%`}
                r="4"
                fill="#FCCE00"
              />
            ))}
          </svg>
        </div>

        {/* 四隅の拘束フレーム */}
        <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-[#FCCE00]" />
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[9rem] md:text-[11rem] tracking-tight leading-tight text-center">
        デジタルは<br />
        やめられない
      </h1>
    </section>
  );
}
