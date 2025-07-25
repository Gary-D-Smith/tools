import React, { useState } from "react";

interface ToolTypeHeroBadgeProps {
  label: string;
  className: string; // Tailwind classes
  showComingSoon?: boolean; // Whether to show "Coming soon" tooltip
  glowColor?: string; // Glow color for hover effect
  href?: string; // Optional href for navigation
}

const ToolTypeHeroBadge: React.FC<ToolTypeHeroBadgeProps> = ({ 
  label, 
  className, 
  showComingSoon = true,
  glowColor = "#000000", // Default fallback
  href
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  // Function to mix 25% white with the base color
  const mixWithWhite = (baseColor: string, whitePercent: number = 25) => {
    // Convert hex to RGB
    const hex = baseColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Mix with white (255, 255, 255)
    const mixedR = Math.round(r * (1 - whitePercent / 100) + 255 * (whitePercent / 100));
    const mixedG = Math.round(g * (1 - whitePercent / 100) + 255 * (whitePercent / 100));
    const mixedB = Math.round(b * (1 - whitePercent / 100) + 255 * (whitePercent / 100));
    
    // Convert back to hex
    return `#${mixedR.toString(16).padStart(2, '0')}${mixedG.toString(16).padStart(2, '0')}${mixedB.toString(16).padStart(2, '0')}`;
  };

  const exclamationColor = mixWithWhite(glowColor, 25);

  const handleClick = () => {
    if (href) {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        className={`
          inline-block font-work-sans font-semibold text-white rounded-lg shadow-md overflow-hidden 
          transition-all duration-300 ease-out cursor-pointer select-none
          hover:scale-105 sm:hover:scale-110 hover:shadow-2xl z-20
          px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2 border-2 sm:border-3 md:border-4 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg sm:rounded-xl
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
          className="absolute right-1 top-5 xl:top-6 -translate-y-1/2 font-medium italic pointer-events-none select-none text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl"
          style={{ color: exclamationColor }}
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
