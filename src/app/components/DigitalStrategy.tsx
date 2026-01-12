import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Lightbulb, Rocket } from 'lucide-react';

export function DigitalStrategy() {
  const benefits = [
    {
      icon: Target,
      title: '業務効率の向上',
      description: '自動化とデジタル化による生産性の大幅な改善',
    },
    {
      icon: Lightbulb,
      title: '新たなビジネス機会',
      description: 'データ活用による顧客理解と新サービスの創出',
    },
    {
      icon: Rocket,
      title: '競争力の強化',
      description: '迅速な市場対応と差別化戦略の実現',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Section 02
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            なぜデジタル戦略が重要なのか
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            デジタル化は単なる技術導入ではなく、企業の成長戦略の中核です
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-lg">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODE4MzQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="データアナリティクス"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            デジタル化による売上向上効果
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-5xl font-bold mb-2">30%</div>
              <p className="text-blue-100">業務時間の削減</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">45%</div>
              <p className="text-blue-100">顧客満足度の向上</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25%</div>
              <p className="text-blue-100">売上成長率の改善</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
