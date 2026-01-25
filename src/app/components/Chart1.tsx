export function Chart1() {
  return (
    <section className="h-screen w-screen bg-[#e1e1e1] flex flex-col overflow-hidden">
      {/* タイトル */}
      <header className="flex items-center justify-center py-8">
        <h1 className="text-6xl font-extrabold">
          アンケート結果１
        </h1>
      </header>

      {/* グラフ */}
      <div className="flex-1 flex items-center justify-center px-16 pb-12">
        <div className="relative w-full h-full max-w-5xl bg-white rounded-2xl shadow-xl">
          {/* iframeを中央固定 */}
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRmsITImrRvgjWHzby1xJkBUurl2k-qj9shRaxJFilABiZm0IssaZJs5SiOL_IRa2AQVhgGz2Btthqo/pubchart?oid=777642337&format=interactive"
            className="
              absolute
              inset-0
              m-auto
              w-[700px]
              h-[450px]
            "
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </section>
  );
}