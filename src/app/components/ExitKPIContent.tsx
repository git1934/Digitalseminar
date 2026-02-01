import { TrendingUp, Flame, Ruler } from 'lucide-react';

export function ExitKPIContent() {
  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-white px-12 py-12">
      <div className="max-w-6xl mx-auto w-full h-full relative flex items-center">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#FCCE00]"></div>
        
        {/* Background watermark */}
        <div className="absolute top-0 right-0 text-[240px] font-black text-[#e1e1e1] opacity-30 leading-none pointer-events-none">
          02
        </div>

        <div className="relative z-10 w-full">
          {/* Header Section */}
          <div className="mb-10 pb-6 border-b-2 border-[#e1e1e1]">
            <div className="flex items-center gap-2 mb-3">
              {/* <div className="w-1 h-6 bg-[#FCCE00]"></div> */}
              {/* <span className="text-base font-bold text-gray-500 uppercase tracking-wider">
                Chapter 02
              </span> */}
            </div>
            <h1 className="text-6xl font-black text-black mb-4 leading-tight">
              やめ方を決めれば、もっと挑戦できる
            </h1>
            {/* <p className="text-3xl font-bold text-[#FCCE00] flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#FCCE00]"></span>
              やめ方を決めると、挑戦できる
            </p> */}
          </div>

          {/* Narrative Content */}
          <div className="space-y-6">
            {/* Section 1: Context & Fear */}
            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FCCE00]/10 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-[#FCCE00]" />
              </div>
              <div className="flex-1">
                <p className="text-2xl leading-relaxed text-gray-700">
                  環境は複雑になり続け、変化は止まりません。
                  しかし、多くの経営者が<strong className="text-black font-bold bg-[#FCCE00]/20 px-1">「失敗したらどうしよう」「止められなくなるのでは」</strong>という不安を感じています。
                </p>
              </div>
            </div>

            {/* Section 2: The Paradox of Passion (Warning) */}
            <div className="bg-[#FCCE00]/10 border-l-4 border-[#FCCE00] rounded-r-xl p-6">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FCCE00]/20 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-[#FCCE00]" />
                </div>
                <div className="flex-1">
                  <p className="text-2xl text-gray-800 font-medium leading-relaxed">
                    ITプロジェクトの成功には「担当者の情熱」が不可欠です。
                    しかし皮肉なことに、<strong className="text-black font-bold">その情熱こそが、撤退を難しくする原因</strong>にもなります。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Solution (Conclusion) */}
            <div className="bg-black rounded-xl p-8 flex items-center gap-8 shadow-2xl">
              <div className="flex-shrink-0">
                <Ruler className="w-14 h-14 text-[#FCCE00]" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-3">定量的な「止めるライン」を決める</h3>
                <p className="text-2xl text-gray-300 leading-relaxed">
                  情熱に頼らず判断するために、
                  <strong className="text-[#FCCE00] font-bold">数値で表現された撤退KPI</strong>があらかじめ必要なのです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}