export function LinksComparisonSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* メインコンテンツエリア - 下部に25%の余白を確保 */}
      <div className="absolute inset-0 flex items-center justify-center pb-[25vh]">
        <div className="flex items-center justify-center gap-24 max-w-[90vw]">
          {/* 左側画像 */}
          <div className="flex-shrink-0">
            <img
              src="https://raw.githubusercontent.com/git1934/seminar_image/main/linkslp.png"
              alt="Links"
              className="h-[55vh] w-auto object-contain"
            />
          </div>

          {/* 右側画像 */}
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
