import { Calendar, User } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center bg-black">
      
      {/* ======================================= */}
      {/* 幾何学円背景（パキッと・発光なし） */}
      {/* ======================================= */}

      {/* Circle 1（メインの黄色リング） */}
      <motion.div
        className="
          absolute -top-32 -right-32
          w-[780px] h-[780px]
          rounded-full
          border-[4px] border-[#FCCE00]
          opacity-25
        "
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Circle 2（黄色の塗り円） */}
      <motion.div
        className="
          absolute top-28 right-24
          w-[420px] h-[420px]
          rounded-full
          bg-[#FCCE00]
          opacity-12
        "
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Circle 3（暗い補助円） */}
      <motion.div
        className="
          absolute -bottom-56 -left-32
          w-[650px] h-[650px]
          rounded-full
          bg-[#222]
          opacity-45
        "
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ======================================= */}
      {/* Main Content */}
      {/* ======================================= */}
      <div className="relative z-10 text-white px-24 max-w-7xl w-full flex flex-col justify-center h-full">
        
        {/* Accent Bar */}
        <div className="w-32 h-2 bg-[#FCCE00] mb-8"></div>

        {/* Subtitle */}
        <p className="text-4xl font-medium text-[#e1e1e1] mb-8 flex items-center gap-4 tracking-wide">
          <span className="w-10 h-0.5 bg-gray-600"></span>
          2026年 情報通信トップセミナー
        </p>

        {/* Main Title */}
        <h1 className="text-8xl font-black leading-tight mb-24 tracking-tight">
          これからの変化に備える<br />
          <span className="text-[#FCCE00]">
            中小企業のデジタル戦略
          </span>
        </h1>

        {/* Footer Info */}
        <div className="flex gap-16 text-2xl text-[#e1e1e1] border-t border-gray-700 pt-8 max-w-3xl">
          
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
              <User className="w-5 h-5" />
              PRESENTER
            </p>
            <p>NTT西日本株式会社／加藤 大喜</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-base font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              DATE
            </p>
            <p>2026年2月25日</p>
          </div>
        </div>
      </div>
    </section>
  );
}
