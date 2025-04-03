
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import SymptomsSection from "@/components/SymptomsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TestosteroneInfo from "@/components/TestosteroneInfo";
import TherapyProcess from "@/components/TherapyProcess";
import ValueProposition from "@/components/ValueProposition";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <TestosteroneInfo />
        <SymptomsSection />
        <TherapyProcess />
        <SolutionSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
