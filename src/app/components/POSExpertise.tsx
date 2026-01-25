import { BarChart3, TrendingUp, Users } from 'lucide-react';

export function POSExpertise() {
  const dataTypes = [
    { icon: TrendingUp, label: '売上データ' },
    { icon: Users, label: '顧客データ' },
    { icon: BarChart3, label: '商品データ' },
  ];

  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-[#e1e1e1] px-16 py-16">
      <div className="max-w-7xl mx-auto w-full text-center">
        {/* メインメッセージ */}
        <div className="mb-16">
          <h1 className="text-8xl font-extrabold text-black mb-6 leading-tight">
            私は<span className="text-[#FCCE00] bg-black px-6 py-2 inline-block">POSデータ活用</span>の<br />
            支援が得意です
          </h1>
        </div>

        {/* データタイプのアイコン */}
        <div className="flex justify-center gap-12 mb-16">
          {dataTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center mb-4 shadow-xl">
                  <Icon className="w-12 h-12 text-[#FCCE00]" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-bold text-black">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* 補足テキスト */}
        <div className="max-w-5xl mx-auto">
          <p className="text-3xl text-gray-800 leading-relaxed font-medium">
            売上データ・顧客データ・商品データを活かし、<br />
            経営判断につながる形で整理・活用を支援します
          </p>
        </div>
      </div>
    </section>
  );
}
