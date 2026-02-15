export function LinksComparisonSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden">
      
      {/* 上部に余白 + 下部25%余白 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-[12vh] pb-[25vh] px-6">
        
        {/* タイトル */}
        <div className="text-white text-center mb-16 leading-tight">
          <h1 className="text-5xl md:text-6xl font-black tracking-wide">
     共創ラボ <span className="text-[#FCCE00]">LINKSPARK</span>
          </h1>

        </div>

        {/* 画像エリア */}
        <div className="flex items-center justify-center gap-24 max-w-[90vw]">
          <div className="flex-shrink-0">
            <img
              src="https://raw.githubusercontent.com/git1934/seminar_image/main/linkslp.png"
              alt="Links"
              className="h-[55vh] w-auto object-contain"
            />
          </div>

          <div className="flex-shrink-0">
            <img
              src="https://raw.githubusercontent.com/git1934/seminar_image/main/links_hub.png"
              alt="Links Hub"
              className="h-[55vh] w-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
