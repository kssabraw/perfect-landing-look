import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormValues {
  name: string;
  email: string;
  age: string;
}

const HeroSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      age: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };
  
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <div className="bg-brand-orange/10 text-brand-orange text-sm font-semibold inline-block px-3 py-1 rounded mb-2 self-start">
              Limitless • Low Hormone Clinic
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Increase Your Hormone Levels Safely with In-Clinic Therapy
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
            <h3 className="text-xl font-semibold text-center mb-3">
              Check Your Hormone Levels Today
            </h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Fill out the form below to see if you qualify for our treatment
            </p>

            {formSubmitted ? (
              <div className="bg-green-100 border border-green-200 text-green-800 rounded-md p-4 mb-4 text-center">
                Thank you! We'll be in touch soon.
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...form.register("name", { required: true })}
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...form.register("email", { required: true })}
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel>Age Range</FormLabel>
                    <Select onValueChange={(value) => form.setValue("age", value)} defaultValue={form.getValues("age")}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your age range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="18-29">18-29 years</SelectItem>
                        <SelectItem value="30-49">30-49 years</SelectItem>
                        <SelectItem value="50+">50+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                  
                  <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-3">
                    START AN ASSESSMENT →
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
