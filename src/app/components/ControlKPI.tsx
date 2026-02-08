export function ControlKPI() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
      
      {/* 背景：計測グリッドと波形パターン */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">

        {/* 精密グリッド */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 垂直線（細かい目盛り） */}
            {[...Array(50)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={`${i * 2}%`}
                y1="0"
                x2={`${i * 2}%`}
                y2="100%"
                stroke="#3B82F6"
                strokeWidth="0.2"
                strokeDasharray="2,4"
              />
            ))}
            {/* 水平線（細かい目盛り） */}
            {[...Array(40)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={`${i * 2.5}%`}
                x2="100%"
                y2={`${i * 2.5}%`}
                stroke="#3B82F6"
                strokeWidth="0.2"
                strokeDasharray="2,4"
              />
            ))}
            {/* 太いグリッド線 */}
            {[...Array(10)].map((_, i) => (
              <g key={`grid-${i}`}>
                <line
                  x1={`${i * 10}%`}
                  y1="0"
                  x2={`${i * 10}%`}
                  y2="100%"
                  stroke="#60A5FA"
                  strokeWidth="0.4"
                />
                <line
                  x1="0"
                  y1={`${i * 10}%`}
                  x2="100%"
                  y2={`${i * 10}%`}
                  stroke="#60A5FA"
                  strokeWidth="0.4"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* 波形パターン（計測データ風） */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 波形1 */}
            <path
              d="M0,300 Q100,250 200,300 T400,300 T600,250 T800,300 T1000,280"
              fill="none"
              stroke="#10B981"
              strokeWidth="1.5"
              opacity="0.6"
              transform="translate(-50, 0)"
            />
            {/* 波形2 */}
            <path
              d="M0,400 Q150,350 300,400 T500,380 T700,400 T900,360"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              opacity="0.6"
              transform="translate(-30, 0)"
            />
            {/* 波形3（パルス風） */}
            <path
              d="M50,500 L50,450 L150,450 L150,500 L250,500 L250,450 L350,450 L350,500 L450,500 L450,450 L550,450 L550,500"
              fill="none"
              stroke="#EF4444"
              strokeWidth="1.5"
              opacity="0.6"
              transform="translate(0, -50)"
            />
          </svg>
        </div>

        {/* 計測ポイントと座標軸 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 座標軸 */}
            <line
              x1="10%"
              y1="80%"
              x2="90%"
              y2="80%"
              stroke="#93C5FD"
              strokeWidth="1"
            />
            <line
              x1="10%"
              y1="80%"
              x2="10%"
              y2="20%"
              stroke="#93C5FD"
              strokeWidth="1"
            />
            
            {/* 計測ポイント */}
            {[
              { x: 20, y: 60 },
              { x: 35, y: 45 },
              { x: 50, y: 70 },
              { x: 65, y: 30 },
              { x: 80, y: 50 }
            ].map((point, i) => (
              <g key={`point-${i}`}>
                <circle
                  cx={`${point.x}%`}
                  cy={`${point.y}%`}
                  r="3"
                  fill="#F59E0B"
                />
                {/* ポイントから軸への補助線 */}
                <line
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${point.x}%`}
                  y2="80%"
                  stroke="#F59E0B"
                  strokeWidth="0.5"
                  strokeDasharray="3,3"
                />
                <line
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2="10%"
                  y2={`${point.y}%`}
                  stroke="#F59E0B"
                  strokeWidth="0.5"
                  strokeDasharray="3,3"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* 四隅の計測器風フレーム */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <div className="absolute top-0 left-0 w-full h-full border-2 border-[#3B82F6] rounded-lg">
            {/* 計測器の目盛り */}
            <div className="absolute top-2 left-2 right-2 flex justify-between text-[#3B82F6] text-xs">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32">
          <div className="absolute top-0 right-0 w-full h-full border-2 border-[#10B981] rounded-full opacity-60" />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32">
          <div className="absolute bottom-0 left-0 w-full h-full border-2 border-[#8B5CF6] opacity-60" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <div className="absolute bottom-0 right-0 w-full h-full">
            {/* バーチャート風 */}
            <div className="absolute bottom-0 left-1/4 w-3 h-1/2 bg-[#EF4444] opacity-60"></div>
            <div className="absolute bottom-0 left-2/4 w-3 h-3/4 bg-[#F59E0B] opacity-60"></div>
            <div className="absolute bottom-0 left-3/4 w-3 h-1/3 bg-[#3B82F6] opacity-60"></div>
          </div>
        </div>
      </div>

      {/* メインテキスト */}
      <h1 className="relative z-10 text-white font-black text-[6rem] md:text-[8rem] tracking-tight leading-tight text-center px-8">
        計測できないものは<br />
        <span className="text-[#3B82F6]">制御</span>できない
      </h1>
    </section>
  );
}
