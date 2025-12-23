import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];
    const numStars = 1000;
    const warpSpeed = 0.05;

    // More robust resize function
    const resizeCanvas = () => {
      // Use the element's actual size for the drawing buffer
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      // Re-initialize stars on resize to fit the new dimensions
      init(); 
    };

    window.addEventListener("resize", resizeCanvas);
    
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * canvas.width;
      }

      update() {
        this.z -= warpSpeed;
        if (this.z < 1) {
          this.z = canvas.width;
          this.x = Math.random() * canvas.width - canvas.width / 2;
          this.y = Math.random() * canvas.height - canvas.height / 2;
        }
      }

      draw() {
        const sx = (this.x / this.z) * (canvas.width / 2) + (canvas.width / 2);
        const sy = (this.y / this.z) * (canvas.height / 2) + (canvas.height / 2);

        // Don't draw if the star is off-screen
        if (sx < 0 || sx > canvas.width || sy < 0 || sy > canvas.height) {
          return;
        }

        const r = Math.max(0.1, (1 - this.z / canvas.width) * 2.5);
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 0, 0, ${1 - this.z / canvas.width})`;
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      // Check for valid canvas dimensions before drawing
      if (canvas.width > 0 && canvas.height > 0) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Trail effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach((star) => {
          star.update();
          star.draw();
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial resize and start animation
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ background: "#000000" }}
    />
  );
};

export default AnimatedBackground;