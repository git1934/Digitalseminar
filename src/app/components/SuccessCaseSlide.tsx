export function SuccessCaseSlide() {
  return (
    <section className="h-screen w-screen bg-black overflow-hidden relative">

      {/* 背景ワード①：デジタルツール（黄色：一番濃い） */}
      <h2
        className="
          absolute
          top-[48%] left-[48%]
          -translate-x-1/2 -translate-y-1/2
          text-[170px] md:text-[200px]
          font-black
          text-[#FCCE00]/35
          tracking-widest
          select-none
          whitespace-nowrap
          z-0
        "
      >
        便利ツール
      </h2>

      {/* 背景ワード②：生成AI（白：一番薄い） */}
      <h2
        className="
          absolute
          top-[70%] left-[55%]
          -translate-x-1/2 -translate-y-1/2
          text-[160px] md:text-[210px]
          font-black
          text-white/58
          tracking-widest
          select-none
          whitespace-nowrap
          z-0
        "
      >
        生成AI
      </h2>

      {/* 背景ワード③：成功事例（白：中間の濃さ） */}
      <h1
        className="
          absolute
          top-[25%] left-[42%]
          -translate-x-1/2 -translate-y-1/2
          text-[180px] md:text-[230px]
          font-black
          text-white/28
          tracking-wider
          select-none
          whitespace-nowrap
          z-0
        "
      >
        成功事例
      </h1>

    </section>
  );
}
