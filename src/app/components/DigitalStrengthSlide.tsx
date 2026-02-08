export function DigitalStrengthSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">

      {/* 背景タイポグラフィ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-gray-500/20 font-black text-[14rem] md:text-[18rem] tracking-tight select-none">
          Strong Point
        </span>
      </div>
      
      {/* 背景の幾何学模様（六角形グリッド × 回路基板風） */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* 六角形グリッド */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...Array(6)].map((_, row) => (
              [...Array(8)].map((_, col) => {
                const x = col * 12 + (row % 2) * 6;
                const y = row * 10;
                return (
                  <g key={`hex-${row}-${col}`}>
                    <polygon 
                      points={`${x},${y + 3} ${x + 3},${y + 1} ${x + 6},${y + 3} ${x + 6},${y + 7} ${x + 3},${y + 9} ${x},${y + 7}`}
                      fill="none"
                      stroke="#FCCE00"
                      strokeWidth="0.5"
                      transform="scale(1.5)"
                    />
                  </g>
                );
              })
            ))}
          </svg>
        </div>

        {/* 回路基板風の接続線 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="25%" x2="40%" y2="25%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="60%" y1="75%" x2="90%" y2="75%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="15%" y1="50%" x2="35%" y2="50%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="25%" y1="10%" x2="25%" y2="35%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="75%" y1="65%" x2="75%" y2="90%" stroke="#FCCE00" strokeWidth="1.5" />
            <polyline points="40,25 60,25 60,40" fill="none" stroke="#FCCE00" strokeWidth="1.5" transform="scale(1.2)" />
            <polyline points="70,60 70,75 85,75" fill="none" stroke="#FCCE00" strokeWidth="1.5" transform="scale(1.2)" />
          </svg>
        </div>

        {/* ノード */}
        <div className="absolute top-[25%] left-[10%] w-3 h-3 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[25%] left-[40%] w-3 h-3 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[75%] left-[60%] w-3 h-3 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[75%] left-[90%] w-3 h-3 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[50%] left-[15%] w-2 h-2 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[50%] left-[35%] w-2 h-2 bg-[#FCCE00] rounded-full" />

        {/* 角ばった装飾 */}
        <div className="absolute top-[15%] right-[15%] w-32 h-32 border-2 border-[#FCCE00]">
          <div className="absolute top-2 left-2 w-8 h-8 border border-[#FCCE00]" />
          <div className="absolute bottom-2 right-2 w-12 h-12 border border-[#FCCE00]" />
        </div>

        <div className="absolute bottom-[20%] left-[10%] w-40 h-40 border-2 border-[#FCCE00]">
          <div className="absolute top-3 right-3 w-10 h-10 border border-[#FCCE00]" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border border-[#FCCE00]" />
        </div>
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[8rem] md:text-[10rem] tracking-tight px-8 text-center leading-tight">
        デジタルの<br />
        <span className="text-[#FCCE00]">得意分野</span>
      </h1>
    </section>
  );
}
