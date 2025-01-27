import React, { useRef, useEffect } from 'react';

const BrandTransformation = () => {
  const iconiqContainerRef = useRef(null);

  useEffect(() => {
    const container = iconiqContainerRef.current;
    if (!container) return;

    const textElement = container.querySelector('.iconiq-text');
    const rect = textElement.getBoundingClientRect();
    const highlights = container.querySelectorAll('.highlight');

    const animate = () => {
      const time = performance.now() / 500;
      const a = rect.width / 2;
      const b = rect.height / 6;

      const x = a * Math.cos(time);
      const y = b * Math.sin(time);

      highlights.forEach(highlight => {
        highlight.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="w-full px-4 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* First Line */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <h2 className="text-black text-3xl md:text-5xl font-light font-vietnam italic leading-tight md:leading-[72px]">
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
              <span className=''>Ordinary</span>
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
                <div className="highlight absolute w-2 h-2 rounded-full bg-yellow-500 blur-3xl"
                  style={{
                    left: '50%',
                    top: '30%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
                <div className="highlight absolute w-2 h-2 rounded-full bg-yellow-400 blur-2xl"
                  style={{
                    left: '50%',
                    top: '30%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
                <div className="highlight absolute w-16 h-16 rounded-full bg-yellow-400 blur-xl"
                  style={{
                    left: '50%',
                    top: '30%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
                <span className="iconiq-text text-7xl md:text-6xl ml-1 font-thin not-italic font-vilaka relative z-10">
                  Iconiqq
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTransformation;