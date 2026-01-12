import { Introduction } from "./components/Introduction";
import { Hero } from "./components/Hero";
import { Survey } from "./components/Survey";
import { SurveyResults } from "./components/SurveyResults";
import { Challenges } from "./components/Challenges";
import { DigitalStrategy } from "./components/DigitalStrategy";
import { KeyInitiatives } from "./components/KeyInitiatives";
import { ImplementationSteps } from "./components/ImplementationSteps";
import { Conclusion } from "./components/Conclusion";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Introduction />
      <Survey />
      <SurveyResults />
      <Challenges />
      <DigitalStrategy />
      <KeyInitiatives />
      <ImplementationSteps />
      <Conclusion />
    </div>
  );
}