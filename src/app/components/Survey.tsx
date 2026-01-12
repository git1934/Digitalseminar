import { Smartphone, QrCode, CheckSquare } from 'lucide-react';
import qrCodeImage from 'figma:asset/4f0f6996a218adff0591cd8aa2102dba022258c5.png';

export function Survey() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Before We Begin
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            事前アンケートのお願い
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            本日のプレゼンテーションをより有意義なものにするため、<br />
            簡単なアンケートへのご協力をお願いいたします
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Instructions */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckSquare className="w-7 h-7 text-blue-600" />
                回答方法
              </h3>
              
              <ol className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">スマートフォンを準備</h4>
                    <p className="text-gray-600">
                      お手持ちのスマートフォンのカメラアプリを起動してください
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">QRコードを読み取り</h4>
                    <p className="text-gray-600">
                      右のQRコードにカメラを向けてスキャンしてください
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">アンケートに回答</h4>
                    <p className="text-gray-600">
                      表示されたフォームに必要事項をご記入ください（所要時間：約2分）
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <Smartphone className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">アンケート内容</h4>
                  <ul className="space-y-1 text-blue-50">
                    <li>• 現在のデジタル化の取り組み状況</li>
                    <li>• 抱えている課題や悩み</li>
                    <li>• 興味のある施策・テーマ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - QR Code */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-blue-100">
              <div className="bg-white rounded-2xl p-6">
                <img
                  src={qrCodeImage}
                  alt="アンケートQRコード"
                  className="w-full max-w-sm mx-auto"
                />
              </div>
              
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                  <QrCode className="w-6 h-6" />
                  <span className="font-bold text-lg">こちらからアクセス</span>
                </div>
                <p className="text-sm text-gray-500">
                  カメラでQRコードを読み取ってください
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-lg">
                ご協力ありがとうございます！<br />
                <span className="text-sm text-gray-500">
                  回答いただいた内容は本日のセッションに反映させていただきます
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
