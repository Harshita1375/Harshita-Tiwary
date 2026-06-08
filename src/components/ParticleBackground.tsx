import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 140,
    };

    type Particle = {
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      baseSize: number;
    };

    let particles: Particle[] = [];

    // ✅ Resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", resize);

    // ✅ Mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseout", handleMouseLeave);

    // ✅ Init particles
    const init = () => {
      particles = [];
      const count = (canvas.width * canvas.height) / 14000;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: Math.random() * 0.4 - 0.2,
          dy: Math.random() * 0.4 - 0.2,
          size: Math.random() * 1.5 + 1,
          baseSize: 0,
        });
      }

      // fix baseSize after init
      particles.forEach((p) => (p.baseSize = p.size));
    };

    init();

    // ✅ Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // bounce
        if (p.x > canvas.width || p.x < 0) p.dx *= -1;
        if (p.y > canvas.height || p.y < 0) p.dy *= -1;

        // mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            p.size = p.baseSize * 2;

            if (mouse.x > p.x) p.x -= 0.3;
            else p.x += 0.3;

            if (mouse.y > p.y) p.y -= 0.3;
            else p.y += 0.3;
          } else if (p.size > p.baseSize) {
            p.size -= 0.1;
          }
        }

        p.x += p.dx;
        p.y += p.dy;

        // draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 216, 255, 0.35)";
        ctx.fill();
      }

      // connect lines
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.strokeStyle = `rgba(0, 216, 255, ${(1 - dist / 100) * 0.1})`;
            ctx.lineWidth = 0.6;

            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // ✅ cleanup
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "#0d1117",
      }}
    />
  );
};

export default ParticleBackground;