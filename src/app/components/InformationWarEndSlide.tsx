export function InformationWarEndSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">

      {/* ===== 背景透かしタイポ ===== */}
      <div className="absolute top-10 left-10 flex items-center justify-center pointer-events-none">
        <span className="text-yellow-500/10 font-black text-[14rem] md:text-[18rem] tracking-tight select-none text-center leading-none">
          NEW ERA
        </span>
      </div>

      {/* ===== 背景幾何（崩壊グリッド） ===== */}
      <div className="absolute inset-0 pointer-events-none opacity-15">

        {/* 水平方向断線 */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(14)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1={`${Math.random() * 20}%`}
              y1={`${10 + i * 6}%`}
              x2={`${80 + Math.random() * 20}%`}
              y2={`${10 + i * 6}%`}
              stroke="#FCCE00"
              strokeWidth={i > 8 ? 0.3 : 0.8}
              strokeDasharray={i > 7 ? "6 10" : "0"}
            />
          ))}
        </svg>

        {/* 垂直方向断線 */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(10)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${15 + i * 7}%`}
              y1={`${Math.random() * 30}%`}
              x2={`${15 + i * 7}%`}
              y2={`${70 + Math.random() * 30}%`}
              stroke="#FCCE00"
              strokeWidth={i < 4 ? 0.8 : 0.4}
              strokeDasharray={i > 5 ? "4 12" : "0"}
            />
          ))}
        </svg>

        {/* ノイズ断片 */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(22)].map((_, i) => (
            <rect
              key={i}
              x={`${Math.random() * 100}%`}
              y={`${Math.random() * 100}%`}
              width="3"
              height="1"
              fill="#FCCE00"
              opacity={Math.random() * 0.8}
            />
          ))}
        </svg>

      </div>

      {/* ===== メインテキスト ===== */}
      <h1 className="relative z-10 text-white font-black text-[8rem] md:text-[10rem] tracking-tight text-center leading-tight">
        情報量戦略<br />の終わり
      </h1>

    </section>
  );
}
