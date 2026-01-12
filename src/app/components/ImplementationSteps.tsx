import { CheckCircle2 } from 'lucide-react';

export function ImplementationSteps() {
  const steps = [
    {
      phase: 'Phase 1',
      title: '現状分析と目標設定',
      duration: '1-2ヶ月',
      tasks: [
        '既存システムと業務プロセスの棚卸し',
        'デジタル化の課題と機会の特定',
        'KPI設定と投資対効果の試算',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'ロードマップ策定',
      duration: '1ヶ月',
      tasks: [
        '優先順位付けと段階的実施計画の策定',
        '必要なリソースと予算の確定',
        '社内推進体制の構築',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'パイロット導入',
      duration: '3-6ヶ月',
      tasks: [
        '小規模での試験導入と検証',
        'ユーザーフィードバックの収集',
        '課題の抽出と改善',
      ],
    },
    {
      phase: 'Phase 4',
      title: '本格展開',
      duration: '6-12ヶ月',
      tasks: [
        '全社展開と社員教育の実施',
        '運用体制の確立',
        '継続的な改善とアップデート',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Section 04
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            実装ステップ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            段階的なアプローチで確実にデジタル化を推進
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-100 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    <div className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
                      {step.phase}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-500 mb-6">期間: {step.duration}</p>
                    <ul className="space-y-3">
                      {step.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className={`flex items-start gap-3 ${
                            index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''
                          }`}
                        >
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="relative flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  {index + 1}
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
