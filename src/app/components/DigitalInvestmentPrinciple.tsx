import { Shield, TrendingUp, CheckCircle } from "lucide-react";

export function DigitalInvestmentPrinciple() {
  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-[#e1e1e1] px-12 py-6">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col justify-center gap-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-6xl font-black text-black mb-2 leading-tight tracking-tight">
            デジタル戦略の原則
         
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {/* Left Column: 損小 (Loss Minimization) */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-black">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-[#FCCE00]" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-black leading-tight">
                  損小（リスクの最小化）
                </h3>
                {/* <p className="text-lg text-gray-700 leading-tight">
                  リスクの最小化
                </p> */}
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-2xl font-bold text-black leading-snug">
                      小さく始めて素早く検証
                    </p>
                    <p className="text-xl text-gray-700 leading-snug">
                      巨大なシステムを一括導入するのではなく、小さなプロジェクトからスタートし、効果を確認しながら拡大する。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-2xl font-bold text-black leading-snug">
                      損切りルールの明確化
                    </p>
                    <p className="text-xl text-gray-700 leading-snug">
                      予期せぬ成果が出ない場合に、早い段階で撤退または修正するルールを設ける。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-2xl font-bold text-black leading-snug">
                      ROI測定と早期見極め
                    </p>
                    <p className="text-xl text-gray-700 leading-snug">
                      デジタル投資額に対し、削減コストや売上増などのメリットを定量的に測定し、不採算な投資を早期に特定する。{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 補足ブロック */}
            {/* <div className="bg-black rounded-xl p-4">
              <p className="text-[#FCCE00] font-bold text-lg leading-snug text-center">
                失敗を恐れず、素早く学習するサイクルを確立
              </p>
            </div> */}
          </div>

          {/* Right Column: 利大 (Profit Maximization) */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-[#FCCE00]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-[#FCCE00] rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-black" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-black leading-tight">
                  利大（利益の最大化）
                </h3>
                {/* <p className="text-lg text-gray-700 leading-tight">
                  利益の最大化
                </p> */}
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="bg-[#FCCE00]/20 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-2xl font-bold text-black leading-snug">
                      データ・AI活用
                    </p>
                    <p className="text-xl text-gray-700 leading-snug">
                      データやAIを活用し、業務効率化だけでなく、新しい顧客体験や商品、サービスを提供して売上を最大化する。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FCCE00]/20 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-2xl font-bold text-black leading-snug">
                      差別化・競争力強化
                    </p>
                    <p className="text-xl text-gray-700 leading-snug">
                      デジタルを駆使し、独自のバリューを生み出すことで、他社と差別化を図る。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FCCE00]/20 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-2xl font-bold text-black leading-snug">
                      スケール前提の設計
                    </p>
                    <p className="text-xl text-gray-700 leading-snug">
                      デジタル技術の強みである、低コストでの多展開（密度・規模の経済）を意識したビジネスモデルを構築する。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 補足ブロック */}
            {/* <div className="bg-[#FCCE00] rounded-xl p-4">
              <p className="text-black font-bold text-lg leading-snug text-center">
                継続的な改善と成長を前提に投資する
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}