export function POSExpertise() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-[#e1e1e1] px-16 py-16">
      
      {/* 右上装飾（中央画像より前・文字より後ろ） */}
      <img
        src="https://raw.githubusercontent.com/git1934/seminar_image/main/posd3.png"
        alt="装飾イメージ"
        className="absolute top-80 right-[60px] w-[600px] opacity-70 z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full text-center relative">
        
        {/* メインメッセージ（最前面） */}
        <div className="mb-20 relative z-20">
          <h1 className="text-6xl font-extrabold text-black mb-6 leading-tight">
            <span className="text-[#FCCE00] bg-black px-6 py-2 inline-block">
              POSデータ活用
            </span>
            で中小企業を支援
          </h1>
        </div>

        {/* 横長画像（右上装飾より背面） */}
        <div className="flex justify-center mb-20 relative z-0">
          <img
            src="https://raw.githubusercontent.com/git1934/seminar_image/main/posd.png"
            alt="POSデータ活用イメージ"
          className="w-full max-w-[1400px] object-contain drop-shadow-2xl scale-105"
          />
        </div>

      </div>
    </section>
  );
}
