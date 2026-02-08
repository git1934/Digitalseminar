import { ImageWithFallback } from './figma/ImageWithFallback';

export function ChartImageSlide() {
  return (
    <section className="h-screen w-screen bg-black overflow-hidden relative px-8 pt-8 pb-28">
      {/* 四隅のフレーム装飾 */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-[20px] border-t-[20px] border-[#FCCE00]" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r-[20px] border-t-[20px] border-[#FCCE00]" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l-[20px] border-b-[20px] border-[#FCCE00]" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-[20px] border-b-[20px] border-[#FCCE00]" />

      {/* メイン画像（最大表示） */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <ImageWithFallback
          src="https://raw.githubusercontent.com/git1934/seminar_image/main/chart.png"
          alt="Chart"
          className="
            max-w-full
            max-h-full
            object-contain
            border-[30px]
            border-white
            rounded-[24px]
          "
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
