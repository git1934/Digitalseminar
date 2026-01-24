import { Rocket, Bot, AlertTriangle, Crown } from 'lucide-react';

export function DifferentiationContent() {
  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-white px-12 py-12">
      <div className="max-w-6xl mx-auto w-full h-full relative flex items-center">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#FCCE00]"></div>
        
        {/* Background watermark */}
        <div className="absolute top-0 right-0 text-[240px] font-black text-[#e1e1e1] opacity-30 leading-none pointer-events-none">
          01
        </div>

        <div className="relative z-10 w-full">
          {/* Header Section */}
          <div className="mb-10 pb-6 border-b-2 border-[#e1e1e1]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-[#FCCE00]"></div>
              <span className="text-base font-bold text-gray-500 uppercase tracking-wider">
                Chapter 01
              </span>
            </div>
            <h1 className="text-6xl font-black text-black mb-4 leading-tight">
              徹底的な差別化
            </h1>
            <p className="text-3xl font-bold text-[#FCCE00] flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#FCCE00]"></span>
              ツールではなく、経営で差をつける
            </p>
          </div>

          {/* Narrative Content */}
          <div className="space-y-6">
            {/* Section 1: Context */}
            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FCCE00]/10 flex items-center justify-center">
                <Rocket className="w-7 h-7 text-[#FCCE00]" />
              </div>
              <div className="flex-1">
                <p className="text-2xl leading-relaxed text-gray-700">
                  生成AIやAIエージェントの登場により、デジタル活用のハードルは一気に下がりました。
                  今では、<strong className="text-black font-bold bg-[#FCCE00]/20 px-1">誰でも同じようなツールを、同じような価格で使える時代</strong>です。
                </p>
              </div>
            </div>

            {/* Section 2: Problem */}
            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#e1e1e1] flex items-center justify-center">
                <Bot className="w-7 h-7 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-2xl leading-relaxed text-gray-700">
                  しかし、「AIを使っている限り、どのAIモデルを使っても結果は似通ってくる」という現実があります。
                  ChatGPTでも他社ツールでも、<strong className="text-black font-bold bg-[#FCCE00]/20 px-1">\"ツールそのもの\"では差別化しづらくなっています。</strong>
                </p>
              </div>
            </div>

            {/* Section 3: Warning */}
            <div className="bg-[#FCCE00]/10 border-l-4 border-[#FCCE00] rounded-r-xl p-6">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FCCE00]/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-[#FCCE00]" />
                </div>
                <div className="flex-1">
                  <p className="text-2xl text-gray-800 font-medium leading-relaxed">
                    この結果、多くの企業が<strong className="text-black font-bold">\"他社と同じような取り組み\"</strong>に陥っています。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Conclusion */}
            <div className="bg-black rounded-xl p-8 flex items-center gap-8 shadow-2xl">
              <div className="flex-shrink-0">
                <Crown className="w-14 h-14 text-[#FCCE00]" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-3">重要なのは「経営視点」</h3>
                <p className="text-2xl text-gray-300 leading-relaxed">
                  ツール選びで勝負するのではなく、
                  <strong className="text-[#FCCE00] font-bold">\"経営視点での差別化\"</strong>こそが、競争優位を生み出します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}