import { useMemo } from "react";

export function KeyMessage() {
  const baseLines = [
    { style: "top-[10%] left-[-10%] rotate-[15deg] w-[3500px] h-[10px]", color: "#FCCE00" },
    { style: "top-[40%] left-[-20%] rotate-[5deg] w-[3500px] h-[2px]", color: "#FCCE00" },
    { style: "bottom-[20%] left-[-15%] -rotate-[14deg] w-[3500px] h-[30px]", color: "#FCCE00" },
    { style: "top-[20%] right-[-10%] -rotate-[23deg] w-[3500px] h-[10px]", color: "#FCCE00" },
    { style: "bottom-[14%] right-[-52%] -rotate-[12deg] w-[3500px] h-[2px]", color: "#FCCE00" },
    { style: "top-[15%] right-[-25%] -rotate-[23deg] w-[3500px] h-[8px]", color: "#FCCE00" },
    { style: "bottom-[18%] right-[-14%] -rotate-[5deg] w-[3500px] h-[2px]", color: "#FCCE00" },
    { style: "top-[30%] left-[-16%] rotate-[148deg] w-[4000px] h-[30px]", color: "#FCCE00" },
    { style: "bottom-[40%] right-[-20%] -rotate-[5deg] w-[3500px] h-[2px]", color: "#FCCE00" },
    { style: "top-[50%] left-[-10%] rotate-[175deg] w-[4000px] h-[10px]", color: "#FCCE00" },
    { style: "top-[25%] left-[-15%] rotate-[18deg] w-[3500px] h-[8px]", color: "#0072BC" },
    { style: "top-[55%] left-[-18%] rotate-[8deg] w-[3500px] h-[10px]", color: "#0072BC" },
    { style: "bottom-[30%] left-[-12%] -rotate-[10deg] w-[3500px] h-[2px]", color: "#0072BC" },
    { style: "top-[35%] right-[-15%] -rotate-[20deg] w-[3500px] h-[30px]", color: "#0072BC" },
    { style: "bottom-[25%] right-[-45%] -rotate-[15deg] w-[3500px] h-[8px]", color: "#0072BC" },
    { style: "top-[45%] right-[-30%] -rotate-[18deg] w-[3500px] h-[10px]", color: "#0072BC" },
    { style: "bottom-[35%] right-[-18%] -rotate-[8deg] w-[3500px] h-[2px]", color: "#0072BC" },
    { style: "top-[60%] left-[-20%] rotate-[155deg] w-[4000px] h-[50px]", color: "#0072BC" },
    { style: "bottom-[45%] right-[-25%] -rotate-[7deg] w-[3500px] h-[8px]", color: "#0072BC" },
    { style: "top-[70%] left-[-12%] rotate-[170deg] w-[4000px] h-[10px]", color: "#0072BC" },
    { style: "top-[5%] left-[-8%] rotate-[12deg] w-[3500px] h-[10px]", color: "#FCCE00" },
    { style: "top-[65%] left-[-25%] rotate-[3deg] w-[3500px] h-[8px]", color: "#FCCE00" },
    { style: "bottom-[5%] left-[-18%] -rotate-[16deg] w-[3500px] h-[30px]", color: "#FCCE00" },
    { style: "top-[80%] right-[-12%] -rotate-[25deg] w-[3500px] h-[2px]", color: "#FCCE00" },
    { style: "bottom-[50%] right-[-48%] -rotate-[9deg] w-[3500px] h-[10px]", color: "#FCCE00" },
    { style: "top-[8%] left-[-22%] rotate-[20deg] w-[3500px] h-[10px]", color: "#0072BC" },
    { style: "bottom-[8%] left-[-10%] -rotate-[18deg] w-[3500px] h-[8px]", color: "#0072BC" },
    { style: "top-[35%] right-[-20%] -rotate-[22deg] w-[3500px] h-[50px]", color: "#0072BC" },
    { style: "bottom-[55%] right-[-35%] -rotate-[11deg] w-[3500px] h-[2px]", color: "#0072BC" },
    { style: "top-[85%] left-[-14%] rotate-[165deg] w-[4000px] h-[30px]", color: "#0072BC" },
  ];

  const lines = useMemo(() => {
    return baseLines.map(line => ({
      ...line,
      delay: Math.random() * (10 - 0.2) + 0.2
    }));
  }, []);

  return (
    <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center bg-black">

      {/* ===== 背景テキスト：BARANCE ===== */}
      <div className="absolute top-10  flex items-center justify-center pointer-events-none">
        <span
          className="
            text-[10rem] md:text-[14rem] lg:text-[18rem]
            font-black tracking-tight
            text-gray-400/10
            select-none
            whitespace-nowrap
          "
        >
          BALANCE
        </span>
      </div>

      {/* ===== 背景ライン群 ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`absolute opacity-0 animate-webLineSlow ${line.style}`}
            style={{
              animationDelay: `${line.delay}s`,
              backgroundColor: line.color
            }}
          />
        ))}
      </div>

      {/* ===== メイン文字 ===== */}
      <div className="relative z-10 text-center">
        <h1
          className="
            text-[180px]
            md:text-[220px]
            lg:text-[280px]
            font-black
            tracking-wider
            text-white
            leading-none
            drop-shadow-[0_0_50px_rgba(252,206,0,0.2)]
            select-none
          "
        >
          損小利大
        </h1>
      </div>

      {/* ===== アニメーション定義 ===== */}
      <style>{`
        @keyframes webLineSlow {
          0% {
            opacity: 0;
            transform: scaleX(0) translateX(-10%);
          }
          30% {
            opacity: 0.15;
          }
          100% {
            opacity: 0.15;
            transform: scaleX(1) translateX(0);
          }
        }
        .animate-webLineSlow {
          animation: webLineSlow 15s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transform-origin: left center;
        }
      `}</style>
    </section>
  );
}
