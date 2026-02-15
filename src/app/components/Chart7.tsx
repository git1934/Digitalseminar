import { useState } from "react";

export function Chart7() {
  const [loading, setLoading] = useState(true);

  return (
    <section className="h-screen w-screen bg-black flex flex-col overflow-hidden relative">
      
      {/* タイトル */}
      <header className="flex items-center justify-center py-8 z-10">
        <h1 className="text-6xl font-extrabold text-white">
          回答者数
        </h1>
      </header>

      {/* ===== ローディング演出 ===== */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50">
          
          <div className="w-20 h-20 border-4 border-white/20 border-t-[#FCCE00] rounded-full animate-spin mb-8" />

          <p className="text-2xl font-bold text-white tracking-wide animate-pulse">
            データを読み込み中...
          </p>

          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FCCE00]/30 overflow-hidden">
            <div className="w-1/3 h-full bg-[#FCCE00] animate-loadingBar" />
          </div>
        </div>
      )}

      {/* ===== グラフ ===== */}
      <div className="flex-1 flex items-center justify-center px-16 pb-12">
        <div className="relative w-full h-full max-w-5xl bg-white rounded-2xl shadow-xl">
          
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRmsITImrRvgjWHzby1xJkBUurl2k-qj9shRaxJFilABiZm0IssaZJs5SiOL_IRa2AQVhgGz2Btthqo/pubchart?oid=1364822955&format=interactive"
            className="absolute inset-0 m-auto w-[700px] h-[450px]"
            frameBorder="0"
            scrolling="no"
            onLoad={() => setLoading(false)}
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
