import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ChartImageSlide() {
  const [loading, setLoading] = useState(true);

  return (
    <section className="h-screen w-screen bg-black overflow-hidden relative px-8 pt-8 pb-28">

      {/* メイン画像エリア */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">

        {/* ローディング表示 */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}

        <ImageWithFallback
          src="https://raw.githubusercontent.com/git1934/seminar_image/main/chart.png"
          alt="Chart"
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
            href="https://www.datascientist.or.jp/dssjournal/dssjournal-4866/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            データサイエンティスト協会<br />
            DSSジャーナル
          </a>
        </p>
      </div>
    </section>
  );
}
