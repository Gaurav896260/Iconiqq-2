import React, { useState, useEffect, useRef, useCallback } from "react";
import image1 from "../assets/Hero/bc.jpg";
import image2 from "../assets/Hero/frheta.jpg";
import image3 from "../assets/Hero/bg.jpg";
import image4 from "../assets/Hero/qh.jpg";
import image5 from "../assets/Projects/Black Crush/BlackCrush1.jpg";
import image6 from "../assets/Projects/Frehta/Frheta1.png";
import image7 from "../assets/Projects/Kashmir Chur Chur Naan/KashmirChurChurNaan1.jpg";
import image8 from "../assets/Projects/Kyoto Kitchen/KyotoKitchen1.jpg";
import image9 from "../assets/Projects/La Costa/LaCosta1.jpg";
import image10 from "../assets/Projects/Qdore Home/QH1.jpg";
import image11 from "../assets/Projects/Black Crush/BlackCrush2.jpg";
import image12 from "../assets/Projects/Kashmir Chur Chur Naan/KashmirChurChurNaanLogo.png";
import image13 from "../assets/Projects/Qdore Home/QH2.jpg";
import image14 from "../assets/Projects/La Costa/LaCosta2.jpg";
import image15 from "../assets/Projects/Frehta/Frheta3.jpg";
import image16 from "../assets/Projects/Kyoto Kitchen/KyotoKitchenLogo.jpg";
import image17 from "../assets/Projects/Kashmir Chur Chur Naan/KashmirChurChurNaan2.jpg";
import image18 from "../assets/Projects/Qdore Home/QHLogo.jpg";
import image19 from "../assets/Projects/Kyoto Kitchen/KyotoKitchen2.png";
import image20 from "../assets/Projects/Kashmir Chur Chur Naan/KashmirChurChurNaan4.jpg";
import image21 from "../assets/Projects/Frehta/Frheta2.png";
import image22 from "../assets/Projects/Black Crush/BlackCrush3.jpg";
import image23 from "../assets/Projects/Kashmir Chur Chur Naan/KashmirChurChurNaan3.jpg";
import image24 from "../assets/Projects/Black Crush/BlackCrushLogo.jpg";
import image25 from "../assets/Projects/Frehta/FrhetaLogo.png";
import image26 from "../assets/Projects/La Costa/LaCostaLogo.jpg";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [showAdditionalImages, setShowAdditionalImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const textIndexRef = useRef(0);
  const timeoutRef = useRef(null);
  const imageIntervalRef = useRef(null);

  const additionalImages = [
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
  ];

  const textArray = [
    { text: "Stop!", style: "font-vietnam font-[5] italic" },
    { text: "Are", style: "font-vietnam italic font-[100]" },
    { text: "you", style: "font-vietnam italic font-[100]" },
    { text: "done", style: "font-vietnam italic font-[200]" },
    { text: "with", style: "font-vietnam italic font-[200]" },
    { text: "your", style: "font-vietnam italic font-[200]" },
    {
      text: "Branding?",
      style: "font-vilaka text-[#fff400] text-6xl font-bold",
    },
  ];

  const clearTypewriterTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const clearImageInterval = useCallback(() => {
    if (imageIntervalRef.current) {
      clearInterval(imageIntervalRef.current);
      imageIntervalRef.current = null;
    }
  }, []);

  const startImageRotation = useCallback(() => {
    setShowAdditionalImages(true);
    imageIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % additionalImages.length);
    }, 400); // Slightly faster image rotation
  }, []);

  const typeWriterEffect = useCallback(() => {
    clearTypewriterTimeout();

    if (!hover || textIndexRef.current >= textArray.length) {
      textIndexRef.current = 0;
      setCurrentText("");
      return;
    }

    const currentItem = textArray[textIndexRef.current];
    if (currentItem) {
      timeoutRef.current = setTimeout(() => {
        setCurrentText((prev) => (
          <>
            {prev}
            {prev ? " " : ""}
            <span
              className={`${currentItem.style} transition-all duration-300 ease-in-out`}
            >
              {currentItem.text}
            </span>
          </>
        ));

        textIndexRef.current += 1;

        if (textIndexRef.current >= textArray.length) {
          timeoutRef.current = setTimeout(() => {
            if (hover) {
              startImageRotation();
              timeoutRef.current = setTimeout(() => {
                if (hover) {
                  textIndexRef.current = 0;
                  setCurrentText("");
                  setShowAdditionalImages(false);
                  clearImageInterval();
                  typeWriterEffect();
                }
              }, 7000); // Slightly reduced timeout
            }
          }, 200);
        } else {
          typeWriterEffect();
        }
      }, 200); // Slightly faster text typing
    }
  }, [hover, clearTypewriterTimeout, startImageRotation, clearImageInterval]);

  useEffect(() => {
    if (hover) {
      textIndexRef.current = 0;
      setCurrentText("");
      setShowAdditionalImages(false);
      setCurrentImageIndex(0);
      typeWriterEffect();
    }

    return () => {
      clearTypewriterTimeout();
      clearImageInterval();
    };
  }, [hover, typeWriterEffect, clearTypewriterTimeout, clearImageInterval]);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
    clearTypewriterTimeout();
    clearImageInterval();
    textIndexRef.current = 0;
    setCurrentText("");
    setShowAdditionalImages(false);
    setCurrentImageIndex(0);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <section
        className="relative w-full px-4 py-8 md:py-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative z-20 flex flex-col items-center justify-center">
          <div className="hero-bg rounded-[20px] overflow-hidden w-full p-6 md:p-12 flex flex-col md:flex-row justify-between">
            <div
              className={`absolute inset-0 rounded-[20px] bg-black transition-opacity duration-500 ${
                hover ? "opacity-65" : "opacity-0"
              } z-10`}
            ></div>

            {/* Left Section */}
            <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
              <h1 className="text-white text-[32px] italic font-thin font-vietnam leading-[72px]">
                Brand Identity
              </h1>
              <p className="text-[#828282] text-sm italic font-vietnam md:text-base font-light">
                Get the brand expertise you need, however <br /> you need it,
                from brand development and <br /> design to custom branding
                solutions.
              </p>
            </div>

            {/* Right Section - Image Grid */}
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
              <div className="grid grid-cols-2 gap-x-16 gap-y-8 w-full h-full relative">
                {/* Image 1 - Top Left */}
                <div className="relative">
                  <img
                    src={image1}
                    alt="Brand showcase 1"
                    className="absolute h-[280px] w-[195px] object-cover rounded-xl"
                    style={{
                      clipPath: "polygon(0% 18%, 100% 3%, 100% 85%, 0 72%)",
                      left: "150px",
                      top: "0px",
                    }}
                  />
                </div>

                {/* Image 2 - Top Right */}
                <div className="relative">
                  <img
                    src={image2}
                    alt="Brand showcase 2"
                    className="absolute h-[360px] w-[300px] object-cover rounded-lg"
                    style={{
                      clipPath: "polygon(0 13%, 100% 0, 100% 95%, 0% 82%)",
                      right: "-70px",
                      top: "-45px",
                    }}
                  />
                </div>

                {/* Image 3 - Bottom Left */}
                <div className="relative">
                  <img
                    src={image3}
                    alt="Brand showcase 3"
                    className="absolute h-[250px] w-[250px] object-cover rounded-lg"
                    style={{
                      clipPath: "polygon(0 0, 100% 18%, 100% 100%, 0 100%)",
                      left: "80px",
                      bottom: "-70px",
                    }}
                  />
                </div>

                {/* Image 4 - Bottom Right */}
                <div className="relative h-[250px] w-[310px]">
                  <img
                    src={image4}
                    alt="Brand showcase 4"
                    className="absolute h-[250px] w-[300px] object-cover rounded-lg"
                    style={{
                      clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)",
                      right: "-35px",
                      bottom: "-185px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Animation */}
          <div className="w-full justify-center items-center">
            {hover && (
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-left text-white z-30 ${
                  showAdditionalImages
                    ? "transition-all duration-700 ease-out -translate-y-8 mt-5"
                    : ""
                }`}
              >
                {/* Background container for text animation */}
                <div
                  className={`
                    relative w-full ml-80 
                    ${
                      showAdditionalImages
                        ? "transition-all duration-900 ease-in-out transform translate-y-[-20px]"
                        : "translate-y-0"
                    }
                  `}
                >
                  <span className="text-[40px] md:text-[50px] font-[300] transition-all duration-700 ease-out transform animate-slideInFromLeft">
                    {currentText}
                  </span>
                </div>

                {/* Additional Images */}
                {showAdditionalImages && (
                  <div className="w-[302px] h-52 bg-white rounded-tl-[50px] rounded-br-[50px] justify-center items-center inline-flex overflow-hidden object-contain mt-10 transition-all duration-900 ease-in-out transform animate-fadeIn">
                    <img
                      src={additionalImages[currentImageIndex]}
                      alt={`Additional showcase ${currentImageIndex + 1}`}
                      className="w-[427.81px] h-[285.24px]"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subtitle Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[30px] px-4">
        <h2 className="w-full md:w-[361px] text-center md:text-right text-black text-xl md:text-[28px] font-normal italic font-vietnam]">
          How we take your business to the next level
        </h2>
        <p className="w-full md:w-[346px] text-center md:text-left text-[#9a9a9a] text-base md:text-lg font-light font-vietnam leading-7">
          We do a lot more than branding to help you take the next step in your
          business.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
