import React, { useRef, useEffect } from "react";
import image1 from "../assets/slider1/kyoto.jpg";
import image2 from "../assets/slider1/bc.jpg";
import image3 from "../assets/slider1/fightex.jpg";
import image4 from "../assets/slider1/frheta.jpg";
import image5 from "../assets/slider1/kashmir.jpg";
import image6 from "../assets/slider1/qh.jpg";
import image7 from "../assets/slider1/laCosta.jpg";
import image8 from "../assets/slider1/creatsy.jpg";
import brandLogo1 from "../assets/Projects/Black Crush/BlackCrushLogo.jpg";
import brandLogo2 from "../assets/Projects/Kyoto Kitchen/KyotoKitchenLogo.jpg";
import brandLogo3 from "../assets/Projects/La Costa/LaCostaLogo.jpg";
import brandLogo4 from "../assets/Projects/Qdore Home/QHLogo.jpg";

const BrandTransformation = () => {
  const iconiqContainerRef = useRef(null);
  const imageCount = 20000;
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  const imageUrls1 = [brandLogo1, brandLogo2, brandLogo3, brandLogo4];
  const imageUrls2 = [brandLogo1, brandLogo2, brandLogo3, brandLogo4];

  useEffect(() => {
    const container = iconiqContainerRef.current;
    if (!container) return;

    const textElement = container.querySelector(".iconiq-text");
    const rect = textElement.getBoundingClientRect();
    const highlights = container.querySelectorAll(".highlight");

    const animate = () => {
      const time = performance.now() / 500;
      const a = rect.width / 2;
      const b = rect.height / 6;

      const x = a * Math.cos(time);
      const y = b * Math.sin(time);

      highlights.forEach((highlight) => {
        highlight.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="w-full px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section 1 */}
        {/* Transforming Brands From Ordinary To Iconiqq */}
        <div className="flex flex-col items-center text-center">
          {/* First Line */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <h2 className="text-black text-3xl md:text-5xl font-light font-vietnam italic leading-tight md:leading-[72px] font-weight-300">
              Transforming
            </h2>
            <div className="px-5 rounded-tl-2xl rounded-br-2xl">
              <span className="text-black text-4xl md:text-7xl font-normal font-vilaka">
                Brands
              </span>
            </div>
            <span className="text-black text-3xl md:text-5xl font-normal font-vietam italic leading-tight md:leading-[72px]">
              from
            </span>
          </div>

          {/* Second Line */}
          <div className="flex items-center gap-2 flex-wrap justify-center mt-2">
            <span className="text-black text-3xl md:text-5xl font-light font-vietnam italic leading-tight md:leading-[72px] relative">
              <span className="">Ordinary</span>
              <svg
                className="absolute top-1/2 mt-3 left-0 w-full "
                height="28"
                viewBox="0 0 174 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.14062 8.95163C8.86325 7.49496 15.1265 6.9291 20.9391 6.28719C45.4723 3.57789 70.0996 3.02314 94.7619 2.87671C107.835 2.79908 120.978 2.59169 134.054 2.87671C134.743 2.89174 136.642 3.10376 136.043 3.44512C130.05 6.85862 119.981 8.41189 113.822 9.75097C85.5999 15.8861 -0.305521 27.1106 28.4706 24.6541C52.0533 22.6409 75.4796 20.2256 99.1494 19.1298C123.191 18.0168 147.255 17.5844 171.32 17.5844"
                  stroke="#FFF500"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
              <span> to </span>
            </span>
            <div className="px-5 rounded-tl-2xl rounded-br-2xl">
              <span className="relative inline-block" ref={iconiqContainerRef}>
                {/* Animated highlights */}
                <div
                  className="highlight absolute w-2 h-2 rounded-full bg-yellow-500 blur-3xl"
                  style={{
                    left: "50%",
                    top: "30%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <div
                  className="highlight absolute w-2 h-2 rounded-full bg-yellow-400 blur-2xl"
                  style={{
                    left: "50%",
                    top: "30%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <div
                  className="highlight absolute w-16 h-16 rounded-full bg-yellow-400 blur-xl"
                  style={{
                    left: "50%",
                    top: "30%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <span className="iconiq-text text-7xl md:text-6xl ml-1 font-thin not-italic font-vilaka relative z-10">
                  Iconiqq
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        {/* Slider Section - Infinite Gallery */}
        <div className="min-h-screen bg-[#f0f0ea] grid place-items-center font-sans mt-[-400px] mb-[-700px]">
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

        {/* Section 3 */}
        {/* Text Section */}
        <div className="inline-flex flex-col items-center w-full px-[12%] mt-[200px]">
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
              <div className="mt-12 relative overflow-hidden">
                <div className="grid grid-rows-2 gap-4">
                  {/* First Row - Left Scrolling */}
                  <div className="logo-scroll-wrapper">
                    <div className="logo-scroll-container scrolling-left">
                      {[...imageUrls1, ...imageUrls1].map((url, index) => (
                        <div key={`logo-left-${index}`} className="logo-item">
                          <img
                            className="w-full h-auto max-h-24 object-contain"
                            src={url}
                            alt={`Brand logo ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Second Row - Right Scrolling */}
                  <div className="logo-scroll-wrapper">
                    <div className="logo-scroll-container scrolling-right">
                      {[...imageUrls2, ...imageUrls2].map((url, index) => (
                        <div key={`logo-right-${index}`} className="logo-item">
                          <img
                            className="w-full h-auto max-h-24 object-contain"
                            src={url}
                            alt={`Brand logo ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f1f1ea] via-transparent to-[#f1f1ea] pointer-events-none" />

                {/* Custom Styles for Infinite Scrolling */}
                <style jsx>{`
                  .logo-scroll-wrapper {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                    white-space: nowrap;
                  }

                  .logo-scroll-container {
                    display: flex;
                    width: max-content;
                  }

                  .scrolling-left {
                    animation: scrollLeft 5s linear infinite;
                  }

                  .scrolling-right {
                    animation: scrollRight 5s linear infinite;
                  }

                  .logo-item {
                    flex-shrink: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 1rem;
                    min-width: 200px;
                    margin: 0 0.5rem;
                  }

                  @keyframes scrollLeft {
                    from {
                      transform: translateX(0);
                    }
                    to {
                      transform: translateX(-50%);
                    }
                  }

                  @keyframes scrollRight {
                    from {
                      transform: translateX(-50%);
                    }
                    to {
                      transform: translateX(0);
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTransformation;
