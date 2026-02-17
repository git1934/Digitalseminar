export function CostEffectivenessSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景の幾何学模様（天秤 × グラフモチーフ） */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* グラフ風の上昇線 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 右上がりの階段状グラフ */}
            <polyline 
              points="10,90 20,85 20,75 30,75 30,65 40,65 40,50 50,50 50,35 60,35 60,20 70,20 70,10"
              fill="none"
              stroke="#FCCE00"
              strokeWidth="2"
            />
            {/* 補助グリッド線 */}
            <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#FCCE00" strokeWidth="0.5" strokeDasharray="3,3" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#FCCE00" strokeWidth="0.5" strokeDasharray="3,3" />
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#FCCE00" strokeWidth="0.5" strokeDasharray="3,3" />
          </svg>
        </div>

        {/* 天秤の左右バランスを表す図形 */}
        <div className="absolute top-[20%] left-[15%]">
          <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
            {/* 左側の皿 */}
            <line x1="30" y1="50" x2="70" y2="50" stroke="#FCCE00" strokeWidth="2" />
            <line x1="50" y1="20" x2="50" y2="50" stroke="#FCCE00" strokeWidth="1.5" />
            {/* 支点 */}
            <circle cx="50" cy="20" r="4" fill="#FCCE00" />
          </svg>
        </div>

        <div className="absolute top-[20%] right-[15%]">
          <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
            {/* 右側の皿 */}
            <line x1="30" y1="50" x2="70" y2="50" stroke="#FCCE00" strokeWidth="2" />
            <line x1="50" y1="20" x2="50" y2="50" stroke="#FCCE00" strokeWidth="1.5" />
            {/* 支点 */}
            <circle cx="50" cy="20" r="4" fill="#FCCE00" />
          </svg>
        </div>

        {/* 棒グラフ風のパターン */}
        <div className="absolute bottom-[15%] left-[20%]">
          <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="90" width="30" height="60" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
            <rect x="60" y="60" width="30" height="90" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
            <rect x="100" y="40" width="30" height="110" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          </svg>
        </div>

        {/* コイン/円を表す同心円 */}
        <div className="absolute bottom-[20%] right-[20%]">
          <svg width="180" height="180" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="90" r="70" fill="none" stroke="#FCCE00" strokeWidth="2" />
            <circle cx="90" cy="90" r="50" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
            <circle cx="90" cy="90" r="30" fill="none" stroke="#FCCE00" strokeWidth="1" />
            {/* ¥記号風の線 */}
            <line x1="70" y1="75" x2="110" y2="75" stroke="#FCCE00" strokeWidth="1" />
            <line x1="70" y1="85" x2="110" y2="85" stroke="#FCCE00" strokeWidth="1" />
          </svg>
        </div>

        {/* 矢印（費用から効果へ） */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="50" x2="300" y2="50" stroke="#FCCE00" strokeWidth="2" />
            <polyline points="280,35 300,50 280,65" fill="none" stroke="#FCCE00" strokeWidth="2" />
          </svg>
        </div>

        {/* 数値的な格子パターン */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...Array(8)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={`${(i + 1) * 12}%`}
                y1="0"
                x2={`${(i + 1) * 12}%`}
                y2="100%"
                stroke="#FCCE00"
                strokeWidth="0.3"
              />
            ))}
          </svg>
        </div>

        {/* 四隅の装飾 - 直角定規風 */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#FCCE00]" />

      </div>

      {/* メインテキスト */}
      <div className="relative z-10 flex items-center gap-12 font-black tracking-tight">
        <span className="text-white text-[7rem] md:text-[12rem]">
          費用
        </span>

        <span className="text-[#FCCE00] text-[5rem] md:text-[6rem]">
          vs
        </span>

        <span className="text-white text-[7rem] md:text-[12rem]">
          効果
        </span>
      </div>
    </section>
  );
}
