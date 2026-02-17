import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewspaperSlide() {
  const [loading, setLoading] = useState(true);

  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">

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

      {/* 画像表示 */}
      <div className="w-full h-full flex items-center justify-center p-8 mb-10">
        <ImageWithFallback
          src="https://raw.githubusercontent.com/git1934/seminar_image/main/npaper.png"
          alt="Newspaper"
          onLoad={() => setLoading(false)}
          className={`max-w-full 
            max-h-full 
            object-contain 
            border-[30px] border-white
            transition-opacity duration-700
            ${loading ? "opacity-0" : "opacity-100"}
          `}
        />
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
