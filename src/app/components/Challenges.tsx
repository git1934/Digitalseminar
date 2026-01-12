import { AlertCircle, TrendingDown, Users, Zap } from 'lucide-react';

export function Challenges() {
  const challenges = [
    {
      icon: TrendingDown,
      title: '市場環境の急速な変化',
      description: '消費者ニーズの多様化とグローバル競争の激化',
    },
    {
      icon: Users,
      title: '人材不足と技術格差',
      description: 'デジタル人材の確保と既存社員のスキルアップ',
    },
    {
      icon: AlertCircle,
      title: 'レガシーシステムの課題',
      description: '古いシステムによる業務効率の低下とコスト増',
    },
    {
      icon: Zap,
      title: '変化への対応速度',
      description: '迅速な意思決定と柔軟な事業展開の必要性',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Section 01
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            中小企業が直面する課題
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            現代のビジネス環境において、中小企業は様々な課題に直面しています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{challenge.title}</h3>
                <p className="text-gray-600 text-lg">{challenge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
