import { Target } from 'lucide-react';

export function WhyDifferentiation() {
  const reasons = [
    {
      number: '01',
      title: '大企業との競争で生き残るため',
      description: '資本力・ブランド力で負けないために、自分の土俵で勝負する',
    },
    {
      number: '02',
      title: '価格競争に巻き込まれないため',
      description: '「同じ商品」なら安い方が選ばれる。差別化なければ値下げ競争へ',
    },
    {
      number: '03',
      title: '選ばれる理由を明確にするため',
      description: '「なぜあなたから買うのか？」に答えられなければ顧客は離れてしまう',
    },
  ];

  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-white px-16 py-10">
      <div className="max-w-[1440px] w-full h-full flex flex-col justify-center">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
  
          </div>
          <h1 className="text-7xl font-black text-black leading-tight">
            中小企業に差別化が重要な理由
          </h1>
        </div>

        {/* Reasons */}
        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0 w-20 h-20 bg-[#FCCE00] text-black rounded-full flex items-center justify-center">
                  <span className="text-4xl font-black">{reason.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-4xl font-black text-black mb-2 leading-tight">
                    {reason.title}
                  </h2>
                  <p className="text-2xl text-gray-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
<div className="h-12" />
        
      </div>
    </section>
  );
}