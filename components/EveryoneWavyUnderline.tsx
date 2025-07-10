import React from "react";

export default function EveryoneWavyUnderline({ className }: { className?: string }) {
  const strokeWidth = 4;
  return (
    <div className={className ? className + " relative" : "relative"}>
      <svg viewBox="0 0 100 12" className="w-[100%] h-4 md:h-6" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flowingRainbow" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="16.7%" stopColor="#FF8E53" />
            <stop offset="33.3%" stopColor="#FFD93D" />
            <stop offset="50%" stopColor="#6BCF7F" />
            <stop offset="66.7%" stopColor="#45B7D1" />
            <stop offset="83.3%" stopColor="#A685FF" />
            <stop offset="100%" stopColor="#EA5CFF" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="0 0" to="20 0"
              dur="20s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        {/* Left circle cap */}
        <circle cx="0" cy="6" r={strokeWidth / 2} fill="url(#flowingRainbow)" />
        {/* Animated wave */}
        <path
          stroke="url(#flowingRainbow)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        >
          <animate
            attributeName="d"
            dur="7s"
            repeatCount="indefinite"
            values="
              M0,6 Q2.5,2 5,6 T10,6 T15,6 T20,6 T25,6 T30,6 T35,6 T40,6 T45,6 T50,6 T55,6 T60,6 T65,6 T70,6 T75,6 T80,6 T85,6 T90,6 T95,6 T100,6;
              M0,6 Q2.5,10 5,6 T10,6 T15,6 T20,6 T25,6 T30,6 T35,6 T40,6 T45,6 T50,6 T55,6 T60,6 T65,6 T70,6 T75,6 T80,6 T85,6 T90,6 T95,6 T100,6;
              M0,6 Q2.5,2 5,6 T10,6 T15,6 T20,6 T25,6 T30,6 T35,6 T40,6 T45,6 T50,6 T55,6 T60,6 T65,6 T70,6 T75,6 T80,6 T85,6 T90,6 T95,6 T100,6
            "
          />
        </path>
        {/* Right circle cap */}
        <circle cx="100" cy="6" r={strokeWidth / 2} fill="url(#flowingRainbow)" />
      </svg>
    </div>
  );
}