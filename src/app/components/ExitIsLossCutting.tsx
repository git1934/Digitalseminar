export function ExitIsLossCutting() {
  return (
    <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center bg-black">
      
      {/* 幾何学ライン背景 - 斜線パターン */}
      <div className="absolute inset-0 opacity-10">
        {/* 斜線パターン - 左上から右下 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="20%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="20%" y1="0" x2="40%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="40%" y1="0" x2="60%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="60%" y1="0" x2="80%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="80%" y1="0" x2="100%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
          </svg>
        </div>
        
        {/* 斜線パターン - 右上から左下 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="100%" y1="0" x2="80%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="80%" y1="0" x2="60%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="60%" y1="0" x2="40%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="40%" y1="0" x2="20%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
            <line x1="20%" y1="0" x2="0" y2="100%" stroke="#FCCE00" strokeWidth="1" />
          </svg>
        </div>

        {/* 平行な横線 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#FCCE00" strokeWidth="0.5" />
            <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#FCCE00" strokeWidth="0.5" />
            <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#FCCE00" strokeWidth="0.5" />
            <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#FCCE00" strokeWidth="0.5" />
          </svg>
        </div>

        {/* 四隅の三角形 */}
        <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-[#FCCE00]" />
      </div>

      {/* メインテキスト */}
      <div className="relative z-10 w-full px-4 md:px-10">
        <h1 className="
          text-[10vw] md:text-[12vw] 
          font-[1000] 
          text-white 
          text-center 
          leading-none 
          tracking-[-0.05em] 
          whitespace-nowrap
        ">
          撤退<span className="text-[#FCCE00]"> ＝ </span>損切
        </h1>
      </div>
    </section>
  );
}