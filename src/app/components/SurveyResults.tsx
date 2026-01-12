import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Building2, Loader2, RefreshCw } from 'lucide-react';

interface QuestionData {
  [answer: string]: number;
}

interface SurveyData {
  q1: QuestionData;
  q2: QuestionData;
  q3: QuestionData;
  q4: QuestionData;
  q5: QuestionData;
  q6: QuestionData;
}

const questions = [
  { key: 'q1', label: '業種' },
  { key: 'q2', label: '規模感' },
  { key: 'q3', label: '立場' },
  { key: 'q4', label: 'デジタル化現状' },
  { key: 'q5', label: '怖いもの' },
  { key: 'q6', label: '期待' },
];

export function SurveyResults() {
  const [data, setData] = useState<SurveyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string>('q1');
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwwSa_oDl5Hy7NGqV_5DNn61KP6sJQU868f3hjumhpPWBzLidT-d_ySo0TZ8edtBcQPYA/exec'
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
      setLastUpdate(new Date());
    } catch (err) {
      setError('データの取得に失敗しました');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // 5秒ごとに更新
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <Loader2 className="w-16 h-16 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-xl text-gray-600">アンケート結果を読み込み中...</p>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <p className="text-xl text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  // 現在の質問のデータをグラフ用に変換
  const currentData = data[currentQuestion as keyof SurveyData];
  const chartData = Object.entries(currentData).map(([name, value]) => ({
    name,
    回答数: value,
  }));

  // 総回答数を計算（q1の合計を使用）
  const totalResponses = Object.values(data.q1).reduce((sum, count) => sum + count, 0);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Survey Results
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            アンケート結果のご紹介
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            事前にいただいたアンケートの集計結果をご紹介します
          </p>
        </div>

        {/* 統計情報 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">{totalResponses}</div>
            <p className="text-gray-600">回答者数</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <Building2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">{questions.length}</div>
            <p className="text-gray-600">質問項目数</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <RefreshCw className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-lg font-bold text-gray-900 mb-2">
              {lastUpdate.toLocaleTimeString('ja-JP')}
            </div>
            <p className="text-gray-600">最終更新時刻</p>
          </div>
        </div>

        {/* 質問切り替えボタン */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {questions.map((q) => (
              <button
                key={q.key}
                onClick={() => setCurrentQuestion(q.key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentQuestion === q.key
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        {/* グラフ表示 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">
            {questions.find((q) => q.key === currentQuestion)?.label}
          </h3>

          <ResponsiveContainer width="100%" height={500}>
            <BarChart 
              data={chartData} 
              layout="horizontal"
              margin={{ top: 5, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={100}
                interval={0}
                style={{ fontSize: '14px' }}
              />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '12px'
                }}
              />
              <Legend />
              <Bar 
                dataKey="回答数" 
                fill="#3B82F6" 
                radius={[8, 8, 0, 0]}
                animationDuration={500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* まとめ */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            皆様のご意見を踏まえて
          </h3>
          <p className="text-lg text-blue-50">
            本日のプレゼンテーションでは、アンケート結果を反映した内容をお届けします
          </p>
          <p className="text-sm text-blue-100 mt-4">
            ※ データは5秒ごとに自動更新されます
          </p>
        </div>
      </div>
    </section>
  );
}