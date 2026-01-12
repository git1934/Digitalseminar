import { Cloud, Database, ShoppingCart, MessageSquare, LineChart, Shield } from 'lucide-react';

export function KeyInitiatives() {
  const initiatives = [
    {
      icon: Cloud,
      title: 'クラウド移行',
      description: 'コスト削減と柔軟性向上のためのクラウドサービス活用',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'データ活用基盤',
      description: '顧客データの一元管理と分析による意思決定の高度化',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: ShoppingCart,
      title: 'EC・オンライン展開',
      description: 'オンラインチャネルの強化による販路拡大',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: MessageSquare,
      title: 'デジタルマーケティング',
      description: 'SNSと広告の効果的な活用による顧客獲得',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: LineChart,
      title: '業務プロセスの自動化',
      description: 'RPAとAIツールによる定型業務の効率化',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'セキュリティ強化',
      description: 'サイバーセキュリティ対策とデータ保護の徹底',
      color: 'from-gray-600 to-gray-800',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Section 03
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            具体的な施策
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            中小企業が取り組むべき6つのデジタル施策
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
