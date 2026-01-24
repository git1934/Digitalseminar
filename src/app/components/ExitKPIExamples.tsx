import { CalendarX, Coins, UsersRound, Check } from 'lucide-react';

export function ExitKPIExamples() {
  const kpiExamples = [
    {
      icon: CalendarX,
      title: '期間と成果',
      description: '3ヶ月で改善が見られなければ中止',
      badge: 'Time Limit',
      color: 'amber',
    },
    {
      icon: Coins,
      title: 'コスト超過',
      description: '追加コストが50万円を超えたら見直し',
      badge: 'Cost Cap',
      color: 'red',
    },
    {
      icon: UsersRound,
      title: '利用率低下',
      description: '現場の利用率が30%を下回ったら停止',
      badge: 'Usage Rate',
      color: 'blue',
    },
  ];

  const benefits = [
    '「失敗してもいい」前提で動ける',
    '小さく素早く試せる',
    '早期に軌道修正ができる',
    '次のチャレンジへ即座に移行',
  ];

  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-white relative px-12 py-12">
      {/* Background accent blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e1e1e1]/30 rounded-full -translate-y-1/3 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto w-full h-full relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-4 pb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-0.5 bg-[#FCCE00]"></div>
            <span className="text-base font-bold text-[#FCCE00] uppercase tracking-wider">
              KPI STRATEGY
            </span>
          </div>
          <h1 className="text-5xl font-black text-black">
            撤退KPIの具体例と効果
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex gap-10 flex-1 items-center">
          {/* Left Column: KPI Examples */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="text-2xl font-bold text-gray-600 mb-2 border-l-4 border-gray-300 pl-4">
              具体的な撤退ラインの例
            </div>

            {kpiExamples.map((kpi, index) => {
              const Icon = kpi.icon;
              const borderColor = kpi.color === 'amber' ? 'border-l-amber-500' : 
                                 kpi.color === 'red' ? 'border-l-red-500' : 'border-l-[#FCCE00]';
              const bgColor = kpi.color === 'amber' ? 'bg-amber-50' : 
                             kpi.color === 'red' ? 'bg-red-50' : 'bg-[#FCCE00]/10';
              const iconColor = kpi.color === 'amber' ? 'text-amber-500' : 
                               kpi.color === 'red' ? 'text-red-500' : 'text-[#FCCE00]';

              return (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 border-l-4 ${borderColor} rounded-xl p-7 flex items-center gap-5 shadow-sm`}
                >
                  <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-700 mb-1">
                      {kpi.title}
                    </h3>
                    <p className="text-2xl font-bold text-black">
                      {kpi.description}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-sm font-bold px-4 py-2 bg-gray-100 text-gray-600 rounded-full">
                      {kpi.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Benefits */}
          <div className="flex-none w-[420px] bg-[#e1e1e1]/20 rounded-2xl p-7 border-2 border-dashed border-gray-300">
            <div className="text-2xl font-bold text-[#FCCE00] mb-6 border-l-4 border-[#FCCE00] pl-4">
              撤退ラインを決めるメリット
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FCCE00]/20 text-[#FCCE00] rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                  <div className="text-xl font-bold text-gray-700">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="bg-black rounded-2xl p-8 flex justify-between items-center relative overflow-hidden mt-6">
          {/* Background accent */}
          <div className="absolute right-0 bottom-0 h-full w-80 bg-gradient-to-l from-[#FCCE00]/10 to-transparent"></div>

          <div className="relative z-10">
            <p className="text-3xl font-black text-white leading-tight mb-1">
              情熱は始める力。
            </p>
            <p className="text-3xl font-black text-[#FCCE00] leading-tight">
              KPIはやめる勇気。
            </p>
          </div>

          <div className="relative z-10 text-right border-l-2 border-gray-600 pl-8">
            <p className="text-sm text-gray-400 mb-2">Digital Strategy Principle</p>
            <h4 className="text-xl font-bold text-white leading-tight">
              成功より先に、<br />
              失敗の終わらせ方を決める
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}