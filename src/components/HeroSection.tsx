
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const HeroSection = () => {
  const [sliderValue, setSliderValue] = useState(50);
  
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <div className="bg-brand-orange/10 text-brand-orange text-sm font-semibold inline-block px-3 py-1 rounded mb-2 self-start">
              Limitless • Low T Clinic
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Increase Your Testosterone Safely with In-Clinic Therapy
            </h1>
            <p className="text-gray-600 mb-6">
              Experience personalized wellness solutions to help you feel and look your best
            </p>
            
            <ul className="space-y-2 mb-8">
              <li className="flex items-center text-sm">
                <span className="bg-brand-orange/20 text-brand-orange rounded-full p-1 mr-2">✓</span>
                <span>FDA approved, safe and monitored therapy</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="bg-brand-orange/20 text-brand-orange rounded-full p-1 mr-2">✓</span>
                <span>Insurance accepted at most locations</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="bg-brand-orange/20 text-brand-orange rounded-full p-1 mr-2">✓</span>
                <span>No long wait times</span>
              </li>
            </ul>

            <div className="flex space-x-4">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                Schedule a Free Call
              </Button>
              <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange/10">
                Learn More
              </Button>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/b18f098d-6921-4034-b6e5-4de1c95ce80a.png" 
                alt="Happy patient"
                className="w-28 h-28 object-cover rounded-full border-4 border-white shadow"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-6">
              Check Your Testosterone Levels Today
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Fill out the form below to see if you qualify for our treatment
            </p>

            <div className="mb-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>Low</span>
                <span>Normal</span>
                <span>High</span>
              </div>
              <Progress value={sliderValue} className="h-2 bg-gray-200" />
            </div>

            <div className="mb-8">
              <div className="flex justify-between mb-1 text-sm">
                <span>18-29 years</span>
                <span>30-49 years</span>
                <span>50+ years</span>
              </div>
              <Progress value={40} className="h-2 bg-gray-200" />
            </div>

            <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-3">
              START AN ASSESSMENT →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
