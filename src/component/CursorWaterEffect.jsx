import React, { useRef, useEffect, useState } from "react";

const CursorWaterEffect = () => {
    const canvasRef = useRef(null);
    const cursorRef = useRef(null);
     const [isVisible, setIsVisible] = useState(true);

       useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    useEffect(() => {
        if (!isVisible) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const mouse = { x: -100, y: -100 };
        const ripples = [];

        const createRipple = (x, y) => {
            ripples.push({ x, y, radius: 0, alpha: 1 });
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // optional soft background glow
            ctx.fillStyle = "#ffffff08";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < ripples.length; i++) {
                const ripple = ripples[i];
                ripple.radius += 1;
                ripple.alpha -= 0.01;

                if (ripple.alpha <= 0) {
                    ripples.splice(i, 1);
                    i--;
                    continue;
                }

                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(180, 235, 255, ${ripple.alpha})`;
                ctx.lineWidth = 3;
                ctx.stroke();
            }

            requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            createRipple(mouse.x, mouse.y);

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${mouse.x - 15}px, ${mouse.y - 15}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        draw();

        const handleClick = (e) => {
            if (e.button === 0) { // Left click
                createRipple(e.clientX, e.clientY);
            }
        };

        window.addEventListener("mousedown", handleClick);

        return () => {
            window.removeEventListener("mousedown", handleClick);
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, [isVisible]);

      if (!isVisible) return null;

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999999]"
                style={{
                    mixBlendMode: 'screen',
                    filter: 'blur(20px)',
                    cursor: 'none'
                }}
            />

            {/* Custom cursor circle like your image */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[30px] h-[30px] z-[1000000] pointer-events-none rounded-full overflow-hidden"
                style={{
                    background: 'radial-gradient(circle, #e0f7ff 0%, rgba(224, 247, 255, 0.2) 70%)',
                    boxShadow: '0 0 25px 10px rgba(180, 235, 255, 0.5)',
                    cursor: 'none',
                    border: '2px solid #80dfff',
                }}
            />

        </>
    );
};

export default CursorWaterEffect;
