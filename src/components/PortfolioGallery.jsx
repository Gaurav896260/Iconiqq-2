import React from "react";

const PortfolioGallery = () => {
  return (
    <div className="inline-flex flex-col items-center gap-7 w-full">
      <div className="w-full px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Call to Action Section */}
          <div className="mt-12 text-center">
            <p className="text-black text-xl md:text-[22px] mb-7 font-light font-vietnam">
              Take a glance at how we take brands from 0→1
            </p>

            <button className="md:flex schedule-button font-normal justify-center items-center px-3 py-2 mx-auto">
              Book a Demo
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
      </div>
    </div>
  );
};

export default PortfolioGallery;
