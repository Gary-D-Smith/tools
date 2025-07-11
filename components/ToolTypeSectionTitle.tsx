import React, { useState } from "react";

interface ToolTypeHeroBadgeProps {
  label: string;
  className: string; // Tailwind classes
  showComingSoon?: boolean; // Whether to show "Coming soon" tooltip
  glowColor?: string; // Glow color for hover effect
}

const ToolTypeHeroBadge: React.FC<ToolTypeHeroBadgeProps> = ({ 
  label, 
  className, 
  showComingSoon = true,
  glowColor = "#000000" // Default fallback
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

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className={`
          inline-block font-work-sans font-semibold text-white rounded-xl shadow-md overflow-visible 
          transition-all duration-300 ease-out cursor-pointer select-none
          hover:scale-105 sm:hover:scale-110 hover:shadow-2xl z-20
          px-5 py-2 lg:px-6 lg:py-3 border-4 text-4xl sm:text-4xl md:text-4xl lg:text-5xl
          ${className}
        `}
        style={{
          boxShadow: isHovered 
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 30px ${glowColor}80, 0 0 30px ${glowColor}40`
            : undefined
        }}
      >
        {/* Label */}
        <span className="relative z-10">
            {label}

             {/* Exclamation mark background */}
            <span
            aria-hidden
            className="absolute -right-6 -bottom-2 font-semibold italic pointer-events-none select-none text-7xl lg:text-8xl xl:text-8xl"
            style={{ color: exclamationColor }}
            >
            !
            </span>
        </span>
      </div>

    </div>
  );
};

export default ToolTypeHeroBadge;
