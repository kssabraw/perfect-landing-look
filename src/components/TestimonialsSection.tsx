
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          We Proudly Present Our<br />
          Patient Success Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-brand-orange/10 text-brand-orange text-xs font-semibold px-3 py-1 rounded">
                Real Client Story: From Fatigue to Fit
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <p className="text-gray-700 text-sm mb-6">
              "After turning 42, I noticed I was constantly tired despite getting enough sleep. My gym performance plummeted and I just didn't feel like myself. After 3 months of treatment at Apex Labs, my energy is back, I'm setting new personal records at the gym, and my wife has noticed the difference too!"
            </p>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-gray-500">
                MJ
              </div>
              <div>
                <p className="font-medium">Michael Jensen</p>
                <p className="text-xs text-gray-500">Age 42 • Treatment: 3 months</p>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="outline" className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange/10">
                See More True Test Success Stories
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-brand-orange/10 text-brand-orange text-xs font-semibold px-3 py-1 rounded">
                Life Changing: From Tired to Hired
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <p className="text-gray-700 text-sm mb-6">
              "I was struggling with brain fog and lack of motivation that was affecting my work performance. My doctor recommended checking my testosterone levels, which turned out to be very low for my age. After starting treatment with Apex Labs, not only did my cognitive function improve, but I had the focus and drive to earn a promotion at work!"
            </p>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-gray-500">
                CP
              </div>
              <div>
                <p className="font-medium">Charles Parker</p>
                <p className="text-xs text-gray-500">Age 38 • Treatment: 6 months</p>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="outline" className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange/10">
                Download Free "Path to Better Health" Guide
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="Google Reviews" className="h-6" />
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold">4.9</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
