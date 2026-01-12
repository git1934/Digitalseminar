import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export function Conclusion() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1579389248774-07907f421a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzY4MjIwMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="チームミーティング"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-white">
        <div className="text-center mb-16">
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
            Section 05
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            まとめ
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 mb-12 border border-white/20">
          <h3 className="text-3xl font-bold mb-8">成功のための3つのポイント</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">経営層のコミットメント</h4>
                <p className="text-blue-100">
                  デジタル戦略を経営の最優先課題として位置づけ、リーダーシップを発揮する
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">段階的なアプローチ</h4>
                <p className="text-blue-100">
                  小さく始めて成功体験を積み重ね、徐々に規模を拡大していく
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">人材育成と組織文化</h4>
                <p className="text-blue-100">
                  継続的な学習機会の提供とデジタルファーストな企業文化の醸成
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl mb-8">
            デジタル戦略は、未来への投資です。<br />
            今日から始めることで、明日の競争優位性を築きましょう。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              詳細資料をダウンロード
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white/10 transition-colors"
            >
              お問い合わせ
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-blue-100">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>03-1234-5678</span>
              </div>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              © 2026 デジタル戦略コンサルティング. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
