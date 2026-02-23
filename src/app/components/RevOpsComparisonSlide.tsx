import { Users, Target, Database, SplitSquareHorizontal, AlertTriangle, RefreshCcw } from 'lucide-react';

export function RevOpsComparisonSlide() {
  const rows = [
    {
      label: '目的',
      oldIcon: Target,
      oldTitle: '各部門のKPI達成',
      newIcon: RefreshCcw,
      newTitle: '全体収益の最大化',
    },
    {
      label: 'デジタル',
      oldIcon: Database,
      oldTitle: 'ツールがバラバラ',
      newIcon: Database,
      newTitle: '統合管理',
    },
    {
      label: '顧客視点',
      oldIcon: AlertTriangle,
      oldTitle: '顧客接点が分断',
      newIcon: Users,
      newTitle: '一貫した顧客体験',
    },
    // {
    //   label: '課題構造',
    //   oldIcon: AlertTriangle,
    //   oldTitle: '部門間の責任の押し付け',
    //   newIcon: RefreshCcw,
    //   newTitle: 'プロセスで改善',
    // },
  ];

  return (
    <section className="h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="w-full max-w-[1700px] px-16 pt-16 pb-32 flex flex-col justify-center">

        {/* Title */}
        <h1 className="text-7xl font-black mb-16 leading-tight text-white">
          従来型 <span className="text-gray-500">vs</span>{' '}
          <span className="text-blue-400">RevOps</span>
        </h1>

        {/* Table */}
        <div className="rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm">

          {/* Header */}
          <div className="grid grid-cols-[240px_1fr_1fr]">
            <div className="p-6 bg-black"></div>

            <div className="p-6 text-4xl font-black text-gray-300 bg-white/5">
              従来型（部門最適）
            </div>

            <div className="p-6 text-4xl font-black text-blue-300 bg-blue-500/10">
              RevOps（全体最適）
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => {
            const OldIcon = row.oldIcon;
            const NewIcon = row.newIcon;

            return (
              <div
                key={index}
                className="grid grid-cols-[240px_1fr_1fr] border-t border-white/10"
              >
                {/* Label */}
                <div className="p-8 bg-white/5 flex items-center">
                  <span className="text-4xl font-black text-white tracking-wide">
                    {row.label}
                  </span>
                </div>

                {/* Old Style */}
                <div className="p-10 flex gap-6 items-center bg-white/5">
                  <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <OldIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-gray-300">
                    {row.oldTitle}
                  </h3>
                </div>

                {/* RevOps */}
                <div className="p-10 flex gap-6 items-center bg-blue-500/5">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                    <NewIcon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-4xl font-black text-blue-300">
                    {row.newTitle}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Message */}
        {/* <div className="mt-16 text-center">
          <p className="text-4xl font-bold text-gray-400 mb-4">
            従来：部門が売上を作る
          </p>
          <p className="text-5xl font-black text-blue-400 tracking-wide">
            RevOps：仕組みが売上を作る
          </p>
        </div> */}

      </div>
    </section>
  );
}