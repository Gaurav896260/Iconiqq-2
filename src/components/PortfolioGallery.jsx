import React from 'react';

const PortfolioGallery = () => {
  return (
    <section className="w-full px-4 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Container */}
        <div className="w-full h-[300px] relative bg-[#f1f1ea] rounded-[20px] overflow-hidden">
          {/* Scrolling Gallery */}
          <div className="w-full h-full flex overflow-x-auto scrollbar-hide">
            <div className="flex animate-scroll">
              {/* First set of images */}
              {[...Array(8)].map((_, index) => (
                <img
                  key={`img1-${index}`}
                  className="w-[300px] h-[300px] object-cover flex-shrink-0"
                  src={`/api/placeholder/${300}/${300}`}
                  alt={`Gallery item ${index + 1}`}
                />
              ))}
              {/* Duplicate set for seamless scrolling */}
              {[...Array(8)].map((_, index) => (
                <img
                  key={`img2-${index}`}
                  className="w-[300px] h-[300px] object-cover flex-shrink-0"
                  src={`/api/placeholder/${300}/${300}`}
                  alt={`Gallery item ${index + 9}`}
                />
              ))}
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#4a4819] opacity-40 rounded-[20px]" />
          
          {/* Top and Bottom Curves */}
          <div className="absolute -top-10 left-0 right-0 h-20 bg-[#f1f1ea] rounded-full" />
          <div className="absolute -bottom-10 left-0 right-0 h-20 bg-[#f1f1ea] rounded-full" />
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <p className="text-black text-xl md:text-[22px] font-light font-['Be Vietnam'] mb-7">
            Take a glance at how we take brands from 1
          </p>
          <button className="w-[210px] h-11 px-3 py-1 bg-black rounded-3xl flex justify-center items-center gap-2 mx-auto group hover:bg-gray-800 transition-colors">
            <span className="text-white text-xl font-normal font-['Be Vietnam']">
              Book a demo
            </span>
            <div className="w-16 h-16 bg-[#fff400] rounded-full blur-[75px] group-hover:blur-[85px] transition-all" />
          </button>
        </div>

        {/* Logo Grid */}
        <div className="mt-12 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden">
            {[...Array(8)].map((_, index) => (
              <div 
                key={`logo-${index}`}
                className="flex justify-center items-center p-4 bg-white/5 rounded-lg"
              >
                <img
                  className="w-full h-auto max-h-24 object-contain"
                  src={`/api/placeholder/${180}/${107}`}
                  alt={`Brand logo ${index + 1}`}
                />
              </div>
            ))}
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f1f1ea] via-transparent to-[#f1f1ea]" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;