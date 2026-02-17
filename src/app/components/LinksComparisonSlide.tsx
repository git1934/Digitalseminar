import { useState } from "react";

export function LinksComparisonSlide() {
  const [loadedCount, setLoadedCount] = useState(0);
  const loading = loadedCount < 2; // 画像2枚なので

  const handleLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden">
      
      {/* ===== ローディング演出 ===== */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50">
          
          {/* 回転スピナー */}
          <div className="w-20 h-20 border-4 border-white/20 border-t-[#FCCE00] rounded-full animate-spin mb-8" />

          {/* Loadingテキスト */}
          <p className="text-2xl font-bold text-white tracking-wide animate-pulse">
            データを読み込み中...
          </p>

          {/* 下部に流れる黄色ライン */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FCCE00]/30 overflow-hidden">
            <div className="w-1/3 h-full bg-[#FCCE00] animate-loadingBar" />
          </div>
        </div>
      )}

      {/* コンテンツ本体 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-[12vh] pb-[25vh] px-6">
        
        {/* タイトル */}
        <div className="text-white text-center mb-16 leading-tight">
          <h1 className="text-5xl md:text-6xl font-black tracking-wide">
            共創ラボ <span className="text-[#FCCE00]">LINKSPARK</span>
          </h1>
        </div>

        {/* 画像エリア */}
        <div className="flex items-center justify-center gap-24 max-w-[90vw]">
          
          <img
            src="https://raw.githubusercontent.com/git1934/seminar_image/main/linkslp.png"
            alt="Links"
            onLoad={handleLoad}
            className={`h-[55vh] w-auto object-contain transition-opacity duration-700 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />

          <img
            src="https://raw.githubusercontent.com/git1934/seminar_image/main/links_hub.png"
            alt="Links Hub"
            onLoad={handleLoad}
            className={`h-[55vh] w-auto object-contain transition-opacity duration-700 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />

        </div>
      </div>

      {/* ===== Animation定義 ===== */}
      <style>
        {`
          @keyframes loadingBar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }

          .animate-loadingBar {
            animation: loadingBar 1.2s infinite linear;
          }
        `}
      </style>
    </section>
  );
}
