export function CommonEnemySlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">

      {/* ===== 背景透かしタイポ ===== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-red-500/10 font-black text-[13rem] md:text-[17rem] tracking-tight select-none text-center leading-none">
          COMMON<br />ENEMY
        </span>
      </div>

      {/* ===== 背景装飾（左右から中央へ収束） ===== */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">

        {/* 左側：収束ライン */}
        <svg className="absolute left-0 top-0 h-full w-1/2" xmlns="http://www.w3.org/2000/svg">
          <line x1="0%" y1="10%" x2="100%" y2="50%" stroke="#FCCE00" strokeWidth="2" />
          <line x1="0%" y1="30%" x2="100%" y2="50%" stroke="#FCCE00" strokeWidth="1.5" />
          <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#FCCE00" strokeWidth="2" />
          <line x1="0%" y1="70%" x2="100%" y2="50%" stroke="#FCCE00" strokeWidth="1.5" />
          <line x1="0%" y1="90%" x2="100%" y2="50%" stroke="#FCCE00" strokeWidth="2" />
        </svg>

        {/* 右側：収束ライン */}
        <svg className="absolute right-0 top-0 h-full w-1/2" xmlns="http://www.w3.org/2000/svg">
          <line x1="100%" y1="10%" x2="0%" y2="50%" stroke="#FCCE00" strokeWidth="2" />
          <line x1="100%" y1="30%" x2="0%" y2="50%" stroke="#FCCE00" strokeWidth="1.5" />
          <line x1="100%" y1="50%" x2="0%" y2="50%" stroke="#FCCE00" strokeWidth="2" />
          <line x1="100%" y1="70%" x2="0%" y2="50%" stroke="#FCCE00" strokeWidth="1.5" />
          <line x1="100%" y1="90%" x2="0%" y2="50%" stroke="#FCCE00" strokeWidth="2" />
        </svg>

        {/* 中央の衝突点 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FCCE00] rounded-full" />

        {/* 外枠装飾 */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#FCCE00]" />

      </div>

      {/* ===== メインテキスト ===== */}
      <h1 className="relative z-10 text-white font-black text-[8rem] md:text-[10rem] tracking-tight text-center">
        共通の敵を作る
      </h1>

    </section>
  );
}
