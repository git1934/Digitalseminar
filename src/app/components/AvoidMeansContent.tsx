import { TriangleAlert, Search, Compass } from 'lucide-react';

export function AvoidMeansContent() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto w-full relative">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#FCCE00]"></div>
        
        {/* Background watermark */}
        <div className="absolute top-0 right-0 text-[300px] font-black text-[#e1e1e1] opacity-30 leading-none pointer-events-none">
          03
        </div>

        <div className="relative z-10 pt-16 px-8">
          {/* Header Section */}
          <div className="mb-10 pb-6 border-b-2 border-[#e1e1e1]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-[#FCCE00]"></div>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                Chapter 03
              </span>
            </div>
            <h1 className="text-6xl font-black text-black mb-4 leading-tight">
              手段の目的化を防ぐ
            </h1>
            <p className="text-3xl font-bold text-[#FCCE00] flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#FCCE00]"></span>
              デジタルは"導入"がゴールではない
            </p>
          </div>

          {/* Narrative Content */}
          <div className="space-y-8">
            {/* Section 1: Common Failures (Warning) */}
            <div className="bg-[#FCCE00]/10 border-l-6 border-[#FCCE00] rounded-r-xl p-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FCCE00]/20 flex items-center justify-center">
                  <TriangleAlert className="w-7 h-7 text-[#FCCE00]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-3">
                    よくある失敗パターン
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-xl text-gray-700 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400 before:font-bold">
                      ツール導入自体がゴールになってしまう
                    </li>
                    <li className="text-xl text-gray-700 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400 before:font-bold">
                      「とりあえずDX」「とりあえずAI」で始めてしまう
                    </li>
                    <li className="text-xl text-gray-700 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400 before:font-bold">
                      ベンダーの提案がそのまま目的になってしまう
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Arrow divider */}
            <div className="flex justify-center text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Section 2: Root Cause */}
            <div className="flex gap-6 items-start px-3">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FCCE00]/10 flex items-center justify-center">
                <Search className="w-7 h-7 text-[#FCCE00]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-3">
                  なぜ起こるのか？
                </h3>
                <p className="text-xl text-gray-700 mb-3 leading-relaxed">
                  多くのケースで、以下の2点が曖昧なままプロジェクトが進行しています。
                </p>
                <ul className="space-y-2">
                  <li className="text-xl text-gray-700 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400 before:font-bold">
                    <strong className="text-black font-bold bg-[#FCCE00]/20 px-1">「何を良くしたいか」</strong>が曖昧なまま始めている
                  </li>
                  <li className="text-xl text-gray-700 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400 before:font-bold">
                    成果を測るための<strong className="text-black font-bold bg-[#FCCE00]/20 px-1">「具体的な指標」</strong>が決まっていない
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Conclusion */}
            <div className="bg-black rounded-2xl p-9 flex items-center gap-10 shadow-2xl mt-8">
              <div className="flex-shrink-0">
                <Compass className="w-14 h-14 text-[#FCCE00]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">迷子にならないために</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  ツールを選ぶ前に、まず<strong className="text-[#FCCE00] font-bold">「目的の言語化」</strong>が必要です。<br />
                  デジタルは魔法の杖ではなく、目的を達成するための道具にすぎません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
