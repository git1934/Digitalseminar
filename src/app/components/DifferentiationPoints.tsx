import { Gauge, Scale, Heart, ArrowRight } from 'lucide-react';

export function DifferentiationPoints() {
  const questions = [
    {
      icon: Gauge,
      title: 'どの業務を「速くしたい」のか？',
      subtitle: '単純作業の削減か、開発スピードの向上か',
    },
    {
      icon: Scale,
      title: 'どの判断を「正確にしたい」のか？',
      subtitle: '在庫予測の精度か、与信審査のブレ防止か',
    },
    {
      icon: Heart,
      title: 'どの顧客体験を「変えたい」のか？',
      subtitle: '24時間対応か、パーソナライズされた提案か',
    },
  ];

  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-white">
      <div className="w-full h-screen flex">
        {/* Left Column: Questions */}
        <div className="flex-1 px-20 py-16 flex flex-col justify-center bg-white relative z-10">
          <div className="mb-12">
            {/* <div className="inline-block text-base font-bold text-[#FCCE00] tracking-widest uppercase mb-4 border-b-2 border-[#FCCE00] pb-2">
              KEY QUESTIONS
            </div> */}
            <h1 className="text-6xl font-black text-black mb-4 leading-tight">
              差別化のポイント
            </h1>
            <p className="text-2xl text-gray-600">
              自社にとっての正解を見つけるための3つの問い
            </p>
          </div>

          <div className="space-y-7">
            {questions.map((question, index) => {
              const Icon = question.icon;
              return (
                <div
                  key={index}
                  className="bg-[#e1e1e1]/30 border border-[#e1e1e1] rounded-2xl p-7 flex items-center gap-6 relative hover:-translate-y-1 transition-transform duration-300 shadow-sm"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FCCE00]/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#FCCE00]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {question.title}
                    </h3>
                    <p className="text-xl text-gray-600">
                      {question.subtitle}
                    </p>
                  </div>
                  <div className="absolute right-8 text-gray-300 text-3xl">
                    ?
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Message */}
        <div className="flex-none w-[520px] bg-black text-white px-16 py-16 flex flex-col justify-center relative z-20">
          {/* Decorative separator */}
          <div className="absolute top-0 left-0 w-24 h-full bg-black transform -skew-x-12 -translate-x-12"></div>
          
          {/* Arrow connector */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-30">
            <ArrowRight className="w-8 h-8 text-[#FCCE00]" />
          </div>

          {/* Background circle */}
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#FCCE00]/5 translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-20">
            <div className="mb-10 border-l-4 border-[#FCCE00] pl-6">
              <p className="text-2xl text-gray-400 leading-relaxed mb-6">
                この問いに対する答えは、
                会社ごとに違います。
              </p>
              <p className="text-2xl text-gray-400 leading-relaxed">
                差別化とは、最新ツールを使うことではなく、
                自社はどこで勝ちたいのかを
                明確にすることです。
              </p>
            </div>

            <div className="bg-[#FCCE00]/10 border-2 border-[#FCCE00] rounded-2xl p-10 text-center mt-10">
              <h2 className="text-4xl font-black text-white mb-3 leading-tight">
                "どのAIを使うか"<br />
                ではなく
              </h2>
              <h2 className="text-5xl font-black text-[#FCCE00] mb-5">
                "どこで勝つか"
              </h2>
              {/* <p className="text-lg text-gray-400 italic">
                Technology serves Strategy.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}