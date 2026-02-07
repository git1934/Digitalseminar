import { Database, Heart, Target } from "lucide-react";

export function WhyExitKPI() {
  return (
    <section className="min-h-screen bg-[#e1e1e1] px-12 pt-12 pb-20">
      {/* ↑ pb-20 が画面下の余白 */}

      <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-7xl font-black text-black mb-4 leading-tight tracking-tight">
            撤退判断にはデータ活用が有用
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="bg-white rounded-2xl p-7 shadow-lg border-2 border-gray-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-[#FCCE00]" />
                </div>
                <h2 className="text-4xl font-bold text-black leading-tight">
                  なぜ撤退判断は難しいのか
                </h2>
              </div>

              <p className="text-2xl text-black mb-6 leading-snug">
                デジタル施策は始めやすい一方で、
                  やめる判断がとても難しい
              </p>

              <div className="bg-[#FCCE00]/10 rounded-xl p-6">
                <h3 className="text-3xl font-bold text-black mb-4">
                  判断を鈍らせる要因
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-[#FCCE00] rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-2xl text-gray-800 leading-snug">
                      ここまでお金をかけたから
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-[#FCCE00] rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-2xl text-gray-800 leading-snug">
                      担当者が頑張っているから
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-[#FCCE00] rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-2xl text-gray-800 leading-snug">
                      もう少し続ければ成果が出るかも
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-2xl p-7 shadow-lg border-2 border-gray-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#FCCE00] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-4xl font-bold text-black leading-tight">
                  感情を排除するための
                  データ活用
                </h2>
              </div>

              <p className="text-2xl text-black mb-6 leading-snug">
                撤退KPIとは、この数値に届かなければやめるという判断指標
              </p>

              <div className="space-y-3">
                <div className="bg-[#e1e1e1] rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-7 h-7 text-[#FCCE00] flex-shrink-0 mt-1" />
                    <p className="text-2xl text-gray-800 font-medium leading-snug">
                      ○ヶ月後に利用率が〇％に達しなければ撤退
                    </p>
                  </div>
                </div>
                <div className="bg-[#e1e1e1] rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-7 h-7 text-[#FCCE00] flex-shrink-0 mt-1" />
                    <p className="text-2xl text-gray-800 font-medium leading-snug">
                      月間工数削減が〇時間未満なら見直し
                    </p>
                  </div>
                </div>
                <div className="bg-[#e1e1e1] rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-7 h-7 text-[#FCCE00] flex-shrink-0 mt-1" />
                    <p className="text-2xl text-gray-800 font-medium leading-snug">
                      売上貢献が〇円未満なら中止
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 下の「話す余白」 */}
        <div className="h-8" />
      </div>
    </section>
  );
}