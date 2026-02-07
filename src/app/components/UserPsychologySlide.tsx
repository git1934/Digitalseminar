export function UserPsychologySlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景の幾何学模様（視線・感情・揺らぎ） */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">

        {/* 視線を表す放射ライン */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${50 + Math.cos((i * 30 * Math.PI) / 180) * 60}%`}
                y2={`${50 + Math.sin((i * 30 * Math.PI) / 180) * 60}%`}
                stroke="#FCCE00"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        {/* 同心円（内面・思考の層） */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="700" height="700" xmlns="http://www.w3.org/2000/svg">
            <circle cx="350" cy="350" r="300" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
            <circle cx="350" cy="350" r="220" fill="none" stroke="#FCCE00" strokeWidth="1" />
            <circle cx="350" cy="350" r="140" fill="none" stroke="#FCCE00" strokeWidth="0.8" />
          </svg>
        </div>

        {/* 揺れる判断を表すジグザグ線 */}
        <div className="absolute top-[20%] left-[15%]">
          <svg width="240" height="120" xmlns="http://www.w3.org/2000/svg">
            <polyline
              points="0,60 40,40 80,70 120,35 160,65 200,45"
              fill="none"
              stroke="#FCCE00"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="absolute bottom-[20%] right-[15%]">
          <svg width="240" height="120" xmlns="http://www.w3.org/2000/svg">
            <polyline
              points="0,50 40,65 80,45 120,75 160,40 200,60"
              fill="none"
              stroke="#FCCE00"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* 思考の断片（点） */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...Array(20)].map((_, i) => (
              <circle
                key={i}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r="2"
                fill="#FCCE00"
              />
            ))}
          </svg>
        </div>

        {/* 四隅のフレーム */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#FCCE00]" />
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[10rem] md:text-[12rem] tracking-tight">
        ユーザー心理
      </h1>
    </section>
  );
}
