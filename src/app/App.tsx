import { Introduction } from "./components/Introduction";
import { Hero } from "./components/Hero";
import { Survey } from "./components/Survey";
import { ThreePoints } from "./components/ThreePoints";
import { Chapter1 } from "./components/Chapter1";
import { DifferentiationContent } from "./components/DifferentiationContent";
import { DifferentiationPoints } from "./components/DifferentiationPoints";
import { Chapter2 } from "./components/Chapter2";
import { WhyExitKPI } from "./components/WhyExitKPI";
import { ExitKPIContent } from "./components/ExitKPIContent";
import { ExitKPIExamples } from "./components/ExitKPIExamples";
import { Chapter3 } from "./components/Chapter3";
import { AvoidMeansContent } from "./components/AvoidMeansContent";
import { AvoidMeansMethods } from "./components/AvoidMeansMethods";
import { Challenges } from "./components/Challenges";
import { FinalSummary } from "./components/FinalSummary";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <div>
        <Hero />
      </div>
      <div>
        <Introduction />
      </div>
      <div>
        <Survey />
      </div>
      <div>
        <ThreePoints />
      </div>
      <div>
        <Chapter1 />
      </div>
      <div>
        <DifferentiationContent />
      </div>
      <div>
        <DifferentiationPoints />
      </div>
      <div>
        <Chapter2 />
      </div>
      <div>
        <WhyExitKPI />
      </div>
      <div>
        <ExitKPIContent />
      </div>
      <div>
        <ExitKPIExamples />
      </div>
      <div>
        <Chapter3 />
      </div>
      <div>
        <AvoidMeansContent />
      </div>
      <div>
        <AvoidMeansMethods />
      </div>
      <div>
        <Challenges />
      </div>
      <div>
        <FinalSummary />
      </div>
    </div>
  );
}