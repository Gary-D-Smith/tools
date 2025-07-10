export default function EveryoneWavyUnderline() {
  return (
    <div className="relative">
      <svg viewBox="0 0 100 12" className="w-[110%] h-4 md:h-6" preserveAspectRatio="none">
        <defs>
          {/* Smooth flowing gradient that matches the reference */}
          <linearGradient id="flowingRainbow" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6B6B">
              <animate attributeName="stop-color" dur="6s" repeatCount="indefinite" values="#FF6B6B;#FF8E53;#FF6B6B" />
            </stop>
            <stop offset="16.67%" stopColor="#FF8E53">
              <animate attributeName="stop-color" dur="6s" repeatCount="indefinite" values="#FF8E53;#FFD93D;#FF8E53" />
            </stop>
            <stop offset="33.33%" stopColor="#FFD93D">
              <animate attributeName="stop-color" dur="6s" repeatCount="indefinite" values="#FFD93D;#6BCF7F;#FFD93D" />
            </stop>
            <stop offset="50%" stopColor="#6BCF7F">
              <animate attributeName="stop-color" dur="6s" repeatCount="indefinite" values="#6BCF7F;#4ECDC4;#6BCF7F" />
            </stop>
            <stop offset="66.67%" stopColor="#4ECDC4">
              <animate attributeName="stop-color" dur="6s" repeatCount="indefinite" values="#4ECDC4;#45B7D1;#4ECDC4" />
            </stop>
            <stop offset="83.33%" stopColor="#45B7D1">
              <animate attributeName="stop-color" dur="6s" repeatCount="indefinite" values="#45B7D1;#96CEB4;#45B7D1" />
            </stop>
            <stop offset="100%" stopColor="#96CEB4">
              <animate attributeName="stop-color" dur="6s" repeatCount="indefinite" values="#96CEB4;#FFEAA7;#96CEB4" />
            </stop>

            {/* Gradient position animation for smooth flow */}
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              dur="8s"
              repeatCount="indefinite"
              values="0 0; 50 0; 0 0"
            />
          </linearGradient>

          {/* Secondary gradient for depth */}
          <linearGradient id="flowingRainbow2" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF8E53" stopOpacity="0.7" />
            <stop offset="25%" stopColor="#FFD93D" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#6BCF7F" stopOpacity="0.7" />
            <stop offset="75%" stopColor="#45B7D1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#DDA0DD" stopOpacity="0.7" />

            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              dur="12s"
              repeatCount="indefinite"
              values="0 0; -30 0; 0 0"
            />
          </linearGradient>
        </defs>

        {/* Main wavy path */}
        <path
          stroke="url(#flowingRainbow)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        >
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="
              M0,6 Q12.5,3 25,6 T50,6 T75,6 T100,6;
              M0,6 Q12.5,9 25,6 T50,6 T75,6 T100,6;
              M0,6 Q12.5,3 25,6 T50,6 T75,6 T100,6
            "
          />
        </path>

        {/* Secondary path for depth and smoothness */}
        <path
          stroke="url(#flowingRainbow2)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,6 Q16.67,4 33.33,6 T66.67,6 T100,6;
              M0,6 Q16.67,8 33.33,6 T66.67,6 T100,6;
              M0,6 Q16.67,4 33.33,6 T66.67,6 T100,6
            "
          />
        </path>

        {/* Subtle highlight path */}
        <path stroke="url(#flowingRainbow)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8">
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="
              M0,5.5 Q20,2.5 40,5.5 T80,5.5 T100,5.5;
              M0,5.5 Q20,8.5 40,5.5 T80,5.5 T100,5.5;
              M0,5.5 Q20,2.5 40,5.5 T80,5.5 T100,5.5
            "
          />
        </path>
      </svg>
    </div>
  )
}
