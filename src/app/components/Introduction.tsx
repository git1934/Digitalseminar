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
    <section className="h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-12 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Profile */}
          <div className="text-white">
            <div className="mb-4">
              <span className="text-[#FCCE00] font-semibold text-base uppercase tracking-wider">
                Speaker Introduction
              </span>
            </div>
            
            <h1 className="text-6xl font-bold mb-4">
              カトウ ヒロキ
            </h1>
            
            <div className="text-3xl text-[#FCCE00] mb-8">
              データサイエンティスト
            </div>

            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              データドリブンな意思決定とデジタルトランスフォーメーションを通じて、
              中小企業の成長を支援しています。統計学と機械学習の専門知識を活かし、
              ビジネス課題の解決に取り組んでいます。
            </p>

            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-[#FCCE00]/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-[#FCCE00]/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">専門領域</h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#FCCE00]/30 rounded-full text-lg font-medium border border-[#FCCE00]/50"
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
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#FCCE00] rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-300 text-xl">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-r from-[#FCCE00] to-[#e6bc00] rounded-xl p-8 text-black text-center shadow-2xl">
              <div className="text-sm font-semibold uppercase tracking-wider mb-3">
                Mission
              </div>
              <p className="text-2xl font-bold leading-relaxed">
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