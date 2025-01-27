import React from "react";
import image1 from "../assets/slider1/kyoto.jpg";
import image2 from "../assets/slider1/bc.jpg";
import image3 from "../assets/slider1/fightex.jpg";
import image4 from "../assets/slider1/frheta.jpg";
import image5 from "../assets/slider1/kashmir.jpg";
import image6 from "../assets/slider1/qh.jpg";
import image7 from "../assets/slider1/laCosta.jpg";
import image8 from "../assets/slider1/creatsy.jpg";

const HorizontalScrollGallery = () => {
  const imageCount = 20000;
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <div className="w-full min-h-screen bg-[#f0f0ea] grid place-items-center font-sans">
      <div className="w-[90%] max-w-7xl overflow-hidden relative">
        <div className="w-full overflow-hidden">
          {/* Track - adjusted padding to show 4 images */}
          <div
            className="relative flex overflow-hidden px-[16.5%] py-4"
            style={{
              WebkitMask: `radial-gradient(#0000 0 30%, #000 30.5%) 50% calc(400px * 0.5) / 300% 100%,
                linear-gradient(0deg, black, black) 50% 0 / 100% 16px no-repeat,
                linear-gradient(0deg, black, black) 50% 100% / 100% 16px no-repeat`,
            }}
          >
            {/* First set of images */}
            <div className="flex animate-scroll gap-0">
              {Array.from({ length: imageCount }, (_, index) => (
                <div
                  key={`first-${index}`}
                  className="h-[400px] w-[300px] bg-gray-200 flex-shrink-0"
                >
                  <img
                    src={images[index % images.length]}
                    alt={`Gallery image ${index + 1}`}
                    className="h-full w-full object-cover rounded-md brightness-50"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex animate-scroll gap-4">
              {Array.from({ length: imageCount }, (_, index) => (
                <div
                  key={`second-${index}`}
                  className="h-[400px] w-[300px] bg-gray-200 flex-shrink-0"
                >
                  <img
                    src={images[index % images.length]}
                    alt={`Gallery image ${index + 1}`}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20000s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollGallery;