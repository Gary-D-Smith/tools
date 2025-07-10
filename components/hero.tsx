import { Badge } from "@/components/ui/badge"
import EveryoneWavyUnderline from "./EveryoneWavyUnderline"

const tags = [
  { name: "Tactile Tools", color: "bg-[#FFB900] border-[#C28D00]" },
  { name: "Extensions", color: "bg-[#27BB5D] border-[#1D8240]" },
  { name: "Productivity", color: "bg-[#FE4D11] border-[#B1360F]" },
  { name: "Organization", color: "bg-[#5074FE] border-[#3851B1]" },
  { name: "References", color: "bg-[#FB4C54] border-[#CD2A33]" },
  { name: "Creativity", color: "bg-[#AE69FA] border-[#7D4BB3]" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Floating Tags */}
      <div className="absolute inset-0 pointer-events-none">
        <Badge
          className={`${tags[0].color} absolute top-20 left-8 md:left-20 rotate-[-8deg]`}
        >
          {tags[0].name}
        </Badge>
        <Badge
          className={`${tags[1].color} absolute top-16 right-12 md:right-24 rotate-[12deg]`}
        >
          {tags[1].name}
        </Badge>
        <Badge
          className={`${tags[2].color} absolute top-1/3 left-4 md:left-16 rotate-[-15deg]`}
        >
          {tags[2].name}
        </Badge>
        <Badge
          className={`${tags[3].color} absolute top-1/3 right-8 md:right-20 rotate-[8deg]`}
        >
          {tags[3].name}
        </Badge>
        <Badge
          className={`${tags[4].color} absolute bottom-1/3 left-12 md:left-24 rotate-[15deg]`}
        >
          {tags[4].name}
        </Badge>
        <Badge
          className={`${tags[5].color} absolute bottom-1/3 right-4 md:right-16 rotate-[-12deg]`}
        >
          {tags[5].name}
        </Badge>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-between items-center w-full max-w-3xl min-h-[80vh] mx-auto">
        {/* Headline - centered vertically */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-black leading-tight flex flex-col items-center gap-4">
            <span className="font-crimson font-medium text-4xl md:text-6xl lg:text-8xl">
              Why isn't
            </span>
            <span className="text-5xl md:text-7xl lg:text-9xl">
              <span className="font-work-sans font-semibold relative z-10 italic">
                Everyone
              </span>
              <EveryoneWavyUnderline />
            </span>
            <span className="font-crimson font-medium text-4xl md:text-6xl lg:text-8xl">
              using this?
            </span>
          </h1>
        </div>

        {/* Supporting Text - always at the bottom of the hero */}
        <div className="flex flex-col items-center gap-2 max-w-[28rem]">
          <div className="bg-black/60 text-white px-6 py-4 rounded-2xl inline-block mb-2 shadow-lg">
            <p className="font-work-sans font-medium italic text-lg md:text-xl text-center">
              Thoughtfully chosen tools for a more intentional & joyful digital life.
            </p>
          </div>
          <p className="font-crimson font-medium text-gray-600 text-lg italic">
            A Collection by Gary Smith
          </p>
        </div>
      </div>
    </section>
  )
}
