export function Chart5() {
  return (
    <section className="h-screen w-screen bg-[#e1e1e1] flex flex-col overflow-hidden">
      {/* タイトル */}
      <header className="flex flex-col items-center justify-center py-8">
        <h1 className="text-6xl font-extrabold">
          アンケート結果５
        </h1>
      </header>

      {/* プレースホルダー */}
      <div className="flex-1 flex items-center justify-center px-16 pb-12">
        <div
          className="w-full h-full max-w-5xl bg-white rounded-2xl shadow-xl
                        flex items-center justify-center"
        >
        </div>
      </div>
    </section>
  );
}
