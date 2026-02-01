import {
  TrendingUp,
  Coins,
  BarChart,
  XCircle,
  ArrowRight
} from "lucide-react";

export function AvoidMeansExamplesPage2() {
  const examples = [
    {
      icon: TrendingUp,
      number: "04",
      title: "KPIが目的化",
      means: "KPIを細かく設定",
      purpose: "正しい判断の指標",
      reality: ["数字達成が目的", "見栄え重視", "本質が見えない"],
      summary: "数字は達成、事業は停滞",
    },
    {
      icon: Coins,
      number: "05",
      title: "補助金が目的",
      means: "補助金で設備投資",
      purpose: "競争力強化・収益改善",
      reality: ["補助金ありき計画", "活用が曖昧", "維持コストだけ残る"],
      summary: "もらったけど活かせない",
    },
    {
      icon: BarChart,
      number: "06",
      title: "データ収集が目的",
      means: "数値を集める・レポート作成",
      purpose: "意思決定を速く・正しくする",
      reality: ["見るだけで終わる", "作成に時間", "判断につながらない"],
      summary: "測って満足している状態",
    },
  ];

  return (
    <section className="h-screen bg-[#f3f4f6] flex flex-col px-12 pt-12 pb-24 overflow-hidden relative">

      {/* 最前面ウォーターマーク */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-50">
        <div className="text-[18rem] font-black text-red-600/10 transform rotate-18 leading-none whitespace-nowrap tracking-tighter">
          失敗事例
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-3 gap-8 flex-1 items-stretch z-10">
        {examples.map((example, index) => {
          const Icon = example.icon;

          return (
            <div
              key={index}
              className="bg-white border-[6px] border-black rounded-[2.5rem] p-8 flex flex-col"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-black/10">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 leading-tight">
                    {example.title}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-black text-[#FCCE00] rounded-full flex items-center justify-center font-black text-xl shrink-0">
                  {example.number}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 flex-1">
                {/* 手段 → 目的 */}
                <div className="space-y-3">
                  <div className="relative">
                    <span className="text-xs font-black bg-gray-500 text-white px-2 py-0.5 rounded absolute -top-2 left-3">
                      手段
                    </span>
                    <p className="text-2xl font-black bg-gray-100 rounded-2xl px-5 py-4 border-2 border-gray-200">
                      {example.means}
                    </p>
                  </div>

                  <div className="flex justify-center py-1">
                    <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                  </div>

                  <div className="relative">
                    <span className="text-xs font-black bg-[#FCCE00] text-black px-2 py-0.5 rounded absolute -top-2 left-3">
                      本来の目的
                    </span>
                    <p className="text-2xl font-black bg-[#FCCE00]/20 rounded-2xl px-5 py-4 border-2 border-[#FCCE00]">
                      {example.purpose}
                    </p>
                  </div>
                </div>

                <hr className="border-t-2 border-dashed border-gray-300" />

                {/* 実際の結果 */}
                <div className="space-y-3">
                  <p className="text-lg font-black text-red-600 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> 実際の結果
                  </p>

                  <ul className="space-y-2 text-xl font-bold text-gray-800">
                    {example.reality.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-8">
                <p className="text-2xl font-black text-center bg-black text-white py-4 rounded-2xl">
                  {example.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Presentation Space */}
      <div className="h-16 w-full" />
    </section>
  );
}
