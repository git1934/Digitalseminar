export function ExperientialSeminarSlide() {
  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* 背景ライン（薄く動く） */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#FCCE00] animate-[slideX_6s_linear_infinite]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#FCCE00] animate-[slideY_6s_linear_infinite]" />
      </div>

      {/* メインテキスト */}
      <div className="relative z-10 text-center px-16">
        <h1 className="text-[#FCCE00] font-black text-[9rem] md:text-[11rem] tracking-tight leading-none">
          体験型
          <br />
          セミナー
        </h1>

        {/* サブコピー */}
        <p className="mt-12 text-3xl text-white/70 font-bold tracking-wide">
          聞くだけでは、終わらせない
        </p>
      </div>

      <style>{`
        @keyframes slideX {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes slideY {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
