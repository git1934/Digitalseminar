import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Chart2ImageSlide() {
  const [loading, setLoading] = useState(true);

  return (
    <section className="h-screen w-screen bg-black overflow-hidden relative px-8 pt-8 pb-28">

      {/* メイン画像エリア */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">

        {/* ローディング表示 */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 border-4 border-white/20 border-t-[#FCCE00] rounded-full animate-spin mb-6" />
            <p className="text-white text-xl tracking-wide animate-pulse">
              データを読み込み中...
            </p>
          </div>
        )}

        <ImageWithFallback
          src="https://raw.githubusercontent.com/git1934/seminar_image/main/chart2.png"
          alt="Chart2"
          onLoad={() => setLoading(false)}
          className={`
            max-w-full
            max-h-full
            object-contain
            border-[30px]
            border-white
            rounded-[24px]
            transition-opacity duration-500
            ${loading ? 'opacity-0' : 'opacity-100'}
          `}
        />
      </div>

      {/* 出典（右下） */}
      <div className="absolute bottom-10 right-10 text-right">
        <p className="text-white/50 leading-snug">
          出典：
          <a
            href="https://www.digital.go.jp/resources/govdashboard/dx-attitude-survey"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            デジタル庁<br />
            政策ダッシュボード
          </a>
        </p>
      </div>
    </section>
  );
}
