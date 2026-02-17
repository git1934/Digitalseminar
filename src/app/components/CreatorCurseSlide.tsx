export function CreatorCurseSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景：歪んだ同心円＋絡みつくライン */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">

          {/* 歪んだ同心円（迷宮感） */}
          <ellipse cx="50%" cy="50%" rx="420" ry="280" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          <ellipse cx="50%" cy="50%" rx="350" ry="220" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          <ellipse cx="50%" cy="50%" rx="280" ry="170" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          <ellipse cx="50%" cy="50%" rx="210" ry="120" fill="none" stroke="#FCCE00" strokeWidth="1.5" />
          <ellipse cx="50%" cy="50%" rx="140" ry="80" fill="none" stroke="#FCCE00" strokeWidth="1.5" />

          {/* ねじれライン（思考の絡まり） */}
          <path
            d="M 0 200 Q 300 100, 600 200 T 1200 200"
            fill="none"
            stroke="#FCCE00"
            strokeWidth="1.5"
          />
          <path
            d="M 0 600 Q 400 500, 800 650 T 1400 600"
            fill="none"
            stroke="#FCCE00"
            strokeWidth="1.5"
          />

          {/* 斜めクロスライン（抜け出せない構造） */}
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#FCCE00" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#FCCE00" strokeWidth="1" />

        </svg>

        {/* 四隅の装飾 */}
        <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-[#FCCE00]" />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-[#FCCE00]" />

      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[10rem] md:text-[10rem] tracking-tight">
        クリエイターの呪い
      </h1>
    </section>
  );
}
