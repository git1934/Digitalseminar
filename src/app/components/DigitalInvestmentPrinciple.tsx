import { Shield, TrendingUp, CheckCircle } from 'lucide-react';

export function DigitalInvestmentPrinciple() {
  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-[#e1e1e1] px-12 py-6">
      <div className="max-w-[1600px] mx-auto w-full h-full flex flex-col justify-center gap-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-6xl font-black text-black mb-2 leading-tight tracking-tight">
            デジタルは経営投資。原則は<span className="text-black bg-[#FCCE00] px-4 py-1 rounded-xl ml-3">損小利大</span>
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 min-h-0">
          {/* Left Column: 損小 (Loss Minimization) */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-black flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-[#FCCE00]" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-black leading-tight">損小</h3>
                <p className="text-lg text-gray-700 leading-tight">リスクの最小化</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xl font-bold text-black leading-snug">小さく始めて素早く検証</p>
                    <p className="text-base text-gray-700 leading-snug">MVP・アジャイル開発</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xl font-bold text-black leading-snug">損切りルールの明確化</p>
                    <p className="text-base text-gray-700 leading-snug">撤退・修正基準を事前設定</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xl font-bold text-black leading-snug">ROI測定と早期見極め</p>
                    <p className="text-base text-gray-700 leading-snug">不採算を素早く判断</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 補足ブロック */}
            <div className="bg-black rounded-xl p-4 mt-auto">
              <p className="text-[#FCCE00] font-bold text-lg leading-snug text-center">
                失敗を恐れず、素早く学習するサイクルを確立
              </p>
            </div>
          </div>

          {/* Right Column: 利大 (Profit Maximization) */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-[#FCCE00] flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-[#FCCE00] rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-black" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-black leading-tight">利大</h3>
                <p className="text-lg text-gray-700 leading-tight">利益の最大化</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="bg-[#FCCE00]/20 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xl font-bold text-black leading-snug">データ・AI活用</p>
                    <p className="text-base text-gray-700 leading-snug">収益力の向上を実現</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FCCE00]/20 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xl font-bold text-black leading-snug">差別化・競争力強化</p>
                    <p className="text-base text-gray-700 leading-snug">デジタルで優位性を構築</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FCCE00]/20 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xl font-bold text-black leading-snug">スケール前提の設計</p>
                    <p className="text-base text-gray-700 leading-snug">成長を支えるビジネスモデル</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 補足ブロック */}
            <div className="bg-[#FCCE00] rounded-xl p-4 mt-auto">
              <p className="text-black font-bold text-lg leading-snug text-center">
                継続的な改善と成長を前提に投資する
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}