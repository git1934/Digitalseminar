import { ImageWithFallback } from "./figma/ImageWithFallback";

export function N() {
  return (
    <section className="h-screen w-screen bg-white flex items-center justify-center overflow-hidden relative">
      {/* 画像表示 */}
      <div className="w-full h-full flex items-center justify-center p-8">
        <ImageWithFallback
          src="https://raw.githubusercontent.com/git1934/seminar_image/main/N2.png"
          alt="Newspaper"
          className="max-w-full 
          max-h-full 
          object-contain "
        />
      </div>
    </section>
  );
}
