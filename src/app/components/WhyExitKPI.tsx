import { Database, Heart, Target, CheckCircle } from 'lucide-react';

export function WhyExitKPI() {
  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-[#e1e1e1] px-12 py-8">
      <div className="max-w-[1600px] mx-auto w-full h-full flex flex-col justify-center gap-6">
        {/* Header */}
        <div className="text-center">
          {/* <div className="inline-block px-5 py-2 bg-[#FCCE00] text-black rounded-full text-sm font-bold uppercase tracking-wider mb-3">
            Chapter 02 - Deep Dive
          </div> */}
          <h1 className="text-7xl font-black text-black mb-4 leading-tight tracking-tight">
            撤退判断にはデータ活用が必要
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
          {/* Left Column: Why Withdrawal is Difficult */}
          <div className="bg-white rounded-2xl p-7 shadow-lg border-2 border-gray-200 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-7 h-7 text-[#FCCE00]" />
              </div>
              <h2 className="text-3xl font-bold text-black leading-tight">
                なぜ撤退判断は難しいのか
              </h2>
            </div>

            <p className="text-xl text-gray-700 mb-4 leading-snug">
              ITやデジタル施策は、始めることは簡単です。<br />
              しかし、<strong className="text-black font-bold">やめる判断はとても難しい</strong>。
            </p>

            <div className="bg-[#FCCE00]/10 rounded-xl p-6 mb-4">
              <h3 className="text-2xl font-bold text-black mb-4">判断を鈍らせる要因</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-[#FCCE00] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-xl text-gray-800 leading-snug">ここまでお金をかけたから</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-[#FCCE00] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-xl text-gray-800 leading-snug">担当者が頑張っているから</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-[#FCCE00] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-xl text-gray-800 leading-snug">もう少し続ければ成果が出るかも</p>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-xl p-5">
              <p className="text-[#FCCE00] font-bold text-xl leading-snug">
                「感情」や「期待」が判断を鈍らせ、効果が出ていない施策を惰性で続けてしまいます
              </p>
            </div>
          </div>

          {/* Right Column: Data Usage for Withdrawal */}
          <div className="bg-white rounded-2xl p-7 shadow-lg border-2 border-gray-200 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#FCCE00] rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-7 h-7 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-black leading-tight">
                データ活用は「感情を排除するため」
              </h2>
            </div>

            <p className="text-xl text-gray-700 mb-4 leading-snug">
              撤退KPIとは
              「この数値に届かなければやめる」と事前に決める指標です。
            </p>

            <div className="space-y-3 mb-4">
              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#FCCE00] flex-shrink-0 mt-0.5" />
                  <p className="text-xl text-gray-800 font-medium leading-snug">
                    <strong>○ヶ月後に利用率が〇％に達しなければ撤退</strong>
                  </p>
                </div>
              </div>
              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#FCCE00] flex-shrink-0 mt-0.5" />
                  <p className="text-xl text-gray-800 font-medium leading-snug">
                    <strong>月間工数削減が〇時間未満なら見直し</strong>
                  </p>
                </div>
              </div>
              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#FCCE00] flex-shrink-0 mt-0.5" />
                  <p className="text-xl text-gray-800 font-medium leading-snug">
                    <strong>売上貢献が〇円未満なら中止</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FCCE00] rounded-xl p-5">
              <h3 className="text-xl font-bold text-black mb-3">これにより実現すること</h3>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0" />
                  <span className="text-xl text-black font-medium leading-snug">担当者の頑張りを否定せず</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0" />
                  <span className="text-xl text-black font-medium leading-snug">感情論に流されず</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0" />
                  <span className="text-xl text-black font-medium leading-snug">経営として冷静な判断ができる</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}