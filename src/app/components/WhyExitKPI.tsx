import { Database, Heart, Target } from "lucide-react";

export function WhyExitKPI() {
  return (
    <section className="h-screen bg-[#e1e1e1] px-12 pt-10 pb-20 flex items-center justify-center">
      <div className="max-w-[1600px] w-full flex flex-col gap-10">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-6xl font-black text-black tracking-tight">
            撤退判断にはデータ活用が有用
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1">
          
          {/* Left Column */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border-2 border-gray-200 flex flex-col justify-center">
            
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-8 h-8 text-[#FCCE00]" />
              </div>
              <h2 className="text-4xl font-bold text-black leading-tight">
                なぜ撤退判断は難しいのか
              </h2>
            </div>

            <p className="text-3xl text-black mb-8 leading-snug">
              デジタル施策は始めやすい一方で、
              やめる判断がとても難しい
            </p>

            <div className="bg-[#FCCE00]/10 rounded-xl p-8">
              <h3 className="text-3xl font-bold text-black mb-6">
                判断を鈍らせる要因
              </h3>

              <div className="space-y-5">
                {[
                  "ここまでお金をかけたから",
                  "担当者が頑張っているから",
                  "もう少し続ければ成果が出るかも",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-[#FCCE00] rounded-full mt-3 flex-shrink-0" />
                    <p className="text-3xl text-gray-800 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border-2 border-gray-200 flex flex-col justify-center">
            
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 bg-[#FCCE00] rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-bold text-black leading-tight">
                感情を排除するためのデータ活用
              </h2>
            </div>

            <p className="text-3xl text-black mb-8 leading-snug">
              撤退KPIとは、この数値に届かなければやめるという判断指標
            </p>

            <div className="space-y-5">
              {[
                "○ヶ月後に利用率が〇％に達しなければ撤退",
                "月間工数削減が〇時間未満なら見直し",
                "売上貢献が〇円未満なら中止",
              ].map((item) => (
                <div key={item} className="bg-[#e1e1e1] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-[#FCCE00] flex-shrink-0 mt-2" />
                    <p className="text-3xl font-medium text-gray-800 leading-snug">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
