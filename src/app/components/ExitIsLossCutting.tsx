export function ExitIsLossCutting() {
  return (
    <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center bg-black">
      
      {/* 以前のセクションで作った「幾何学ライン背景」をここに配置するとさらに映えます */}

      <div className="relative z-10 w-full px-4 md:px-10">
        <h1 className="
          /* モバイルでは画面幅、デスクトップではさらに巨大に */
          text-[14vw] md:text-[15vw] 
          font-[1000] 
          text-white 
          text-center 
          leading-none 
          tracking-[-0.05em] 
          whitespace-nowrap
        ">
          撤退<span className="text-[#FCCE00]">＝</span>損切り
        </h1>
      </div>

    </section>
  );
}