import { Package, ThumbsUp, FileText, TrendingUp, Coins, BarChart, XCircle } from 'lucide-react';

export function AvoidMeansExamples() {
  const examples = [
    {
      icon: Package,
      number: '01',
      title: 'DX導入がゴールになった会社',
      means: 'DXツールを導入',
      purpose: '業務効率化・利益改善',
      reality: ['使いこなせない', 'Excelに逆戻り', '導入が成果扱い'],
      summary: '使われていないDX',
    },
    {
      icon: ThumbsUp,
      number: '02',
      title: 'SNS運用が仕事になった会社',
      means: 'SNS毎日投稿',
      purpose: '集客・売上向上',
      reality: ['フォロワー数追求', '投稿で疲弊', '売上貢献不明'],
      summary: 'バズったけど売れない',
    },
    {
      icon: FileText,
      number: '03',
      title: '会議が目的になった組織',
      means: '定例会議・報告資料',
      purpose: '意思決定・課題解決',
      reality: ['資料作成に時間', '何も決まらない', '行動変わらず'],
      summary: '会議は多いが前に進まない',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'KPIを守ることが成果の現場',
      means: 'KPIを細かく設定',
      purpose: '正しい判断の指標',
      reality: ['KPI達成が目的化', '数字の見栄え重視', '本質が見えない'],
      summary: '数字は達成、事業は停滞',
    },
    {
      icon: Coins,
      number: '05',
      title: '補助金使用が目的になった投資',
      means: '補助金で設備投資',
      purpose: '競争力強化・収益改善',
      reality: ['補助金ありき計画', '活用が曖昧', '維持コストだけ残る'],
      summary: 'もらったけど活かせない',
    },
    {
      icon: BarChart,
      number: '06',
      title: 'データ収集が目的になった現場',
      means: '数値を集める・レポート作成',
      purpose: '意思決定を速く・正しくする',
      reality: ['数字を見るだけ', 'レポート作成に時間', '判断につながらない'],
      summary: '測って満足している状態',
    },
  ];

  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-white px-12 py-10">
      <div className="max-w-[1440px] w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-5xl font-black text-black leading-tight mb-1">
            手段が目的化してしまった<span className="text-red-600">「悪い事例」</span>
          </h1>
          <p className="text-xl text-gray-500">（実務あるある）</p>
        </div>

        {/* Examples Grid - 5 items in 2 rows */}
        <div className="grid grid-cols-3 gap-6 flex-1">
          {examples.map((example, index) => {
            const Icon = example.icon;

            return (
              <div
                key={index}
                className="bg-white border-3 border-gray-200 rounded-xl p-4 shadow-lg flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3 pb-3 border-b-2 border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-black text-sm">
                    {example.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight flex-1">
                    {example.title}
                  </h3>
                </div>

                {/* Content - Compact */}
                <div className="space-y-2.5 flex-1">
                  {/* 手段 */}
                  <div>
                    <div className="text-xs font-bold text-gray-400 mb-1">手段</div>
                    <p className="text-base font-semibold text-gray-700 bg-gray-50 rounded px-2 py-1.5">
                      {example.means}
                    </p>
                  </div>

                  {/* 本来の目的 */}
                  <div>
                    <div className="text-xs font-bold text-gray-400 mb-1">本来の目的</div>
                    <p className="text-base font-semibold text-gray-700 bg-[#FCCE00]/10 rounded px-2 py-1.5">
                      {example.purpose}
                    </p>
                  </div>

                  {/* 実際に起きたこと */}
                  <div>
                    <div className="text-xs font-bold text-red-500 mb-1.5">実際に起きたこと</div>
                    <div className="space-y-1">
                      {example.reality.map((item, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <XCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-700 leading-tight">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-3 pt-3 border-t-2 border-dashed border-red-200">
                  <p className="text-base font-black text-red-600 text-center">
                    👉 {example.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Message */}
        <div className="mt-6 bg-black rounded-xl py-4 px-6 text-center">
          <p className="text-2xl font-bold text-white">
            <span className="text-[#FCCE00]">「何のために？」</span>を問い続けることで、手段の目的化を防ぐ
          </p>
        </div>
      </div>
    </section>
  );
}