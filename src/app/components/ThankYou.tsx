import { useMemo } from "react";
import starSvg from "@/imports/star.svg";

export function ThankYou() {
  const stars = useMemo(() => {
    return [
      { move: "meteorMoveA" },
      { move: "meteorMoveB" },
      { move: "meteorMoveC" },
    ].map((star) => ({
      ...star,
      duration: 25 + Math.random() * 20, // 流れる速度
      rotationDuration: 40 + Math.random() * 60, // 回転速度
      delay: Math.random() * 5,
      size: 220 + Math.random() * 300,
      opacity: 0.2 + Math.random() * 0.6,
      direction: Math.random() > 0.5 ? "normal" : "reverse",
    }));
  }, []);

  return (
    <section className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      {/* ===== 流星3つ ===== */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: "-20%",
            left: star.move === "meteorMoveC" ? "120%" : "-20%",
            animation: `${star.move} ${star.duration}s linear infinite`,
            animationDelay: `${star.delay}s`,
          }}
        >
          {/* 回転専用ラッパー（transform競合回避） */}
          <div
            style={{
              animation: `spin ${star.rotationDuration}s linear infinite`,
              animationDirection: star.direction,
            }}
          >
            <img
              src={starSvg}
              alt=""
              style={{
                width: star.size,
                height: star.size,
                opacity: star.opacity,
              }}
            />
          </div>
        </div>
      ))}

      {/* ===== 背景巨大英語 ===== */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-[180px] md:text-[240px] font-black tracking-tight 
                       select-none leading-tight text-center"
        >
          <span className="word word1">THANK</span>{" "}
          <span className="word word2">YOU</span>
          <br />
          <span className="word word3">SO</span>{" "}
          <span className="word word4">MUCH</span>
        </h2>
      </div>

      {/* ===== 前面日本語 ===== */}
      <div className="relative z-10 text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-white tracking-wide">
          ありがとうございました
        </h1>
      </div>

      {/* ===== CSS ===== */}
      <style jsx>{`
        /* ========================= */
        /* 流星移動アニメーション */
        /* ========================= */

        @keyframes meteorMoveA {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(120vw, 120vh);
          }
        }

        @keyframes meteorMoveB {
          from {
            transform: translate(0, 10vh);
          }
          to {
            transform: translate(120vw, 100vh);
          }
        }

        @keyframes meteorMoveC {
          from {
            transform: translate(10, 0);
          }
          to {
            transform: translate(100vw, 140vh);
          }
        }

        /* 回転 */
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* ========================= */
        /* THANK YOU 発光（blur無し） */
        /* ========================= */

        .word {
          display: inline-block;
          color: rgba(255, 255, 255, 0.08);
          animation-name: glow;
          animation-duration: 8s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .word1 {
          animation-delay: 0s;
        }
        .word2 {
          animation-delay: 1.8s;
        }
        .word3 {
          animation-delay: 3.6s;
        }
        .word4 {
          animation-delay: 5.4s;
        }

       @keyframes glow {

  0%   { color: rgba(255, 255, 255, 0.07); }
  20%  { color: rgba(255, 255, 255, 0.07); }

  40%  { color: rgba(252, 206, 0, 0.5); }

  60%  { color: rgba(255, 255, 255, 0.3); }

  80%  { color: rgba(255, 255, 255, 0.07); }
  100% { color: rgba(255, 255, 255, 0.07); }
}
        }
      `}</style>
    </section>
  );
}