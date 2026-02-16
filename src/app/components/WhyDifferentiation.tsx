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
    // ✅ 縦中央配置に変更
    <section className="h-screen flex items-center justify-center bg-white px-16">
      
      <div className="max-w-[1200px] w-full flex flex-col">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            {/* <Target className="w-10 h-10 text-[#FCCE00]" /> */}
          </div>
          <h1 className="text-6xl font-black text-black leading-tight">
            中小企業に差別化が重要な理由
          </h1>
        </div>

        {/* Reasons */}
        <div className="space-y-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-16 h-20 bg-[#FCCE00] text-black rounded-full flex items-center justify-center">
                  <span className="text-3xl font-black">{reason.number}</span>
                </div>

                <div className="flex-1">
                  <h2 className="text-5xl font-black text-black mb-1 leading-tight">
                    {reason.title}
                  </h2>
                  <p className="text-3xl text-gray-700 leading-snug">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
