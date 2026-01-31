export function Survey() {
  const qrUrl =
    "https://raw.githubusercontent.com/git1934/seminar_image/17342a09132c2553a8f3cf4bbc09198de6178517/qrcode_docs.google.com.png";

  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center px-6">
      <div className="text-center space-y-10">

        {/* 上の案内テキスト */}
        <div className="text-white leading-tight">
          <h1 className="text-6xl md:text-7xl font-black tracking-wide">
             アンケートのお願い
          </h1>
          {/* <h2 className="text-5xl md:text-6xl font-black mt-4">
            アンケートのお願い
          </h2> */}
        </div>

        {/* QRコード枠 */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl inline-block">
          <img
            src={qrUrl}
            alt="QR Code"
            className="w-80 h-80 md:w-[520px] md:h-[520px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
