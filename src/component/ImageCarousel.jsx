import { useEffect, useRef, useState } from 'react';

const images = [
  '/images/aboutPng/about01.png',
  '/images/aboutPng/about02.png',
  '/images/aboutPng/about03.png',
];

export default function ImageCarousel() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const NORMAL_SPEED = 40; // normal scroll speed
  const SLOW_SPEED = 0;   // slow motion on hover

  useEffect(() => {
    let animationFrame;
    let lastTime = performance.now();

    const loop = (time) => {
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      const speed = isHovered ? SLOW_SPEED : NORMAL_SPEED;
      const distance = speed * deltaTime;

      const container = containerRef.current;
      if (container) {
        container.scrollLeft += distance;

        // Loop seamlessly
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex w-full overflow-hidden cursor-default"
        style={{ scrollBehavior: 'auto', whiteSpace: 'nowrap' }}
      >
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="min-w-[50%] md:min-w-[33.3333%] h-[300px] px-2 inline-block"
          >
            <img
              src={src}
              alt={`carousel-${idx}`}
              className="w-full h-full object-cover rounded-[40px] md:rounded-[50px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
