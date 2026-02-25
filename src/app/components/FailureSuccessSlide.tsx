export function FailureSuccessSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* ===== 背景透かしタイポ ===== */}
      <div className="absolute top-10 flex items-center justify-center pointer-events-none">
        <span className="text-green-500/10 font-black text-[14rem] md:text-[18rem] tracking-tight select-none">
          FEEDBACK
        </span>
      </div>

      {/* ===== 背景：崩れ → 再構築 → 広がり ===== */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">

          {/* 下部：崩れたライン（失敗） */}
          <polyline
            points="0,700 200,650 350,720 500,630 700,710 900,640 1200,700"
            fill="none"
            stroke="#FCCE00"
            strokeWidth="1.5"
          />

          {/* 中央：再構築ブロック */}
          <rect x="45%" y="45%" width="120" height="120" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          <rect x="48%" y="40%" width="100" height="100" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          <rect x="50%" y="35%" width="80" height="80" fill="none" stroke="#FCCE00" strokeWidth="1.5" />

          {/* 上部：成功への放射 */}
          <line x1="50%" y1="30%" x2="50%" y2="5%" stroke="#FCCE00" strokeWidth="1.5" />
          <line x1="50%" y1="30%" x2="25%" y2="10%" stroke="#FCCE00" strokeWidth="1.5" />
          <line x1="50%" y1="30%" x2="75%" y2="10%" stroke="#FCCE00" strokeWidth="1.5" />
          <line x1="50%" y1="30%" x2="10%" y2="25%" stroke="#FCCE00" strokeWidth="1.5" />
          <line x1="50%" y1="30%" x2="90%" y2="25%" stroke="#FCCE00" strokeWidth="1.5" />

          {/* 成長の軌跡 */}
          <path
            d="M 200 600 Q 600 400, 1000 600"
            fill="none"
            stroke="#FCCE00"
            strokeWidth="1.5"
          />

        </svg>

        {/* 四隅装飾 */}
        <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-[#FCCE00]" />

      </div>

      {/* ===== メインテキスト ===== */}
      <h1 className="relative z-10 text-white font-black text-[6rem] md:text-[6rem] tracking-tight">
        効率を高めるほど<br/>変化するのはむずかしくなる
      </h1>

    </section>
  );
}
