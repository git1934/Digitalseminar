export function TwoPillarsSlide() {
  return (
    <section className="h-screen w-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">

      {/* 上部余白を追加 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-[14vh] pb-[25vh]">
        
        {/* タイトル */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold text-white text-center tracking-wide leading-tight">
            <span className="text-[#00d4ff] mx-3">大企業</span>
            と
            <span className="text-[#ff9500] mx-3">中小企業</span>
            をデータで支える
          </h1>
        </div>

        {/* 柱エリア */}
        <div className="relative flex items-end gap-24 mb-12">
          
          {/* 左柱 */}
          <div className="w-80 h-[400px] bg-[#001f2b] border-4 border-[#00d4ff] rounded-2xl flex flex-col items-center p-8 pt-10">
            <h2 className="text-3xl font-bold text-[#00d4ff] mb-8 text-center">
              Enterprise<br/>Data Science
            </h2>
            <div className="space-y-4 w-full">
              {["高度分析","機械学習","データ基盤","AI活用"].map((item)=>(
                <div key={item} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00d4ff] rounded-full" />
                  <p className="text-3xl text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右柱 */}
          <div className="w-80 h-[400px] bg-[#2b1600] border-4 border-[#ff9500] rounded-2xl flex flex-col items-center p-8 pt-10">
            <h2 className="text-3xl font-bold text-[#ff9500] mb-8 text-center">
              SMB Data-Driven<br/>Management
            </h2>
            <div className="space-y-4 w-full">
              {["売上管理","POS活用","販促物作成","商圏分析"].map((item)=>(
                <div key={item} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#ff9500] rounded-full" />
                  <p className="text-3xl text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 接続ライン */}
          <div className="absolute left-[calc(50%-176px)] bottom-[-48px] w-1 h-12 bg-[#00d4ff]" />
          <div className="absolute right-[calc(50%-176px)] bottom-[-48px] w-1 h-12 bg-[#ff9500]" />
        </div>

        {/* 土台 */}
   <div className="w-[680px] h-40 bg-white border-t-4 border-black rounded-2xl flex items-center justify-center px-10 py-6">
  <p className="text-4xl text-black font-semibold tracking-widest text-center">
    データ活用のシナジー効果
  </p>
</div>


      </div>
    </section>
  );
}
