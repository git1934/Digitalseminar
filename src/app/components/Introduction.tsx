import { Briefcase, Award, BookOpen } from 'lucide-react';

export function Introduction() {
  const expertise = [
    'データ分析・可視化',
    'AI活用・機械学習',
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
      description: '企業のDX支援プロジェクト10社以上',
    },
    {
      icon: BookOpen,
      title: '受賞',
      description: '奈良市オープンデータコンテスト優秀賞など',
    },
  ];

  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-black px-12 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left side - Profile */}
          <div className="text-white">
            <div className="mb-4">
              <span className="text-[#FCCE00] font-semibold text-base uppercase tracking-wider">
                Speaker Introduction
              </span>
            </div>
            
            {/* 名前 */}
            <h1 className="text-6xl font-bold mb-2">
              加藤 大喜
            </h1>
            <div className="text-xl text-gray-400 mb-6">
              （カトウヒロキ）
            </div>
            
            {/* <div className="text-3xl text-[#FCCE00] mb-8">
              データサイエンティスト
            </div> */}
<div className="text-2xl text-[#FCCE00] mb-8 font-semibold">
  スペシャリスト:データサイエンティスト
</div>

            
            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              データドリブンな意思決定とデジタルトランスフォーメーションを通じて、
              お客様の企業成長を支援しています。データサイエンスの専門知識を活かし、
              ビジネス課題の解決に取り組んでいます。
            </p>

            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
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
                  className="bg-white/10 rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
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

            {/* Mission */}
            <div className="bg-[#FCCE00] rounded-xl p-8 text-black text-center shadow-2xl">
              <div className="text-sm font-semibold uppercase tracking-wider mb-3">
                Mission
              </div>
              <p className="text-2xl font-bold leading-relaxed">
                データ活用で地域の企業支援
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
