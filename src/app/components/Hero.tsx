import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1767788543704-d68ce083048e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjgxOTI4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="デジタルトランスフォーメーション"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-block px-4 py-2 bg-blue-600/80 rounded-full text-sm font-medium">
          プレゼンテーション 2026
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          これからの変化に備える<br />
          中小企業のデジタル戦略
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200">
          持続的な成長を実現するための実践的アプローチ
        </p>
        
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto" />
        </div>
      </div>
    </section>
  );
}
