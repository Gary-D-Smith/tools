import React from "react";

export default function EveryoneWavyUnderline() {
  return (
    <div className="">
      <svg
        viewBox="0 0 100 20"
        className="w-[110%] h-6 md:h-8"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Repeating gradient for seamless animation */}
          <linearGradient
            id="rainbow"
            x1="0%" y1="0%" x2="200%" y2="0%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FB4C54" />
            <stop offset="16.6%" stopColor="#FE4D11" />
            <stop offset="33.3%" stopColor="#FFB900" />
            <stop offset="50%" stopColor="#27BB5D" />
            <stop offset="66.6%" stopColor="#5074FE" />
            <stop offset="83.3%" stopColor="#AE69FA" />
            <stop offset="100%" stopColor="#FB4C54" />
            {/* Repeat the same stops for seamless loop */}
            <stop offset="116.6%" stopColor="#FE4D11" />
            <stop offset="133.3%" stopColor="#FFB900" />
            <stop offset="150%" stopColor="#27BB5D" />
            <stop offset="166.6%" stopColor="#5074FE" />
            <stop offset="183.3%" stopColor="#AE69FA" />
            <stop offset="200%" stopColor="#FB4C54" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="0 0"
              to="100 0"
              dur="16s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        <path
          stroke="url(#rainbow)"
          strokeWidth="2.5"
          fill="transparent"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            keyTimes="0;0.5;1"
            values="
              M0,10 Q5,5 10,10 T20,10 T30,10 T40,10 T50,10 T60,10 T70,10 T80,10 T90,10 T100,10;
              M0,10 Q5,13 10,10 T20,10 T30,10 T40,10 T50,10 T60,10 T70,10 T80,10 T90,10 T100,10;
              M0,10 Q5,5 10,10 T20,10 T30,10 T40,10 T50,10 T60,10 T70,10 T80,10 T90,10 T100,10
            "
          />
        </path>
      </svg>
    </div>
  );
}