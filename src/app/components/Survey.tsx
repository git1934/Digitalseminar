import { Smartphone, QrCode, CheckSquare } from "lucide-react";

export function Survey() {
  // QRコード用のプレースホルダー画像（実際のQRコードに置き換えてください）
  const qrCodeDataUrl =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='white'/%3E%3Cg fill='black'%3E%3Crect x='50' y='50' width='30' height='30'/%3E%3Crect x='50' y='90' width='30' height='30'/%3E%3Crect x='50' y='130' width='30' height='30'/%3E%3Crect x='90' y='50' width='30' height='30'/%3E%3Crect x='90' y='130' width='30' height='30'/%3E%3Crect x='130' y='50' width='30' height='30'/%3E%3Crect x='130' y='90' width='30' height='30'/%3E%3Crect x='130' y='130' width='30' height='30'/%3E%3Crect x='220' y='50' width='30' height='30'/%3E%3Crect x='220' y='90' width='30' height='30'/%3E%3Crect x='220' y='130' width='30' height='30'/%3E%3Crect x='180' y='50' width='30' height='30'/%3E%3Crect x='180' y='130' width='30' height='30'/%3E%3Crect x='50' y='220' width='30' height='30'/%3E%3Crect x='90' y='220' width='30' height='30'/%3E%3Crect x='130' y='220' width='30' height='30'/%3E%3Crect x='50' y='180' width='30' height='30'/%3E%3Crect x='130' y='180' width='30' height='30'/%3E%3C/g%3E%3Ctext x='150' y='280' text-anchor='middle' font-size='14' fill='%23666'%3ESurvey QR Code%3C/text%3E%3C/svg%3E";

  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-12 py-12">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mt-4 mb-6">
            事前アンケートのお願い
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Instructions */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <CheckSquare className="w-8 h-8 text-[#FCCE00]" />
                回答方法
              </h3>

              <ol className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FCCE00] text-black rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      スマートフォンを準備
                    </h4>
                    <p className="text-lg text-gray-600">
                      お手持ちのスマートフォンのカメラアプリを起動してください
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FCCE00] text-black rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      QRコードを読み取り
                    </h4>
                    <p className="text-lg text-gray-600">
                      右のQRコードにカメラを向けてスキャンしてください
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FCCE00] text-black rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      アンケートに回答
                    </h4>
                    <p className="text-lg text-gray-600">
                      表示されたフォームに必要事項をご記入ください（所要時間：約2分）
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-black to-gray-800 rounded-xl p-6 text-white">
              <div className="flex items-start gap-4">
                <Smartphone className="w-8 h-8 flex-shrink-0 mt-1 text-[#FCCE00]" />
                <div>
                  <h4 className="font-bold text-xl mb-3">
                    アンケート内容
                  </h4>
                  <ul className="space-y-1 text-lg text-gray-300">
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
            <div className="bg-white rounded-2xl p-6 shadow-2xl border-4 border-[#FCCE00]">
              <div className="bg-white rounded-xl p-4">
                <img
                  src={qrCodeDataUrl}
                  alt="アンケートQRコード"
                  className="w-full max-w-xs mx-auto"
                />
              </div>

              <div className="mt-5 text-center">
                <div className="flex items-center justify-center gap-3 text-[#FCCE00] mb-2">
                  <QrCode className="w-6 h-6" />
                  <span className="font-bold text-xl">
                    こちらからアクセス
                  </span>
                </div>
                <p className="text-base text-gray-500">
                  カメラでQRコードを読み取ってください
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl text-gray-600">
                ご協力ありがとうございます！
                <br />
                <span className="text-base text-gray-500">
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