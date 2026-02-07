import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewspaperSlide() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* 画像表示 */}
      <div className="w-full h-full flex items-center justify-center p-8">
        <ImageWithFallback
          src="https://raw.githubusercontent.com/git1934/seminar_image/main/npaper.png"
          alt="Newspaper"
          className="max-w-full 
          max-h-full 
          object-contain 
          border-[30px] border-white"
        />
      </div>
    </section>
  );
}
