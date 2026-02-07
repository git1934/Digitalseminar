export function WisdomBattleSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景の幾何学模様（脳・思考パターン） */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        {/* 神経回路風のネットワークライン */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 中心から放射状のネットワーク */}
            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#FCCE00" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#FCCE00" strokeWidth="1.5" />
            
            {/* 二次ネットワーク接続 */}
            <line x1="20%" y1="20%" x2="35%" y2="15%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="80%" y1="20%" x2="65%" y2="15%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="20%" y1="80%" x2="35%" y2="85%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="80%" y1="80%" x2="65%" y2="85%" stroke="#FCCE00" strokeWidth="1" />
            
            {/* クロス接続 */}
            <line x1="20%" y1="20%" x2="50%" y2="10%" stroke="#FCCE00" strokeWidth="0.8" />
            <line x1="80%" y1="20%" x2="50%" y2="10%" stroke="#FCCE00" strokeWidth="0.8" />
            <line x1="10%" y1="50%" x2="20%" y2="20%" stroke="#FCCE00" strokeWidth="0.8" />
            <line x1="90%" y1="50%" x2="80%" y2="20%" stroke="#FCCE00" strokeWidth="0.8" />
          </svg>
        </div>

        {/* ノード（シナプス）を表す円 */}
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

        {/* 脳の半球を表す大きな円弧 */}
        <div className="absolute top-1/2 left-[25%] -translate-y-1/2">
          <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M 150 50 Q 50 50, 50 200 Q 50 350, 150 350"
              fill="none"
              stroke="#FCCE00"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="absolute top-1/2 right-[25%] -translate-y-1/2">
          <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M 150 50 Q 250 50, 250 200 Q 250 350, 150 350"
              fill="none"
              stroke="#FCCE00"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* 対戦を表す対向する矢印 */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2">
          <svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
            <polyline points="20,40 80,40 70,30" fill="none" stroke="#FCCE00" strokeWidth="2" />
            <polyline points="20,40 80,40 70,50" fill="none" stroke="#FCCE00" strokeWidth="2" />
          </svg>
        </div>

        <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 rotate-180">
          <svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
            <polyline points="20,40 80,40 70,30" fill="none" stroke="#FCCE00" strokeWidth="2" />
            <polyline points="20,40 80,40 70,50" fill="none" stroke="#FCCE00" strokeWidth="2" />
          </svg>
        </div>

        {/* パズルのピース風の図形 */}
        <div className="absolute top-[15%] left-[15%] w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M 10 10 L 90 10 L 90 90 L 10 90 Z"
              fill="none"
              stroke="#FCCE00"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="10" r="8" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="absolute bottom-[15%] right-[15%] w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M 10 10 L 90 10 L 90 90 L 10 90 Z"
              fill="none"
              stroke="#FCCE00"
              strokeWidth="1.5"
            />
            <circle cx="90" cy="50" r="8" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 四隅の装飾 */}
        <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-[#FCCE00]" />

      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[10rem] md:text-[12rem] tracking-tight">
        知恵の勝負
      </h1>
    </section>
  );
}
