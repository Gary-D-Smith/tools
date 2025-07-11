import React from "react";

export default function EveryoneWavyUnderline({ className }: { className?: string }) {
  const strokeWidth = 4;
  return (
    <div className={(className ? className + " " : "") + "relative opacity-70"}>
      <svg
        viewBox="0 0 100 12"
        className="w-[100%] h-4 md:h-6"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowingRainbow" x1="0%" y1="0%" x2="200%" y2="0%">
            <stop offset="0%" stopColor="#FB4C54">
              <animate attributeName="offset" values="-1;1" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="16.6%" stopColor="#FE4D11">
              <animate attributeName="offset" values="-0.833;1.166" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="33.3%" stopColor="#FFB900">
              <animate attributeName="offset" values="-0.666;1.333" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#27BB5D">
              <animate attributeName="offset" values="-0.5;1.5" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="66.6%" stopColor="#5074FE">
              <animate attributeName="offset" values="-0.333;1.666" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="83.3%" stopColor="#AE69FA">
              <animate attributeName="offset" values="-0.166;1.833" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#FB4C54">
              <animate attributeName="offset" values="0;2" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
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
      </svg>
    </div>
  );
}