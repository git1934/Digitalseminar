export function Survey() {
  const qrUrl =
    "https://raw.githubusercontent.com/git1934/seminar_image/17342a09132c2553a8f3cf4bbc09198de6178517/qrcode_docs.google.com.png";

  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center px-6">
      <div className="text-center space-y-6">
   

        {/* QRコード枠 */}
        <div className="bg-white p-2 rounded-3xl shadow-2xl inline-block">
          <img
            src={qrUrl}
            alt="QR Code"
            className="w-100 h-100 md:w-[480px] md:h-[480px] object-contain"
          />
        </div>
            {/* 上の案内テキスト */}
        <div className="text-white leading-tight">
          <h1 className="text-6xl font-extrabold text-white">
             アンケートのお願い
          </h1>
        </div>
      </div>
    </section>
  );
}
