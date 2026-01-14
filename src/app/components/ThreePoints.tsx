import { Target, Users, Zap } from 'lucide-react';

export function ThreePoints() {
  const points = [
    {
      icon: Target,
      number: '01',
      title: '明確な目標設定',
      description: 'ビジネス目標とデジタル施策を連携させ、測定可能なKPIを設定することで、投資対効果を最大化します。',
      details: [
        '具体的な数値目標の設定',
        'ROIの可視化と追跡',
        '段階的なマイルストーン',
      ],
    },
    {
      icon: Users,
      number: '02',
      title: '人材とスキル',
      description: 'デジタル人材の確保と既存社員のスキルアップを通じて、持続可能な推進体制を構築します。',
      details: [
        '社内デジタル人材の育成',
        '外部専門家との連携',
        '継続的な学習環境の整備',
      ],
    },
    {
      icon: Zap,
      number: '03',
      title: 'スピードと柔軟性',
      description: '小さく始めて素早く検証し、市場の変化に柔軟に対応できるアジャイルなアプローチを採用します。',
      details: [
        'MVP(最小実行可能製品)での検証',
        '迅速なフィードバックループ',
        '継続的な改善サイクル',
      ],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            中小企業のデジタル戦略
          </h2>
          <div className="inline-block px-6 py-3 bg-[#FCCE00] rounded-full mb-8">
            <p className="text-2xl md:text-3xl font-bold text-black">
              成功に向けた3つのポイント
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-[#FCCE00]/30 hover:border-[#FCCE00] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#FCCE00] rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-6xl font-bold text-[#FCCE00]/20">
                    {point.number}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {point.title}
                </h3>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {point.description}
                </p>

                <div className="space-y-3">
                  {point.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-[#FCCE00] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-400">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#FCCE00] to-[#e6bc00] rounded-2xl p-8 inline-block">
            <p className="text-xl md:text-2xl font-bold text-black">
              この3つのポイントを押さえることで、<br />
              デジタル戦略の成功確率が大幅に向上します
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
