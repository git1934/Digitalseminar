export function DramaticPause() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景①：斜めストライプ（違いを出す） */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={`${i * 10}%`}
              y1="0"
              x2={`${i * 10 - 40}%`}
              y2="100%"
              stroke="#FCCE00"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* 背景②：右上のリング装飾 */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full border border-[#FCCE00]/30" />
      <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full border border-[#FCCE00]/20" />

      {/* 背景③：下側に奥行きの黄色面 */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[40%]
          bg-gradient-to-tr
          from-[#FCCE00]/10
          via-transparent
          to-transparent
        "
      />

      {/* メインテキスト */}
      <h1 className="text-7xl md:text-8xl lg:text-9xl 
                     font-black text-white text-center 
                     tracking-wider px-8 relative z-10">
        ではどうしたらいいのか？
      </h1>
    </section>
  );
}
