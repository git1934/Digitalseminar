import React, { useState, useEffect } from 'react';

export function BlankSlide1() {
  // グラフのベースURL
  const baseUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmsITImrRvgjWHzby1xJkBUurl2k-qj9shRaxJFilABiZm0IssaZJs5SiOL_IRa2AQVhgGz2Btthqo/pubchart?oid=777642337&format=interactive";
  
  // キャッシュを回避するための状態管理
  const [chartUrl, setChartUrl] = useState(baseUrl);

  useEffect(() => {
    // 30秒ごとにグラフをリフレッシュするタイマー
    const interval = setInterval(() => {
      const timestamp = new Date().getTime();
      // URLにタイムスタンプをパラメータとして付与（ブラウザに別URLだと認識させる）
      setChartUrl(`${baseUrl}&t=${timestamp}`);
    }, 30000); // 30000ms = 30秒

    return () => clearInterval(interval); // コンポーネントが消える時にタイマーを解除
  }, []);

  return (
    <section className="h-screen overflow-hidden bg-[#e1e1e1] flex flex-col items-center justify-center p-8">
      <div className="w-full h-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden flex items-center justify-center">
        {/* グラフの埋め込み */}
        <iframe
          key={chartUrl} // keyを変えることでReactに要素の再生成を促す
          width="100%"
          height="100%"
          seamless
          frameBorder="0"
          scrolling="no"
          src={chartUrl}
          title="Survey Result"
          className="min-h-[500px]"
        ></iframe>
      </div>
      
      {/* 任意：更新中であることを示す控えめなテキスト（不要なら削除してください） */}
      <p className="text-gray-500 text-xs mt-4">
        ※データは30秒ごとに自動更新されます
      </p>
    </section>
  );
}