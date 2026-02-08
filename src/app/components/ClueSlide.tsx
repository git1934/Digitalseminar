export function ClueSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">

      {/* 背景タイポグラフィ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-gray-500/20 font-black text-[14rem] md:text-[18rem] tracking-tight select-none">
          Solutions
        </span>
      </div>
      
      {/* 背景の幾何学模様：縦ライン＋ドット */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        
        {/* 縦ライン */}
        <div className="absolute inset-0 flex justify-between">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-px h-full bg-[#FCCE00]"
            />
          ))}
        </div>

        {/* ドット装飾 */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(40)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="2"
              fill="#FCCE00"
            />
          ))}
        </svg>
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-7xl md:text-8xl lg:text-9xl font-black text-white text-center tracking-wide px-12 leading-tight">
        解決策の糸口は？
      </h1>

    </section>
  );
}
