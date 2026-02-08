export function ComputerStrengthsSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景：コンピュータ的構造・処理ライン */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">

        {/* グリッド（演算・構造） */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(12)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i + 1) * 8}%`}
              y1="0"
              x2={`${(i + 1) * 8}%`}
              y2="100%"
              stroke="#FCCE00"
              strokeWidth="0.4"
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${(i + 1) * 12}%`}
              x2="100%"
              y2={`${(i + 1) * 12}%`}
              stroke="#FCCE00"
              strokeWidth="0.4"
            />
          ))}
        </svg>

        {/* 中央処理ライン */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="1000" height="200" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="100"
              y1="100"
              x2="900"
              y2="100"
              stroke="#FCCE00"
              strokeWidth="2"
            />
            <rect x="460" y="70" width="80" height="60" fill="none" stroke="#FCCE00" strokeWidth="2" />
          </svg>
        </div>

        {/* クロック（時間の正確さ） */}
        <div className="absolute top-[18%] right-[18%]">
          <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="60" fill="none" stroke="#FCCE00" strokeWidth="2" />
            <line x1="80" y1="80" x2="80" y2="35" stroke="#FCCE00" strokeWidth="2" />
            <line x1="80" y1="80" x2="115" y2="80" stroke="#FCCE00" strokeWidth="2" />
          </svg>
        </div>

        {/* 処理ブロック群 */}
        <div className="absolute bottom-[20%] left-[15%]">
          <svg width="260" height="120" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="40" width="60" height="40" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
            <rect x="100" y="40" width="60" height="40" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
            <rect x="190" y="40" width="60" height="40" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 四隅のUIフレーム */}
        <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-[#FCCE00]" />
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[8.5rem] md:text-[10.5rem] tracking-tight text-center leading-tight">
        コンピュータの<br />
        三大長所
      </h1>
    </section>
  );
}
