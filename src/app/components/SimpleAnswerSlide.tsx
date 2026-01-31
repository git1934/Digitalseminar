export function SimpleAnswerSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* 背景の幾何学模様 - 控えめな黄色ライン */}
      <div className="absolute inset-0 opacity-10">
        {/* 対角線 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#FCCE00" strokeWidth="1" />
          </svg>
        </div>
        
        {/* 円形の装飾 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#FCCE00] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#FCCE00] rounded-full" />
      </div>

      {/* メインテキスト */}
      <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white text-center tracking-wider px-8 relative z-10">
        分かりやすい答えが欲しい
      </h1>
    </section>
  );
}
