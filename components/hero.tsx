import type React from "react"
import EveryoneWavyUnderline from "./EveryoneWavyUnderline"

const FloatingTag = ({
  children,
  className,
  rotation,
}: { children: React.ReactNode; className?: string; rotation?: string }) => (
  <div
    className={`
      absolute px-4 py-2 rounded-full text-white font-medium text-sm md:text-base
      shadow-lg transform transition-transform duration-300 hover:scale-105
      ${rotation || "rotate-0"} ${className}
    `}
  >
    {children}
  </div>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Floating Tags */}
      <FloatingTag
        className="bg-gradient-to-r from-yellow-400 to-orange-500 top-16 left-8 md:top-20 md:left-16"
        rotation="-rotate-12"
      >
        Tactile Tools
      </FloatingTag>

      <FloatingTag
        className="bg-gradient-to-r from-green-400 to-emerald-500 top-12 right-12 md:top-16 md:right-20"
        rotation="rotate-6"
      >
        Extensions
      </FloatingTag>

      <FloatingTag
        className="bg-gradient-to-r from-red-400 to-pink-500 top-32 left-4 md:top-40 md:left-12"
        rotation="rotate-3"
      >
        Productivity
      </FloatingTag>

      <FloatingTag
        className="bg-gradient-to-r from-blue-400 to-indigo-500 top-28 right-8 md:top-36 md:right-16"
        rotation="-rotate-6"
      >
        Organization
      </FloatingTag>

      <FloatingTag
        className="bg-gradient-to-r from-pink-400 to-red-500 bottom-32 left-12 md:bottom-40 md:left-20"
        rotation="rotate-12"
      >
        References
      </FloatingTag>

      <FloatingTag
        className="bg-gradient-to-r from-purple-400 to-pink-500 bottom-28 right-4 md:bottom-36 md:right-12"
        rotation="-rotate-9"
      >
        Creativity
      </FloatingTag>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="font-['Crimson_Pro'] italic">Why isn't</span>
            <br />
            <span className="relative inline-block font-['Crimson_Pro'] italic">
              Everyone
              <div className="absolute -bottom-2 left-0 w-full">
                <EveryoneWavyUnderline />
              </div>
            </span>
            <br />
            <span className="font-['Crimson_Pro'] italic">using this?</span>
          </h1>

          <div className="bg-gray-800 text-white px-6 py-4 rounded-2xl shadow-lg inline-block mb-4">
            <p className="text-lg md:text-xl font-['Work_Sans'] italic">
              Thoughtfully chosen tools for a<br />
              more intentional & joyful digital life.
            </p>
          </div>

          <p className="text-gray-600 text-lg font-['Crimson_Pro'] italic mt-4">A Collection by Gary Smith</p>
        </div>
      </div>
    </section>
  )
}
