import { CheckCircle, Zap, RefreshCcw, TrendingUp } from "lucide-react";

export function ExitKPIExamples() {
  return (
    <section className="h-screen bg-[#e1e1e1] px-12 pt-10 pb-20 flex items-center justify-center">
      <div className="max-w-[1600px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="text-center">
         <h1 className="text-6xl font-black text-black mb-4 leading-tight">
            撤退KPIを決めるメリット
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1">
          {/* Left : 判断の質 */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border-2 border-gray-200 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-8 text-black">
              判断がブレなくなる
            </h2>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <CheckCircle className="w-10 h-10 text-[#FCCE00]" />
                <p className="text-3xl font-medium text-gray-800">
                  担当者の頑張りを否定せず
                </p>
              </div>

              <div className="flex items-center gap-5">
                <CheckCircle className="w-10 h-10 text-[#FCCE00]" />
                <p className="text-3xl font-medium text-gray-800">
                  感情論に流されず
                </p>
              </div>

              <div className="flex items-center gap-5">
                <CheckCircle className="w-10 h-10 text-[#FCCE00]" />
                <p className="text-3xl font-medium text-gray-800">
                  経営として冷静な判断ができる
                </p>
              </div>
            </div>
          </div>

          {/* Right : スピードと学習 */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border-2 border-gray-200 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-8 text-black">
              試行錯誤のスピードが上がる
            </h2>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <Zap className="w-10 h-10 text-[#FCCE00]" />
                <p className="text-3xl font-medium text-gray-800">
                  小さく素早く試せる
                </p>
              </div>

              <div className="flex items-center gap-5">
                <RefreshCcw className="w-10 h-10 text-[#FCCE00]" />
                <p className="text-3xl font-medium text-gray-800">
                  早期に軌道修正ができる
                </p>
              </div>

              <div className="flex items-center gap-5">
                <TrendingUp className="w-10 h-10 text-[#FCCE00]" />
                <p className="text-3xl font-medium text-gray-800">
                  上手に失敗できる
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}