import { useMemo, useEffect, useState } from "react";
import starSvg from "@/imports/star.svg";

export function Survey() {
  const qrUrl =
    "https://raw.githubusercontent.com/git1934/seminar_image/17342a09132c2553a8f3cf4bbc09198de6178517/qrcode_docs.google.com.png";

  const [isAnimating, setIsAnimating] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    // 5秒後にアニメーション開始
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 5000);

    // 30秒後に完全停止
    const stopTimer = setTimeout(() => {
      setIsAnimating(false);
      setIsStopped(true);
    }, 30000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(stopTimer);
    };
  }, []);

  const stars = useMemo(() => {
    const STAR_COUNT = 35;

    const colors = [
      { filter: "brightness(1) saturate(2) sepia(1) hue-rotate(10deg)" },   // yellow
      { filter: "grayscale(1) brightness(1.5)" },                          // gray
      { filter: "brightness(3) saturate(0)" },                              // white
      { filter: "brightness(1) saturate(2) sepia(1) hue-rotate(190deg)" },  // blue
    ];

    return Array.from({ length: STAR_COUNT }).map((_, i) => {
      const size = Math.random() * 40 + 20;
      const top = Math.random() * 100;
      const left = Math.random() * 100;

      const duration = Math.random() * 20 + 20;
      const delay = Math.random() * 5;

      const translateX = (Math.random() - 0.5) * 400;
      const translateY = (Math.random() - 0.5) * 400;

      const rotate = Math.random() * 720 - 360;
      const scaleMid = Math.random() * 0.8 + 0.6;

      const color = colors[Math.floor(Math.random() * colors.length)];

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
        scaleMid,
        filter: color.filter,
      };
    });
  }, []);

  return (
    <section className="relative h-screen w-screen bg-black flex items-center justify-center px-6 overflow-hidden">
      
      {/* ⭐ 背景スター */}
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
              filter: star.filter,
              animation:
                isAnimating && !isStopped
                  ? `moveStar-${star.id} ${star.duration}s ease-in-out infinite`
                  : "none",
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

      {/* ⭐ 動的キーフレーム */}
      <style>
        {stars
          .map(
            (star) => `
            @keyframes moveStar-${star.id} {
              0% {
                transform: translate(0px, 0px) rotate(0deg) scale(1);
              }
              50% {
                transform: translate(${star.translateX}px, ${star.translateY}px)
                           rotate(${star.rotate}deg)
                           scale(${star.scaleMid});
              }
              100% {
                transform: translate(0px, 0px)
                           rotate(${star.rotate * 2}deg)
                           scale(1);
              }
            }
          `
          )
          .join("\n")}
      </style>
    </section>
  );
}