export function UserPsychologySlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景の幾何学模様（視線・感情・揺らぎ） */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* --- ここは変更なし --- */}
        {/*（省略：背景コードはそのまま）*/}
      </div>

      {/* メインテキスト */}
      <div className="relative z-10 text-center font-black tracking-tight">
        <div className="text-white text-[8rem] md:text-[10rem] leading-tight">
          プロセス主義
        </div>

        <div className="text-[#FCCE00] text-[5rem] md:text-[6rem] my-2">
          VS
        </div>

        <div className="text-white text-[8rem] md:text-[10rem] leading-tight">
          成果主義
        </div>
      </div>
    </section>
  );
}
