import CricketInsights from "@/components/CricketInsights";
import CricketPredictions from "@/components/CricketPredictions";
import CricketPredictionsProcess from "@/components/CricketPredictionsProcess";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CricketPredictions/>
      <CricketInsights/>
      <CricketPredictionsProcess/>
      <Testimonials/>
      <Footer/>
    </div>    
  );
}
