import React, { useState } from "react";

interface ToolTypeHeroBadgeProps {
  label: string;
  className: string; // Tailwind classes
  showComingSoon?: boolean; // Whether to show "Coming soon" tooltip
}

const ToolTypeHeroBadge: React.FC<ToolTypeHeroBadgeProps> = ({ 
  label, 
  className, 
  showComingSoon = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  // Extract background color from className for glow effect
  const getGlowColor = () => {
    if (className.includes('bg-[#FB4C54]')) return '#FB4C54'; // References - Red
    if (className.includes('bg-[#AE69FA]')) return '#AE69FA'; // Creativity - Purple
    if (className.includes('bg-[#FE4D11]')) return '#FE4D11'; // Productivity - Orange
    if (className.includes('bg-[#5074FE]')) return '#5074FE'; // Organization - Blue
    if (className.includes('bg-[#FFB900]')) return '#FFB900'; // Tactile Tools - Yellow
    if (className.includes('bg-[#27BB5D]')) return '#27BB5D'; // Extensions - Green
    return '#000000'; // Default
  };

  const glowColor = getGlowColor();

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className={`
          inline-block px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2 border-2 sm:border-3 md:border-4 font-work-sans font-semibold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg sm:rounded-xl shadow-md overflow-hidden 
          transition-all duration-300 ease-out cursor-pointer select-none
          hover:scale-105 sm:hover:scale-110 hover:shadow-2xl z-20
          ${className}
        `}
        style={{
          boxShadow: isHovered 
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 30px ${glowColor}80, 0 0 30px ${glowColor}40`
            : undefined
        }}
      >
        {/* Exclamation mark background */}
        <span
          aria-hidden
          className="absolute right-1 top-5 xl:top-6 -translate-y-1/2 text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-white/25 font-medium italic pointer-events-none select-none"
        >
          !
        </span>
        {/* Label */}
        <span className="relative z-10">{label}</span>
      </div>

      {/* Custom "Coming soon" tooltip that tracks cursor */}
      {showComingSoon && isHovered && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 40,
          }}
        >
          <div className="bg-white text-black px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-lg border border-gray-200 font-work-sans font-medium text-xs sm:text-sm whitespace-nowrap">
            Coming Soon!
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolTypeHeroBadge;
