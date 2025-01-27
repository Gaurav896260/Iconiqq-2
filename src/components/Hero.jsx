import React, { useState, useEffect, useRef } from 'react';
import image1 from '../assets/Hero/bc.jpg';
import image2 from '../assets/Hero/frheta.jpg';
import image3 from '../assets/Hero/bg.jpg';
import image4 from '../assets/Hero/qh.jpg';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [showAdditionalImages, setShowAdditionalImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const textIndexRef = useRef(0);
  const timeoutRef = useRef(null);
  const imageIntervalRef = useRef(null);

  const additionalImages = [image1, image2, image3, image4];

  const textArray = [
    { text: 'Stop!', style: 'font-vietnam font-[5] italic' },
    { text: 'Are', style: 'font-vietnam italic font-[100]' },
    { text: 'you', style: 'font-vietnam italic font-[100]' },
    { text: 'done', style: 'font-vietnam italic font-[200]' },
    { text: 'with', style: 'font-vietnam italic font-[200]' },
    { text: 'your', style: 'font-vietnam italic font-[200]' },
    { text: 'Branding?', style: 'font-vilaka text-[#fff400]' },
  ];

  // Existing timeout and interval management functions
  const clearTypewriterTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const clearImageInterval = () => {
    if (imageIntervalRef.current) {
      clearInterval(imageIntervalRef.current);
      imageIntervalRef.current = null;
    }
  };

  const startImageRotation = () => {
    setShowAdditionalImages(true);
    imageIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % additionalImages.length);
    }, 1000);
  };

  const typeWriterEffect = () => {
    clearTypewriterTimeout();

    if (!hover || textIndexRef.current >= textArray.length) {
      textIndexRef.current = 0;
      setCurrentText('');
      return;
    }

    const currentItem = textArray[textIndexRef.current];
    if (currentItem) {
      timeoutRef.current = setTimeout(() => {
        setCurrentText(prev => (
          <>
            {prev}
            {prev ? ' ' : ''}
            <span className={currentItem.style}>
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
                  setCurrentText('');
                  setShowAdditionalImages(false);
                  clearImageInterval();
                  typeWriterEffect();
                }
              }, 4000);
            }
          }, 500);
        } else {
          typeWriterEffect();
        }
      }, 300);
    }
  };

  useEffect(() => {
    if (hover) {
      textIndexRef.current = 0;
      setCurrentText('');
      setShowAdditionalImages(false);
      setCurrentImageIndex(0);
      typeWriterEffect();
    }

    return () => {
      clearTypewriterTimeout();
      clearImageInterval();
    };
  }, [hover]);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
    clearTypewriterTimeout();
    clearImageInterval();
    textIndexRef.current = 0;
    setCurrentText('');
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
            {hover && (
              <div className="absolute inset-0 rounded-[20px] bg-black bg-opacity-80 z-10"></div>
            )}
            
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
                    className="absolute h-[230px] w-[250px] object-cover rounded-lg"
                    style={{
                      clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 87%)',
                      left: '100px',
                      top: '0px'
                    }}
                  />
                </div>

                {/* Image 2 - Top Right */}
                <div className="relative">
                  <img
                    src={image2}
                    alt="Brand showcase 2"
                    className="absolute h-[320px] w-[200px] object-cover rounded-lg"
                    style={{
                      clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 89%)',
                      right: '-50px',
                      top: '-40px'
                    }}
                  />
                </div>

                {/* Image 3 - Bottom Left */}
                <div className="relative">
                  <img
                    src={image3}
                    alt="Brand showcase 3"
                    className="absolute h-[200px] w-[250px] object-cover rounded-lg"
                    style={{
                      clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 100%)',
                      left: '100px',
                      bottom: '-30px'
                    }}
                  />
                </div>

                {/* Image 4 - Bottom Right */}
                <div className="relative">
                  <img
                    src={image4}
                    alt="Brand showcase 4"
                    className="absolute h-[160px] w-[240px] object-cover rounded-lg"
                    style={{
                      clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 100%)',
                      right: '-60px',
                      bottom: '-30px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Animation */}
          {hover && (
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white z-30 transition-all duration-500 ${
                showAdditionalImages ? '-translate-y-8' : ''
              }`}
            >
              <span className="text-[40px] md:text-[50px] font-[300]">{currentText}</span>

              {/* Additional Images */}
              {showAdditionalImages && (
                <div className="w-[302px] h-52 bg-white rounded-tl-[50px] rounded-br-[50px] justify-start items-center inline-flex overflow-hidden">
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