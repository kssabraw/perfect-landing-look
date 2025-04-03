
const TestosteroneInfo = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Do Your<br />Hormone Levels Decrease?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full flex items-center justify-center bg-red-100">
                <span className="text-3xl font-bold text-brand-orange">13 M+</span>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium">
              AMERICAN MEN<br />AFFECTED BY LOW HORMONE LEVELS
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="h-20 w-20">
                  <path d="M50,50 L50,10 A40,40 0 0,1 90,50 z" fill="#F15A29" />
                  <path d="M50,50 L90,50 A40,40 0 0,1 50,90 z" fill="#E6E6E6" />
                  <path d="M50,50 L50,90 A40,40 0 0,1 10,50 z" fill="#E6E6E6" />
                  <path d="M50,50 L10,50 A40,40 0 0,1 50,10 z" fill="#E6E6E6" />
                </svg>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium">
              <span className="text-brand-orange text-3xl font-bold">25%</span><br />
              DROP IN HORMONE LEVELS<br />FROM AGE 30
            </p>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-700 mb-4">
              Hormones are key anabolic compounds that help men maintain 
              muscle mass, strength, bone density, and sex drive in adulthood. 
              After age 30, men typically lose 1% of their hormone levels 
              each year due to normal aging.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Other factors like poor diet, lack of exercise, high stress, 
              and certain medical conditions can accelerate this decline. 
              Many men don't realize that their symptoms are caused by 
              declining hormone levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestosteroneInfo;
