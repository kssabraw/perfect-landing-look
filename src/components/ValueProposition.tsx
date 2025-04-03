
const ValueProposition = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-16">
          We Always Deliver More Than<br />Our Clients Expect
        </h2>
        
        <div className="relative max-w-xl mx-auto aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
            <h3 className="font-bold">WATCH AND LEARN WHY THOUSANDS OF MEN TRUST US</h3>
            <p className="text-sm">Hear directly from our medical director</p>
          </div>
        </div>
        
        <div className="mt-8">
          <button className="bg-brand-orange hover:bg-brand-orange/90 text-white py-3 px-6 rounded">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
