
import { Button } from "@/components/ui/button";

const TherapyProcess = () => {
  return (
    <section className="py-16 px-4 bg-brand-orange">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8">
          Get Custom Testosterone Therapy<br />
          According to Your Body's Needs
        </h2>
        
        <p className="max-w-3xl mx-auto mb-8 text-white/90">
          We know you are busy! That's why we make it easy. Our clinics are designed with efficiency and high quality results in mind. No long waits or unnecessary visits.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Clinic Interior" 
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Doctor with Patient" 
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Treatment Process" 
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Clinic Equipment" 
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Doctor Consultation" 
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Patient Results" 
              className="w-full h-32 object-cover"
            />
          </div>
        </div>
        
        <Button className="bg-white text-brand-orange hover:bg-white/90 px-8 py-6 text-lg font-semibold">
          BOOK AN APPOINTMENT
        </Button>
      </div>
    </section>
  );
};

export default TherapyProcess;
