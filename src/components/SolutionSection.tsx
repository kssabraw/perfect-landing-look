import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Ultimate Solution for Sustainable<br />
          Hormone Replacement
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            
            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              DOCTOR EXPLAIN TRT
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
              <h3 className="font-bold text-sm">WATCH AND LEARN</h3>
              <p className="text-xs">Our expert explains the process</p>
            </div>
          </div>
          
          <div>
            <p className="text-gray-700 mb-6">
              Our custom therapy consists of both in-office and at-home treatment options. Our doctors will identify the solution that works best for your unique situation, lifestyle, and goals.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">•</span>
                <span className="text-sm">Every man is different, so our solutions are personalized</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">•</span>
                <span className="text-sm">Regular blood tests to monitor your hormone levels</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">•</span>
                <span className="text-sm">Ongoing physician support throughout your journey</span>
              </li>
            </ul>
            
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              MAKE AN APPOINTMENT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
