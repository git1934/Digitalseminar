export function DiverseChangeSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景の幾何学模様（変形 × 多様性パターン） */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* 様々な角度の斜線（多様性を表現） */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[15, 30, 45, 60, 75, 105, 120, 135, 150, 165].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const length = 100;
              const x1 = 50 - (length / 2) * Math.cos(rad);
              const y1 = 50 - (length / 2) * Math.sin(rad);
              const x2 = 50 + (length / 2) * Math.cos(rad);
              const y2 = 50 + (length / 2) * Math.sin(rad);
              return (
                <line
                  key={`angle-${i}`}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="#FCCE00"
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>
        </div>

        {/* 様々な形状（多様性） */}
        <div className="absolute top-[15%] left-[10%] w-[120px] h-[120px]">
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 三角形 */}
            <polygon points="50,10 90,90 10,90" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="absolute top-[20%] right-[15%] w-[100px] h-[100px] border-2 border-[#FCCE00]">
          {/* 正方形 */}
        </div>

        <div className="absolute bottom-[20%] left-[15%] w-[140px] h-[140px] border-2 border-[#FCCE00] rounded-full">
          {/* 円 */}
        </div>

        <div className="absolute bottom-[15%] right-[12%] w-[110px] h-[110px]">
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 六角形 */}
            <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="absolute top-[60%] left-[70%] w-[90px] h-[130px]">
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 五角形 */}
            <polygon points="50,10 90,40 75,85 25,85 10,40" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 変化を示す波状パターン */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...Array(5)].map((_, i) => (
              <path
                key={`wave-${i}`}
                d={`M 0 ${20 + i * 20} Q 25 ${10 + i * 20}, 50 ${20 + i * 20} T 100 ${20 + i * 20}`}
                stroke="#FCCE00"
                strokeWidth="0.5"
                fill="none"
              />
            ))}
          </svg>
        </div>

        {/* 回転する正方形（変化の動き） */}
        <div className="absolute top-[40%] left-[25%] w-[80px] h-[80px] border border-[#FCCE00] rotate-0" />
        <div className="absolute top-[42%] left-[27%] w-[80px] h-[80px] border border-[#FCCE00] rotate-15" />
        <div className="absolute top-[44%] left-[29%] w-[80px] h-[80px] border border-[#FCCE00] rotate-30" />
        <div className="absolute top-[46%] left-[31%] w-[80px] h-[80px] border border-[#FCCE00] rotate-45" />

        {/* サイズが変化する円（変化のグラデーション） */}
        <div className="absolute top-[65%] right-[60%]">
          <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#FCCE00" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#FCCE00" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#FCCE00" strokeWidth="1" />
            <circle cx="100" cy="100" r="20" fill="none" stroke="#FCCE00" strokeWidth="1" />
          </svg>
        </div>

        {/* ランダムな点群（多様性） */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            const x = (i * 19 + 8) % 92 + 4;
            const y = (i * 31 + 12) % 88 + 6;
            const size = 1 + (i % 4) * 0.5;
            return (
              <div
                key={`dot-${i}`}
                className="absolute bg-[#FCCE00] rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            );
          })}
        </div>

        {/* 四隅の装飾 - 異なるパターン */}
        <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-[#FCCE00] rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-[#FCCE00] rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-[#FCCE00]" />

      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[10rem] md:text-[12rem] tracking-tight">
        多様な変化?
      </h1>
    </section>
  );
}
