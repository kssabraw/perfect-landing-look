
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-8 flex justify-between items-center bg-white shadow-sm">
      <div className="logo">
        <a href="/">
          <h1 className="text-xl font-bold flex items-center">
            <span className="text-brand-orange">SCULPTED</span>
            <span>MD</span>
          </h1>
        </a>
      </div>
      <div>
        <Button 
          className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full"
        >
          Call Us | Schedule
        </Button>
      </div>
    </header>
  );
};

export default Header;
