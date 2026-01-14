import { Database, Heart, Target, TrendingUp, Zap, CheckCircle } from 'lucide-react';

export function WhyExitKPI() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#e1e1e1] px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-[#FCCE00] text-black rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Chapter 02 - Deep Dive
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
            撤退KPIが重要な理由
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            データ活用は、前に進むためだけではなく、<br />
            <strong className="text-[#FCCE00]">撤退判断にこそ必要</strong>です
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column: Why Withdrawal is Difficult */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#FCCE00]" />
              </div>
              <h2 className="text-2xl font-bold text-black">
                なぜ撤退判断は難しいのか
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ITやデジタル施策は、始めることは簡単です。<br />
              しかし、<strong className="text-black font-bold">やめる判断はとても難しい</strong>。
            </p>

            <div className="bg-[#FCCE00]/10 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-black mb-4">判断を鈍���せる要因</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FCCE00] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">ここまでお金をかけたから</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FCCE00] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">担当者が頑張っているから</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FCCE00] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">もう少し続ければ成果が出るかもしれないから</p>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-xl p-6">
              <p className="text-[#FCCE00] font-bold text-lg">
                こうした「感情」や「期待」が判断を鈍らせ、<br />
                効果が出ていない施策を惰性で続けてしまいます
              </p>
            </div>
          </div>

          {/* Right Column: Data Usage for Withdrawal */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FCCE00] rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-2xl font-bold text-black">
                データ活用は<br />「感情を排除するため」にある
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ここで重要なのが、<strong className="text-[#FCCE00] font-bold">撤退KPI</strong>です。<br />
              「この数値に届かなければやめる」と<br />
              事前に決めておく指標のことです。
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#FCCE00] flex-shrink-0 mt-1" />
                  <p className="text-gray-800">
                    <strong>○ヶ月後に利用率が〇％に達しなければ撤退</strong>
                  </p>
                </div>
              </div>
              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#FCCE00] flex-shrink-0 mt-1" />
                  <p className="text-gray-800">
                    <strong>月間工数削減が〇時間未満なら見直し</strong>
                  </p>
                </div>
              </div>
              <div className="bg-[#e1e1e1] rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#FCCE00] flex-shrink-0 mt-1" />
                  <p className="text-gray-800">
                    <strong>売上貢献が〇円未満なら中止</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FCCE00] rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">これにより実現すること</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span className="text-black">担当者の頑張りを否定せず</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span className="text-black">感情論に流されず</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span className="text-black">経営として冷静な判断ができる</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Reframing Failure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Failure Reframing */}
          <div className="bg-black rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FCCE00] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-2xl font-bold">
                失敗を「失敗」にしないための考え方
              </h2>
            </div>

            <p className="text-[#e1e1e1] text-lg mb-6 leading-relaxed">
              撤退KPIを決めることは、<br />
              「失敗を前提にすること」ではありません。<br />
              むしろ逆です。
            </p>

            <div className="bg-white/10 rounded-xl p-6 mb-4">
              <p className="text-2xl font-bold text-[#FCCE00] mb-4">
                早くやめられたこと自体が、成功
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FCCE00] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-[#e1e1e1]">ダメだと分かるまでに時間をかけなかった</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FCCE00] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-[#e1e1e1]">次の挑戦にリソースを回せた</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FCCE00] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-[#e1e1e1]">学びを得て、次に活かせる</p>
                </div>
              </div>
            </div>

            <p className="text-white text-lg">
              これは、変化が激しい時代において、<br />
              <strong className="text-[#FCCE00]">非常に重要な経営判断</strong>です。
            </p>
          </div>

          {/* Future Digital Strategy */}
          <div className="bg-gradient-to-br from-[#FCCE00] to-[#e6bc00] rounded-2xl p-8 text-black">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#FCCE00]" />
              </div>
              <h2 className="text-2xl font-bold">
                これからの時代のデジタル戦略
              </h2>
            </div>

            <div className="bg-black/10 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold mb-3">環境の特性</h3>
              <div className="space-y-2">
                <p className="text-black/80">• 技術は進化し続け</p>
                <p className="text-black/80">• 環境は複雑になり</p>
                <p className="text-black/80">• 正解はすぐに変わります</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">強い企業が実践していること</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <p className="font-medium">すべてを当てにいかない</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <p className="font-medium">小さく試す</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <p className="font-medium">数値で見極める</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <p className="font-medium">ダメなら素早く引く</p>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-xl p-6">
              <p className="text-white text-lg leading-relaxed">
                <strong className="text-[#FCCE00] text-xl">データ活用経営とは、</strong><br />
                成功を最大化するためだけのものではなく、<br />
                <strong className="text-[#FCCE00]">失敗を最小化するための仕組み</strong>でもある。<br />
                <br />
                その象徴が、撤退KPIです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
