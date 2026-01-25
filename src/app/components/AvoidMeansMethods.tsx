import { Route, SquareMinus } from 'lucide-react';

export function AvoidMeansMethods() {
  const processSteps = [
    {
      number: 1,
      title: '目的を言語化',
      description: '何のためにデジタルを使うのか？',
      active: true,
    },
    {
      number: 2,
      title: '「やめる」を決める',
      description: '新しいことを始める前に整理',
      active: true,
    },
    {
      number: 3,
      title: 'ツール選定',
      description: '最後に手段を選ぶ',
      active: false,
    },
  ];

  const checklistItems = [
    '時間の掛かる手作業入力',
    '特定の担当者しかできない属人化業務',
    '過剰な承認プロセスや無駄な確認作業',
  ];

  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-white relative px-12 py-12">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e1e1e1]/20 rounded-full -translate-y-1/4 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto w-full h-full relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-4 pb-6 border-b-2 border-gray-100">
          <div className="inline-block bg-[#FCCE00]/10 text-[#FCCE00] text-base font-bold uppercase tracking-wider px-4 py-2 rounded mb-3">
            METHODOLOGY
          </div>
          <h1 className="text-5xl font-black text-black">
            手段の目的化を防ぐ方法
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex gap-12 flex-1 items-center">
          {/* Left Column: Process & Checklist */}
          <div className="flex-[1.4] flex flex-col gap-8">
            {/* Process Steps */}
            <div>
              <div className="flex items-center gap-4 text-2xl font-bold text-gray-700 mb-5">
                <Route className="w-6 h-6 text-[#FCCE00]" />
                <span>正しい検討プロセス</span>
              </div>

              <div className="flex gap-5">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className={`flex-1 rounded-xl p-5 relative border ${
                      step.active
                        ? 'bg-[#FCCE00]/5 border-[#FCCE00]/30 shadow-sm'
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="absolute -top-4 left-5 w-9 h-9 bg-[#FCCE00] text-white rounded-full flex items-center justify-center font-bold text-lg shadow">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-7 shadow-md">
              <div className="text-xl font-bold text-black mb-5 pb-4 border-b-2 border-dashed border-gray-300">
                まず「何をやめたいか」を決める
              </div>

              <div className="space-y-4">
                {checklistItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-xl text-gray-700 font-medium bg-gray-50 px-5 py-4 rounded-lg"
                  >
                    <SquareMinus className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Phrases */}
          <div className="flex-1 bg-black rounded-2xl p-10 text-white flex flex-col justify-center relative shadow-2xl">
            {/* Quote icon */}
            <div className="absolute top-6 left-8 text-7xl text-gray-700 opacity-50">
              "
            </div>

            <div className="relative z-10 space-y-8">
              <div className="border-l-4 border-[#FCCE00] pl-5">
                <p className="text-2xl font-bold leading-relaxed">
                  DXは買い物ではなく<br />
                  <span className="text-[#FCCE00]">経営判断</span>です
                </p>
              </div>

              <div className="border-l-4 border-[#FCCE00] pl-5">
                <p className="text-2xl font-bold leading-relaxed">
                  ツールは優秀でも、<br />
                  目的が曖昧だと必ず<span className="text-[#FCCE00]">迷子</span>になります
                </p>
              </div>

              <div className="border-l-4 border-[#FCCE00] pl-5">
                <p className="text-xl font-bold leading-relaxed">
                  導入した瞬間に<br />
                  誰の仕事がどう変わるか<br />
                  が言えないものは<span className="text-red-500">危険</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}