import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { NewspaperSlide } from "./components/NewspaperSlide";
import { POSExpertise } from "./components/POSExpertise";
import { ExperientialSeminarSlide } from "./components/ExperientialSeminarSlide";
import { Survey } from "./components/Survey";
import { Chart7 } from "./components/Chart7";
import { RespondentCountSlide } from "./components/RespondentCountSlide";
import { ThreePoints } from "./components/ThreePoints";
import { Chapter1 } from "./components/Chapter1";
import { Chart1 } from "./components/Chart1";
import { Chart2 } from "./components/Chart2";
import { Chapter1Description } from "./components/Chapter1Description";
import { WhyDifferentiation } from "./components/WhyDifferentiation";
import { DramaticPause } from "./components/DramaticPause";
import { TopDownBottomUpSlide } from "./components/TopDownBottomUpSlide";
import { SimpleAnswerSlide } from "./components/SimpleAnswerSlide";
import { SuccessCaseSlide } from "./components/SuccessCaseSlide";
import { ReallySlide } from "./components/ReallySlide";
import { DifferentiationIntroSlide } from "./components/DifferentiationIntroSlide";
import { StrategyIntroSlide } from "./components/StrategyIntroSlide";
import { StrategyComparison } from "./components/StrategyComparison";
import { DifferentiationContent } from "./components/DifferentiationContent";
import { ConclusionPreludeWide } from "./components/ConclusionPreludeWide";
import { DataIdeaSlide } from "./components/DataIdeaSlide";
import { Chapter2 } from "./components/Chapter2";
import { Chart3 } from "./components/Chart3";
import { Chart4 } from "./components/Chart4";
import { Chapter3Description } from "./components/Chapter3Description";
import { WhyToolBecomesGoalSlide } from "./components/WhyToolBecomesGoalSlide";
import { ChartImageSlide } from "./components/ChartImageSlide";
import { Chart2ImageSlide } from "./components/Chart2ImageSlide";
import { DiverseChangeSlide } from "./components/DiverseChangeSlide";
import { CostEffectivenessSlide } from "./components/CostEffectivenessSlide";
import { InvisibleReasonSlide } from "./components/InvisibleReasonSlide";
import { ClueSlide } from "./components/ClueSlide";
import { BackToBasicsSlide } from "./components/BackToBasicsSlide";
import { ComputerStrengthsSlide } from "./components/ComputerStrengthsSlide";
import { ThreeStrengthsSlide } from "./components/ThreeStrengthsSlide";
import { DigitalStrengthSlide } from "./components/DigitalStrengthSlide";
import { ScaleOutSlide } from "./components/ScaleOutSlide";
import { UserPsychologySlide } from "./components/UserPsychologySlide";
import { ConclusionPreludeWide2 } from "./components/ConclusionPreludeWide2";
import { ScaleOutQuantificationSlide } from "./components/ScaleOutQuantificationSlide";
import { Chapter3 } from "./components/Chapter3";
import { Chart5 } from "./components/Chart5";
import { Chart6 } from "./components/Chart6";
import { Chapter2Description } from "./components/Chapter2Description";
import { DigitalCannotStopSlide } from "./components/DigitalCannotStopSlide";
import { ControlKPI } from "./components/ControlKPI";
import { ExitKPIContent } from "./components/ExitKPIContent";
import { WhyExitKPI } from "./components/WhyExitKPI";
import { ExitKPIExamples } from "./components/ExitKPIExamples";
import { DigitalInvestmentPrinciple } from "./components/DigitalInvestmentPrinciple";
import { BalanceSenseSlide } from "./components/BalanceSenseSlide";
import { ExitIsLossCutting } from "./components/ExitIsLossCutting";
import { TradeOffSlide } from "./components/TradeOffSlide";
import { ActionAttitudeSlide } from "./components/ActionAttitudeSlide";
import { GenerativeAISlide } from "./components/GenerativeAISlide";
import { InformationWarEndSlide } from "./components/InformationWarEndSlide";
import { CommonEnemySlide } from "./components/CommonEnemySlide";
import { JusticeVsEvilSlide } from "./components/JusticeVsEvilSlide";
import { WisdomBattleSlide } from "./components/WisdomBattleSlide";
import { KeyMessage } from "./components/KeyMessage";
import { ConclusionPreludeExpand } from "./components/ConclusionPreludeExpand";
import { ThankYou } from "./components/ThankYou";
import { IntroductionIsNotGoalSlide } from "./components/IntroductionIsNotGoalSlide";
import { LinksComparisonSlide } from "./components/LinksComparisonSlide";
import { TwoPillarsSlide } from "./components/TwoPillarsSlide";
import { ThreeInteractionSlide } from "./components/ThreeInteractionSlide";
import { EnjoyForEveryoneSlide } from "./components/EnjoyForEveryoneSlide";
import { GarbageInGarbageOutSlide } from "./components/GarbageInGarbageOutSlide";
import { CreatorCurseSlide } from "./components/CreatorCurseSlide";
import { FailureSuccessSlide } from "./components/FailureSuccessSlide";
import { ThreePrinciplesSlide } from "./components/ThreePrinciplesSlide";
import { KeyPointsSlide } from "./components/KeyPointsSlide";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // スライドの配列
  const slides = [
    { component: <Hero />, title: "Hero" },
    { component: <Introduction />, title: "Introduction" },
    { component: <NewspaperSlide />, title: "Newspaper" },
    {
      component: <LinksComparisonSlide />,
      title: "Links Comparison",
    },
    { component: <POSExpertise />, title: "POS Expertise" },
    { component: <TwoPillarsSlide />, title: "Two Pillars" },
    {
      component: <ExperientialSeminarSlide />,
      title: "Experiential Seminar",
    },
    {
      component: <ThreeInteractionSlide />,
      title: "Three Interaction",
    },
    { component: <Survey />, title: "Survey" },
    {
      component: <RespondentCountSlide />,
      title: "Respondent Count",
    },
    // { component: <ConclusionPreludeWide />, title: 'Conclusion Prelude Wide' },
    { component: <Chart7 />, title: "Chart 7" },
    {
      component: <EnjoyForEveryoneSlide />,
      title: "Enjoy For Everyone",
    },
    { component: <ThreePoints />, title: "Three Points" },
    { component: <Chapter1 />, title: "Chapter 1" },
    { component: <Chart1 />, title: "Chart 1" },
    { component: <Chart2 />, title: "Chart 2" },
    {
      component: <Chapter1Description />,
      title: "Chapter 1 Description",
    },
    {
      component: <WhyDifferentiation />,
      title: "Why Differentiation",
    },
    { component: <DramaticPause />, title: "Dramatic Pause" },
    {
      component: <TopDownBottomUpSlide />,
      title: "Top Down Bottom Up Slide",
    },
    {
      component: <SimpleAnswerSlide />,
      title: "Simple Answer Slide",
    },
    {
      component: <SuccessCaseSlide />,
      title: "Success Case Slide",
    },
    { component: <ReallySlide />, title: "Really Slide" },
    {
      component: <DifferentiationIntroSlide />,
      title: "Differentiation Intro Slide",
    },
    {
      component: <StrategyIntroSlide />,
      title: "Strategy Intro Slide",
    },
    {
      component: <StrategyComparison />,
      title: "Strategy Comparison",
    },
    {
      component: <DifferentiationContent />,
      title: "Differentiation Content",
    },
    {
      component: <ConclusionPreludeWide />,
      title: "Conclusion Prelude Wide",
    },
    { component: <DataIdeaSlide />, title: "Data Idea Slide" },
    { component: <Chapter2 />, title: "Chapter 2" },
    { component: <Chart3 />, title: "Chart 3" },
    { component: <Chart4 />, title: "Chart 4" },
    {
      component: <Chapter3Description />,
      title: "Chapter 3 Description",
    },
    {
      component: <WhyToolBecomesGoalSlide />,
      title: "Why Tool Becomes Goal Slide",
    },
    { component: <ChartImageSlide />, title: "Chart Image" },
    { component: <Chart2ImageSlide />, title: "Chart 2 Image" },
    {
      component: <DiverseChangeSlide />,
      title: "Diverse Change Slide",
    },
    {
      component: <CostEffectivenessSlide />,
      title: "Cost Effectiveness Slide",
    },
    {
      component: <InvisibleReasonSlide />,
      title: "Invisible Reason Slide",
    },
    { component: <ClueSlide />, title: "Clue" },

    {
      component: <ComputerStrengthsSlide />,
      title: "Computer Strengths",
    },
    {
      component: <ThreeStrengthsSlide />,
      title: "Three Strengths Slide",
    },
    {
      component: <DigitalStrengthSlide />,
      title: "Digital Strength Slide",
    },
    // { component: <ClassificationSlide />, title: 'Classification' },
    { component: <ScaleOutSlide />, title: "Scale Out" },
    {
      component: <UserPsychologySlide />,
      title: "User Psychology",
    },
    {
      component: <ConclusionPreludeWide2 />,
      title: "Conclusion Prelude Wide2",
    },
    {
      component: <ScaleOutQuantificationSlide />,
      title: "Scale Out Quantification",
    },
    { component: <Chapter3 />, title: "Chapter 3" },
    { component: <Chart5 />, title: "Chart 5" },
    { component: <Chart6 />, title: "Chart 6" },
    {
      component: <Chapter2Description />,
      title: "Chapter 2 Description",
    },
    {
      component: <DigitalCannotStopSlide />,
      title: "Digital Cannot Stop",
    },
    { component: <ControlKPI />, title: "Control KPI" },
    {
      component: <IntroductionIsNotGoalSlide />,
      title: "Introduction Is Not Goal",
    },
    {
      component: <ExitKPIContent />,
      title: "Exit KPI Content",
    },
    { component: <WhyExitKPI />, title: "Why Exit KPI" },
    {
      component: <ExitKPIExamples />,
      title: "Exit KPI Examples",
    },
    {
      component: <DigitalInvestmentPrinciple />,
      title: "Digital Investment Principle",
    },
    {
      component: <ExitIsLossCutting />,
      title: "Exit Is Loss Cutting",
    },
    {
      component: <CreatorCurseSlide />,
      title: "Creator Curse",
    },

    {
      component: <GenerativeAISlide />,
      title: "Generative AI",
    },

    {
      component: <InformationWarEndSlide />,
      title: "Information War End",
    },
    {
      component: <WisdomBattleSlide />,
      title: "Wisdom Battle Slide",
    },
    { component: <TradeOffSlide />, title: "Trade Off" },

    {
      component: <ActionAttitudeSlide />,
      title: "Action Attitude",
    },
    {
      component: <GarbageInGarbageOutSlide />,
      title: "Garbage In Garbage Out",
    },
  {
      component: <BalanceSenseSlide />,
      title: "Balance Sense",
    },
    { component: <CommonEnemySlide />, title: "Common Enemy" },
    // {      component: <JusticeVsEvilSlide />,      title: "Justice VS Evil",    },
    {
      component: <FailureSuccessSlide />,
      title: "Failure Success",
    },
    { component: <KeyPointsSlide />, title: "Key Points" },
    { component: <ThreePrinciplesSlide />, title: "Three Principles" },
    {
      component: <BackToBasicsSlide />,
      title: "Back to Basics",
    },
  
    {
      component: <ConclusionPreludeExpand />,
      title: "Conclusion Prelude Expand",
    },
    { component: <KeyMessage />, title: "Key Message" },
    { component: <ThankYou />, title: "Thank You" },

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

  // キーボード操
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowRight" ||
        e.key === " " ||
        e.key === "Enter"
      ) {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setCurrentSlide(totalSlides - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, totalSlides]);

  // スクロールを完全に無効化
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
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
                  ? "bg-[#FCCE00] w-8"
                  : "bg-white/50 hover:bg-white/70 w-2"
              }`}
              aria-label={`スライド${index + 1}へ移動`}
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