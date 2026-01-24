import { Sprout } from 'lucide-react';

export function FinalSummary() {
  const summaryPoints = [
    {
      number: '01',
      title: '差別化は、ツールではなく\"経営判断\"',
      description: '「どのAIを使うか」ではなく「どこで勝つか」を決める',
      color: 'blue',
    },
    {
      number: '02',
      title: '撤退KPIがあるから、挑戦できる',
      description: '情熱で始め、数値でやめる勇気を持つ',
      color: 'amber',
    },
    {
      number: '03',
      title: 'デジタルは、目的を決めてから使う',
      description: '「何をやめるか」を明確にし、手段の目的化を防ぐ',
      color: 'emerald',
    },
  ];

  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-white relative">
      {/* Right sidebar background */}
      <div className="absolute top-0 right-0 w-[420px] h-full bg-black"></div>
      
      {/* Accent square */}
      <div className="absolute bottom-10 right-[360px] w-32 h-32 bg-[#FCCE00] opacity-10"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 h-screen flex">
        {/* Left Column: 3 Points */}
        <div className="flex-1 flex flex-col justify-center gap-7 px-12 pr-12">
          <div className="mb-8">
            <div className="inline-block text-sm font-bold text-[#FCCE00] tracking-widest uppercase mb-3 border-b-2 border-[#FCCE00] pb-1">
              SUMMARY
            </div>
            <h1 className="text-5xl font-black text-black">
              本日のまとめ
            </h1>
          </div>

          {summaryPoints.map((point, index) => {
            const borderColor = 'border-l-[#FCCE00]';
            const numberBgColor = 'text-[#FCCE00]/20';

            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 ${borderColor} border-l-6 rounded-lg p-7 flex items-center gap-6 shadow-sm`}
              >
                <div className={`text-5xl font-black ${numberBgColor} min-w-[60px] text-center leading-none`}>
                  {point.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xl text-gray-600">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Final Message */}
        <div className="w-[420px] flex flex-col justify-center px-12 text-white relative">
          <div className="mb-8">
            <Sprout className="w-14 h-14 text-[#FCCE00]" />
          </div>

          <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 pb-4 border-b border-gray-700">
            Takeaway Message
          </div>

          <div className="text-3xl font-bold leading-relaxed mb-8">
            <p className="text-white">
              目的を決め、<br />
              試し、測り、
            </p>
            <p className="text-[#FCCE00] mt-3">
              やめる判断ができること
            </p>
          </div>

          <div className="text-lg text-gray-300 leading-relaxed bg-white/10 p-6 rounded-lg">
            <p>
              これができれば、<br />
              これからどれだけ環境が変わっても、<br />
              柔軟に対応できる会社になります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}