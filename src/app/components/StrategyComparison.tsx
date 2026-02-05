import { Settings, Lightbulb, Zap, Heart, Target, Sparkles } from 'lucide-react';

export function StrategyComparison() {
  const rows = [
    {
      label: '戦い方',
      focusIcon: Target,
      focusTitle: '対象を絞る',
      diffIcon: Lightbulb,
      diffTitle: '意味の違いを作る',
    },
    {
      label: '重視する価値',
      focusIcon: Settings,
      focusTitle: '効率を追求',
      diffIcon: Heart,
      diffTitle: '体験を設計',
    },
    {
      label: '強みの源泉',
      focusIcon: Zap,
      focusTitle: '自動化・最適化',
      diffIcon: Sparkles,
      diffTitle: '発想・着眼点',
    },
  ];

  return (
    <section className="h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* 下に余白を残すため pb を大きめに */}
      <div className="w-full max-w-[1400px] px-16 pt-16 pb-32 flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-7xl font-black mb-16 leading-tight">
          集中戦略と差別化戦略
        </h1>

        {/* Table */}
        <div className="rounded-3xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[220px_1fr_1fr] bg-gray-100">
            <div className="p-6"></div>
            <div className="p-6 text-3xl font-black text-blue-600">
              集中戦略（DX・AIが有用）
            </div>
            <div className="p-6 text-3xl font-black text-[#FCCE00]">
              差別化戦略（アイデアが価値）
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => {
            const FocusIcon = row.focusIcon;
            const DiffIcon = row.diffIcon;

            return (
              <div
                key={index}
                className="grid grid-cols-[220px_1fr_1fr] border-t border-gray-200"
              >
                {/* Label */}
                <div className="p-8 bg-gray-50 flex items-center text-2xl font-bold text-gray-600">
                  {row.label}
                </div>

                {/* Focus Strategy */}
                <div className="p-10 flex gap-6 items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FocusIcon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-black">
                    {row.focusTitle}
                  </h3>
                </div>

                {/* Differentiation Strategy */}
                <div className="p-10 flex gap-6 items-center bg-[#FCCE00]/5">
                  <div className="w-16 h-16 bg-[#FCCE00]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <DiffIcon className="w-8 h-8 text-[#FCCE00]" />
                  </div>
                  <h3 className="text-3xl font-black">
                    {row.diffTitle}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* 下余白は「次の一言を話すための間」 */}
      </div>
    </section>
  );
}
