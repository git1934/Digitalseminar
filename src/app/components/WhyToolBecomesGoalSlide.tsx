export function WhyToolBecomesGoalSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景の幾何学模様（螺旋 × 矢印モチーフ） */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* 螺旋状の円 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#FCCE00] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#FCCE00] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#FCCE00] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-[#FCCE00] rounded-full" />
        </div>

        {/* 中心から外へ向かう矢印風の線 */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 50 + 10 * Math.cos(angle);
            const y1 = 50 + 10 * Math.sin(angle);
            const x2 = 50 + 45 * Math.cos(angle);
            const y2 = 50 + 45 * Math.sin(angle);
            return (
              <line
                key={`arrow-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="#FCCE00"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* 混乱を表すランダムな短い線 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...Array(30)].map((_, i) => {
              const x = (i * 7 + 15) % 90;
              const y = (i * 13 + 10) % 90;
              const length = 5 + (i % 3) * 2;
              const rotation = (i * 37) % 360;
              return (
                <line
                  key={`random-${i}`}
                  x1={`${x}%`}
                  y1={`${y}%`}
                  x2={`${x + length}%`}
                  y2={`${y}%`}
                  stroke="#FCCE00"
                  strokeWidth="0.5"
                  transform={`rotate(${rotation} ${x} ${y})`}
                />
              );
            })}
          </svg>
        </div>

        {/* 四隅のクエスチョンマーク風装飾 */}
        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-[#FCCE00] rounded-full" />
        <div className="absolute top-8 right-8 w-16 h-16 border-2 border-[#FCCE00] rounded-full" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-[#FCCE00] rounded-full" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-[#FCCE00] rounded-full" />

        {/* 角の装飾 */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#FCCE00]" />

      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[6rem] md:text-[7rem] lg:text-[8rem] tracking-tight text-center leading-tight px-8">
        なぜデジタルは<br />
        <span className="text-[#FCCE00]">手段が目的化</span><br />
        しやすいのか
      </h1>
    </section>
  );
}
