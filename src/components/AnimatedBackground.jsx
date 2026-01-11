import React, { useEffect, useRef } from 'react';

const AnimatedBackground = ({ color = '200,16,46', numStars = 800, speed = 0.04 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = Math.max(1, window.innerWidth);
      const h = Math.max(1, window.innerHeight);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    class Star {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * canvas.clientWidth;
        this.y = Math.random() * canvas.clientHeight;
        this.z = initial ? Math.random() * canvas.clientWidth : canvas.clientWidth;
        this.v = Math.random() * 0.6 + 0.2;
      }

      update() {
        this.z -= speed * (this.v * 2 + 0.5);
        if (this.z < 1) this.reset(false);
      }

      draw() {
        const sx = (this.x - canvas.clientWidth / 2) / (this.z / (canvas.clientWidth / 2)) + canvas.clientWidth / 2;
        const sy = (this.y - canvas.clientHeight / 2) / (this.z / (canvas.clientHeight / 2)) + canvas.clientHeight / 2;
        const alpha = Math.max(0, 1 - this.z / canvas.clientWidth);
        const r = Math.max(0.3, (1 - this.z / canvas.clientWidth) * 2.8);

        if (sx < -50 || sx > canvas.clientWidth + 50 || sy < -50 || sy > canvas.clientHeight + 50) return;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) stars.push(new Star());
    };

    const resizeHandler = () => {
      setSize();
      init();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      ctx.fillStyle = 'rgba(0,0,0,0.12)';
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].draw();
      }

      animationId = requestAnimationFrame(animate);
    };

    setSize();
    init();
    window.addEventListener('resize', resizeHandler);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      cancelAnimationFrame(animationId);
    };
  }, [color, numStars, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{ background: 'transparent', zIndex: -1 }}
    />
  );
};

export default AnimatedBackground;