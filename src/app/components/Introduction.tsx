import { Briefcase, Award, BookOpen, Linkedin, Mail } from 'lucide-react';

export function Introduction() {
  const expertise = [
    'データ分析・可視化',
    '機械学習モデル構築',
    'ビジネス戦略立案',
    'デジタルトランスフォーメーション',
  ];

  const achievements = [
    {
      icon: Briefcase,
      title: '実務経験',
      description: 'データサイエンス領域で10年以上の経験',
    },
    {
      icon: Award,
      title: 'プロジェクト実績',
      description: '中小企業のDX支援プロジェクト50社以上',
    },
    {
      icon: BookOpen,
      title: '専門資格',
      description: '統計検定1級、データサイエンティスト検定',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile */}
          <div className="text-white">
            <div className="mb-6">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Speaker Introduction
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              カトウ ヒロキ
            </h1>
            
            <div className="text-2xl text-blue-300 mb-8">
              データサイエンティスト
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              データドリブンな意思決定とデジタルトランスフォーメーションを通じて、
              中小企業の成長を支援しています。統計学と機械学習の専門知識を活かし、
              ビジネス課題の解決に取り組んでいます。
            </p>

            <div className="flex gap-4 mb-12">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4">専門領域</h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-500/30 rounded-full text-sm font-medium border border-blue-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white text-center shadow-2xl">
              <div className="text-sm font-semibold uppercase tracking-wider mb-2 text-blue-100">
                Mission
              </div>
              <p className="text-xl font-bold leading-relaxed">
                データの力で、中小企業の<br />
                未来を切り拓く
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
