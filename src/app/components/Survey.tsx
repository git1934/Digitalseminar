import { useMemo } from "react";
import starSvg from "@/imports/star.svg";

export function Survey() {
  const qrUrl =
    "https://raw.githubusercontent.com/git1934/seminar_image/17342a09132c2553a8f3cf4bbc09198de6178517/qrcode_docs.google.com.png";

  // ⭐ スター生成（初回のみ）
  const stars = useMemo(() => {
    const STAR_COUNT = 25;

    return Array.from({ length: STAR_COUNT }).map((_, i) => {
      const size = Math.random() * 40 + 20; // 20〜60px
      const top = Math.random() * 100;
      const left = Math.random() * 100;

      const duration = Math.random() * 20 + 15; // 15〜35秒
      const delay = Math.random() * 10;

      const translateX = (Math.random() - 0.5) * 300; // -150〜150px
      const translateY = (Math.random() - 0.5) * 300;

      const rotate = Math.random() * 720 - 360; // -360〜360deg

      return {
        id: i,
        size,
        top,
        left,
        duration,
        delay,
        translateX,
        translateY,
        rotate,
      };
    });
  }, []);

  return (
    <section className="relative h-screen w-screen bg-black flex items-center justify-center px-6 overflow-hidden">

      {/* ⭐ ランダムスター背景 */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <img
            key={star.id}
            src={starSvg}
            alt=""
            className="absolute opacity-70"
            style={{
              width: star.size,
              height: star.size,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animation: `
                moveStar-${star.id} ${star.duration}s linear infinite
              `,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* QRコンテンツ */}
      <div className="text-center space-y-6 relative z-10">
        <div className="bg-white p-2 rounded-3xl shadow-2xl inline-block">
          <img
            src={qrUrl}
            alt="QR Code"
            className="w-100 h-100 md:w-[480px] md:h-[480px] object-contain"
          />
        </div>

        <div className="text-white leading-tight">
          <h1 className="text-6xl font-extrabold">
            アンケートのお願い
          </h1>
        </div>
      </div>

      {/* ⭐ 動的キーフレーム生成 */}
      <style>
        {stars
          .map(
            (star) => `
            @keyframes moveStar-${star.id} {
              0% {
                transform: translate(0px, 0px) rotate(0deg);
              }
              50% {
                transform: translate(${star.translateX}px, ${star.translateY}px)
                           rotate(${star.rotate}deg);
              }
              100% {
                transform: translate(0px, 0px) rotate(${star.rotate * 2}deg);
              }
            }
          `
          )
          .join("\n")}
      </style>
    </section>
  );
}
