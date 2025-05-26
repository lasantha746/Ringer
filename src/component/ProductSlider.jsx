import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // or use any arrow icon you prefer
import ObjViewer from './ObjViewer.jsx';

const sliderItems = [
  { id: 1, title: 'Classic Yellow Gold', src: '/images/handModel/h1.png', obj: '/images/handModel/h1.obj', mtl: '/images/handModel/h1.mtl' },
  { id: 2, title: 'Modern Platinum', src: '/images/handModel/h2.png', obj: '/images/handModel/h2.obj', mtl: '/images/handModel/h2.mtl' },
  { id: 3, title: 'Elegant Rose Gold', src: '/images/handModel/h3.png', obj: '/images/handModel/h3.obj', mtl: '/images/handModel/h3.mtl' },
  { id: 4, title: 'Vintage Charm', src: '/images/handModel/h1.png', obj: '/images/handModel/h1.obj', mtl: '/images/handModel/h1.mtl' },
];

export default function ProductSlider() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(1);
  const [screenConfig, setScreenConfig] = useState({
    width: 200,
    height: 300,
    translateX: 250,
    scale: 0.7
  });

  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 1 second delay

    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    const updateConfig = () => {
      const width = window.innerWidth;

      setIsMobile(width < 500);

      if (width < 500) {
        setScreenConfig({ width: 200, height: 300, Mwidth: 250, Mheight: 350, translateX: 170, scale: 0.6 });
      } else if (width < 720) {
        setScreenConfig({ width: 200, height: 300, Mwidth: 200, Mheight: 300, translateX: 200, scale: 0.6 });
      } else if (width < 880) {
        setScreenConfig({ width: 260, height: 380, Mwidth: 250, Mheight: 350, translateX: 250, scale: 0.65 });
      } else if (width < 1120) {
        setScreenConfig({ width: 260, height: 380, Mwidth: 250, Mheight: 350, translateX: 300, scale: 0.7 });
      } else {
        setScreenConfig({ width: 350, height: 500, Mwidth: 300, Mheight: 400, translateX: 400, scale: 0.7 });
      }
    };

    updateConfig();
    window.addEventListener('resize', updateConfig);
    return () => window.removeEventListener('resize', updateConfig);
  }, []);

  const handleClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const handleArrow = (direction) => {
    if (direction === 'left' && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else if (direction === 'right' && activeIndex < sliderItems.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (

    <div className="w-full md:h-[500px] lg:h-[600px] xl:h-[600px] flex justify-center items-center py-16 overflow-hidden relative">
      {isMobile && (
        <>
          <button
            onClick={() => handleArrow('left')}
            className="absolute left-2 top-1/2 z-20 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => handleArrow('right')}
            className="absolute right-2 top-1/2 z-20 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <div className="relative w-full" style={{ height: `${screenConfig.height}px` }}>
        {sliderItems.map((item, index) => {
          const offset = index - activeIndex;
          if (Math.abs(offset) > 1 && !isMobile) return null;

          const isCenter = offset === 0;

          return (
            <div
              key={item.id}
              className="absolute transition-all duration-500 ease-in-out cursor-pointer"
              onClick={() => handleClick(index)}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translateX(${offset * screenConfig.translateX}px) scale(${isCenter ? 1 : screenConfig.scale})`,
                filter: isCenter ? 'none' : 'blur(2px)',
                opacity: isCenter ? 1 : 0.7,
                zIndex: isCenter ? 10 : 5,
              }}
            >

              {isCenter ? (
                <div
                  className={`rounded-xl shadow-lg transition-all duration-500 ${isCenter ? 'mt-8' : ''}`}
                  style={{
                    width: `${screenConfig.width}px`,
                    height: `${screenConfig.height}px`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {isLoading && (
                    <div className={`${!isLoading ? 'hidden' : ''} w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin`}></div>
                  )}
                  <div className={`${!isLoading ? '' : 'hidden'} w-full h-full`}>
                    < ObjViewer
                      obj={item.obj}
                      mtl={item.mtl}
                      width={screenConfig.Mwidth}
                      height={screenConfig.Mheight}
                      position={[0, 0, 2]} // x, y, z
                      rotation={[20, -10, -20]} // degrees: x, y, z
                    />
                  </div>
                </div>
              ) : (
                <div style={{ width: '250px', height: '400px', position: 'absolute', visibility: 'hidden' }}>
                  {/* <ObjViewer
                    obj={item.obj}
                    mtl={item.mtl}
                    width={screenConfig.Mwidth}
                    height={screenConfig.Mheight}
                    position={[0, 0, 2]} // x, y, z
                    rotation={[20, -10, -20]} // degrees: x, y, z
                  /> */}
                </div>
              )}
              {!isCenter && (
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: `${screenConfig.width}px`,
                    height: `${screenConfig.height}px`,
                  }}
                  className={`object-cover rounded-xl shadow-lg transition-all duration-500 ${isCenter ? 'mt-8' : ''
                    }`}
                />
              )}
              {isCenter && (

                <p className="mt-6 text-center font-inter font-medium text-[16px] sm:text-[18px]">
                  {item.title}
                </p>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}
