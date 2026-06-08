import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });
  
  const [isHovered, setIsHovered] = useState(false);
  const [magneticTarget, setMagneticTarget] = useState<DOMRect | null>(null);

  useEffect(() => {
    // 1. Move internal target reference coordinates
    const onMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // 2. Continuous linear interpolation animation loop for the outer ring
    const renderLoop = () => {
      // Linear interpolation formula: current + (target - current) * easeFactor
      const easeFactor = 0.15; // Lower values = more elastic fluid lag

      if (!magneticTarget) {
        // Standard fluid trailing behavior
        ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * easeFactor;
        ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * easeFactor;
        
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0) translate(-50%, -50%)`;
          ringRef.current.style.width = "40px";
          ringRef.current.style.height = "40px";
          ringRef.current.style.borderRadius = "50%";
        }
      } else {
        // Magnetic Snapping logic: Outer ring expands and sticks to the element box boundaries
        const targetX = magneticTarget.left + magneticTarget.width / 2;
        const targetY = magneticTarget.top + magneticTarget.height / 2;

        ringCoords.current.x += (targetX - ringCoords.current.x) * easeFactor;
        ringCoords.current.y += (targetY - ringCoords.current.y) * easeFactor;

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0) translate(-50%, -50%)`;
          // Expand dimensions slightly wider than the hovered target boundary box
          ringRef.current.style.width = `${magneticTarget.width + 16}px`;
          ringRef.current.style.height = `${magneticTarget.height + 12}px`;
          ringRef.current.style.borderRadius = "8px"; // Morph seamlessly to a rounded box card layout
        }
      }

      requestAnimationFrame(renderLoop);
    };

    // 3. Delegation scanner catching active interactable states
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, .swiper-button-next, .swiper-button-prev, .tech-stack span");

      if (interactiveEl) {
        setIsHovered(true);
        // Small element buttons get magnetic snapping bounds
        if (interactiveEl.tagName === "BUTTON" || interactiveEl.tagName === "A" || interactiveEl.classList.contains("swiper-button-next") || interactiveEl.classList.contains("swiper-button-prev")) {
          setMagneticTarget(interactiveEl.getBoundingClientRect());
        }
      } else if (target.closest(".design-card, .project-card, .why-card")) {
        setIsHovered(true); // Large cards scale up cursor design safely without snapping full-width
        setMagneticTarget(null);
      } else {
        setIsHovered(false);
        setMagneticTarget(null);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    const animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [magneticTarget]);

  return (
    <>
      <div ref={dotRef} className="fluid-cursor-dot" />
      <div 
        ref={ringRef} 
        className={`fluid-cursor-ring ${isHovered ? "active-hover" : ""} ${magneticTarget ? "magnetic-active" : ""}`} 
      />
    </>
  );
};

export default CustomCursor;