import { Badge } from "@/components/ui/badge"

const tags = [
  { name: "Tactile Tools", color: "bg-amber-400 hover:bg-amber-500" },
  { name: "Extensions", color: "bg-emerald-400 hover:bg-emerald-500" },
  { name: "Productivity", color: "bg-red-500 hover:bg-red-600" },
  { name: "Organization", color: "bg-blue-500 hover:bg-blue-600" },
  { name: "References", color: "bg-pink-500 hover:bg-pink-600" },
  { name: "Creativity", color: "bg-purple-500 hover:bg-purple-600" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Floating Tags */}
      <div className="absolute inset-0 pointer-events-none">
        <Badge
          className={`${tags[0].color} text-white absolute top-20 left-8 md:left-20 text-sm px-4 py-2 rotate-[-8deg] shadow-lg`}
        >
          {tags[0].name}
        </Badge>
        <Badge
          className={`${tags[1].color} text-white absolute top-16 right-12 md:right-24 text-sm px-4 py-2 rotate-[12deg] shadow-lg`}
        >
          {tags[1].name}
        </Badge>
        <Badge
          className={`${tags[2].color} text-white absolute top-1/3 left-4 md:left-16 text-sm px-4 py-2 rotate-[-15deg] shadow-lg`}
        >
          {tags[2].name}
        </Badge>
        <Badge
          className={`${tags[3].color} text-white absolute top-1/3 right-8 md:right-20 text-sm px-4 py-2 rotate-[8deg] shadow-lg`}
        >
          {tags[3].name}
        </Badge>
        <Badge
          className={`${tags[4].color} text-white absolute bottom-1/3 left-12 md:left-24 text-sm px-4 py-2 rotate-[15deg] shadow-lg`}
        >
          {tags[4].name}
        </Badge>
        <Badge
          className={`${tags[5].color} text-white absolute bottom-1/3 right-4 md:right-16 text-sm px-4 py-2 rotate-[-12deg] shadow-lg`}
        >
          {tags[5].name}
        </Badge>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 className="font-crimson text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Why isn't{" "}
          <span className="relative inline-block">
            <span className="relative z-10 italic">Everyone</span>
            <div className="absolute bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-red-300 via-yellow-300 via-green-300 via-blue-300 to-purple-300 opacity-60 rounded-full transform -rotate-1"></div>
          </span>
          <br />
          using this?
        </h1>

        <div className="bg-gray-800 text-white px-6 py-4 rounded-2xl inline-block mb-6 shadow-lg">
          <p className="font-work-sans text-sm md:text-base">
            Thoughtfully chosen tools for a<br />
            more intentional & joyful digital life.
          </p>
        </div>

        <p className="font-crimson text-gray-600 text-lg italic">A Collection by Gary Smith</p>
      </div>
    </section>
  )
}
