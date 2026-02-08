export function ScaleOutSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景：スケールアウト（横展開・分散） */}
      <div className="absolute inset-0 pointer-events-none opacity-20">

        {/* 中央ノード */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="80" height="80" fill="none" stroke="#FCCE00" strokeWidth="3" />
          </svg>
        </div>

        {/* 左方向に増えるノード */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`left-${i}`}
            className="absolute top-1/2"
            style={{ left: `${45 - i * 10}%` }}
          >
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="60" height="60" fill="none" stroke="#FCCE00" strokeWidth="2" />
            </svg>
          </div>
        ))}

        {/* 右方向に増えるノード */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`right-${i}`}
            className="absolute top-1/2"
            style={{ left: `${55 + i * 10}%` }}
          >
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="60" height="60" fill="none" stroke="#FCCE00" strokeWidth="2" />
            </svg>
          </div>
        ))}

        {/* 接続ライン */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#FCCE00" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#FCCE00" strokeWidth="1" />
        </svg>

        {/* 四隅のシステムUIフレーム */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#FCCE00]" />
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[9rem] md:text-[11rem] tracking-tight">
        ビジネスの拡張性
      </h1>
    </section>
  );
}
