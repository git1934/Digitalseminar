import { Calendar, User } from 'lucide-react';

export function Hero() {
  return (
    <section className="h-screen overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Decorative Circle Elements */}
      <div className="absolute -top-24 -right-24 w-[700px] h-[700px] rounded-full border-2 border-[#FCCE00] opacity-15 z-0"></div>
      <div className="absolute top-24 right-12 w-[400px] h-[400px] rounded-full bg-[#333] opacity-30 z-0"></div>
      <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] rounded-full bg-[#222] opacity-40 z-0"></div>

      {/* Tech Pattern - Dot Grid */}
      <svg className="absolute top-0 right-0 bottom-0 w-[40%] z-[1] opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-dots)" />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 text-white px-24 max-w-7xl w-full flex flex-col justify-center h-full">
        {/* Accent Bar */}
        <div className="w-32 h-2 bg-[#FCCE00] mb-8"></div>

        {/* Subtitle */}
        <p className="text-4xl font-medium text-[#e1e1e1] mb-8 flex items-center gap-4 tracking-wide">
          <span className="w-10 h-0.5 bg-gray-600"></span>
          不確実性をチャンスに変える実践フレーム
        </p>

        {/* Main Title */}
        <h1 className="text-8xl font-black leading-tight mb-24 tracking-tight">
          これからの変化に備える<br />
          <span className="text-[#FCCE00]">中小企業のデジタル戦略</span>
        </h1>

        {/* Footer Info */}
        <div className="flex gap-16 text-2xl text-[#e1e1e1] border-t border-gray-700 pt-8 max-w-3xl">
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
              <User className="w-5 h-5" />
              PRESENTER
            </p>
            <p>カトウヒロキ／データサイエンティスト</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              DATE
            </p>
            <p>2026年1月12日</p>
          </div>
        </div>
      </div>
    </section>
  );
}