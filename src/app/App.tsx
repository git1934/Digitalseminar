import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Introduction } from "./components/Introduction";
import { Hero } from "./components/Hero";
import { Survey } from "./components/Survey";
import { ThreePoints } from "./components/ThreePoints";
import { Chapter1 } from "./components/Chapter1";
import { Chart1 } from "./components/Chart1";
import { Chart2 } from "./components/Chart2";
import { Chapter1Description } from "./components/Chapter1Description";
import { WhyDifferentiation } from "./components/WhyDifferentiation";
import { DifferentiationContent } from "./components/DifferentiationContent";
import { DifferentiationPoints } from "./components/DifferentiationPoints";
import { Chapter2 } from "./components/Chapter2";
import { BlankSlide2 } from "./components/BlankSlide2";
import { Chapter2Description } from "./components/Chapter2Description";
import { WhyExitKPI } from "./components/WhyExitKPI";
import { ExitKPIContent } from "./components/ExitKPIContent";
import { ExitKPIExamples } from "./components/ExitKPIExamples";
import { ExitIsLossCutting } from "./components/ExitIsLossCutting";
import { DigitalInvestmentPrinciple } from "./components/DigitalInvestmentPrinciple";
import { Chapter3 } from "./components/Chapter3";
import { BlankSlide3 } from "./components/BlankSlide3";
import { Chapter3Description } from "./components/Chapter3Description";
import { AvoidMeansContent } from "./components/AvoidMeansContent";
import { AvoidMeansExamples } from "./components/AvoidMeansExamples";
import { AvoidMeansMethods } from "./components/AvoidMeansMethods";
import { FinalSummary } from "./components/FinalSummary";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // スライドの配列
  const slides = [
    { component: <Hero />, title: 'Hero' },
    { component: <Introduction />, title: 'Introduction' },
    { component: <Survey />, title: 'Survey' },
    { component: <ThreePoints />, title: 'Three Points' },
    { component: <Chapter1 />, title: 'Chapter 1' },
    { component: <Chart1 />, title: 'Chart 1' },
    { component: <Chart2 />, title: 'Chart 2' },
    { component: <Chapter1Description />, title: 'Chapter 1 Description' },
    { component: <WhyDifferentiation />, title: 'Why Differentiation' },
    { component: <DifferentiationContent />, title: 'Differentiation Content' },
    { component: <DifferentiationPoints />, title: 'Differentiation Points' },
    { component: <Chapter2 />, title: 'Chapter 2' },
    { component: <BlankSlide2 />, title: 'Blank Slide 2' },
    { component: <Chapter2Description />, title: 'Chapter 2 Description' },
    { component: <WhyExitKPI />, title: 'Why Exit KPI' },
    { component: <ExitKPIContent />, title: 'Exit KPI Content' },
    { component: <ExitKPIExamples />, title: 'Exit KPI Examples' },
    { component: <ExitIsLossCutting />, title: 'Exit Is Loss Cutting' },
    { component: <DigitalInvestmentPrinciple />, title: 'Digital Investment Principle' },
    { component: <Chapter3 />, title: 'Chapter 3' },
    { component: <BlankSlide3 />, title: 'Blank Slide 3' },
    { component: <Chapter3Description />, title: 'Chapter 3 Description' },
    { component: <AvoidMeansContent />, title: 'Avoid Means Content' },
    { component: <AvoidMeansExamples />, title: 'Avoid Means Examples' },
    { component: <AvoidMeansMethods />, title: 'Avoid Means Methods' },
    { component: <FinalSummary />, title: 'Final Summary' },
  ];

  const totalSlides = slides.length;

  // 次のスライドへ
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // 前のスライドへ
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // クリックで次のスライドへ（右半分をクリックした場合）
  const handleClick = (e: React.MouseEvent) => {
    const clickX = e.clientX;
    const windowWidth = window.innerWidth;
    
    // 左1/4をクリックしたら前へ、それ以外は次へ
    if (clickX < windowWidth / 4) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  // キーボード操作
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  // スクロールを完全に無効化
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div 
      className="h-screen w-screen overflow-hidden bg-white cursor-pointer relative"
      onClick={handleClick}
    >
      {/* 現在のスライドを表示 */}
      <div className="h-full w-full">
        {slides[currentSlide].component}
      </div>

      {/* ナビゲーションボタン（左） */}
      {currentSlide > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="fixed left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-50 opacity-0 hover:opacity-100"
          aria-label="前のスライド"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* ナビゲーションボタン（右） */}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="fixed right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-50 opacity-0 hover:opacity-100"
          aria-label="次のスライド"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* ページインジケーター */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/30 backdrop-blur-sm px-5 py-3 rounded-full z-50">
        <div className="flex gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#FCCE00] w-8'
                  : 'bg-white/50 hover:bg-white/70 w-2'
              }`}
              aria-label={`スライド ${index + 1} へ移動`}
            />
          ))}
        </div>
        <div className="text-white text-sm font-medium ml-2">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>

      {/* 操作ヒント（最初のスライドでのみ表示） */}
      {currentSlide === 0 && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 text-white/60 text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full animate-pulse z-40">
          クリックまたは矢印キーでスライド送り
        </div>
      )}
    </div>
  );
}