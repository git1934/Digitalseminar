export function WisdomBattleSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* ===== 背景透かしタイポ ===== */}
      <div className="absolute top-5 flex items-center justify-center pointer-events-none">
        <span className="text-blue-500/10 font-black text-[15rem] md:text-[20rem] tracking-tight select-none">
          INSIGHT
        </span>
      </div>

      {/* ===== 背景幾何：思考ネットワーク ===== */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* 神経回路風ネットワーク */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#FCCE00" strokeWidth="1.5" />

            <line x1="20%" y1="20%" x2="35%" y2="15%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="80%" y1="20%" x2="65%" y2="15%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="20%" y1="80%" x2="35%" y2="85%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="80%" y1="80%" x2="65%" y2="85%" stroke="#FCCE00" strokeWidth="1" />

            <line x1="20%" y1="20%" x2="50%" y2="10%" stroke="#FCCE00" strokeWidth="0.8" />
            <line x1="80%" y1="20%" x2="50%" y2="10%" stroke="#FCCE00" strokeWidth="0.8" />
            <line x1="10%" y1="50%" x2="20%" y2="20%" stroke="#FCCE00" strokeWidth="0.8" />
            <line x1="90%" y1="50%" x2="80%" y2="20%" stroke="#FCCE00" strokeWidth="0.8" />
          </svg>
        </div>

        {/* ノード（シナプス） */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[20%] left-[20%] w-4 h-4 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[20%] left-[80%] w-4 h-4 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[80%] left-[20%] w-4 h-4 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[80%] left-[80%] w-4 h-4 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[10%] left-[50%] w-3 h-3 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[90%] left-[50%] w-3 h-3 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[50%] left-[10%] w-3 h-3 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[50%] left-[90%] w-3 h-3 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[35%] left-[15%] w-2 h-2 bg-[#FCCE00] rounded-full" />
        <div className="absolute top-[65%] left-[85%] w-2 h-2 bg-[#FCCE00] rounded-full" />

        {/* 半球アーチ */}
        <div className="absolute top-1/2 left-[25%] -translate-y-1/2">
          <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M 150 50 Q 50 50, 50 200 Q 50 350, 150 350" fill="none" stroke="#FCCE00" strokeWidth="2" />
          </svg>
        </div>

        <div className="absolute top-1/2 right-[25%] -translate-y-1/2">
          <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M 150 50 Q 250 50, 250 200 Q 250 350, 150 350" fill="none" stroke="#FCCE00" strokeWidth="2" />
          </svg>
        </div>

        {/* 四隅装飾 */}
        <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-[#FCCE00]" />

      </div>

      {/* ===== メインテキスト ===== */}
      <h1 className="relative z-10 text-white font-black text-[10rem] md:text-[12rem] tracking-tight">
        知恵の勝負
      </h1>

    </section>
  );
}
