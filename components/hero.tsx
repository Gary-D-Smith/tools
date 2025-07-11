import ToolTypeHeroBadge from "./ToolTypeHeroBadge"
import EveryoneWavyUnderline from "./EveryoneWavyUnderline"

const tags = [
  { name: "References", color: "bg-[#FB4C54] border-[#CD2A33]" },
  { name: "Creativity", color: "bg-[#AE69FA] border-[#7D4BB3]" },
  { name: "Productivity", color: "bg-[#FE4D11] border-[#B1360F]" },
  { name: "Organization", color: "bg-[#5074FE] border-[#3851B1]" },
  { name: "Tactile Tools", color: "bg-[#FFB900] border-[#C28D00]" },
  { name: "Extensions", color: "bg-[#27BB5D] border-[#1D8240]" },
]

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center p-2 lg:p-4 xl:p-4 overflow-hidden">
      {/* BG WRAPPER */}
      <div className="relative w-full h-full flex items-center bg-[#FFFBEB] rounded-3xl">
        {/* Floating Tags */}
        <div className="absolute inset-0 h-full w-full">
          <ToolTypeHeroBadge
            label={tags[0].name}
            className={`${tags[0].color} absolute left-[5%] top-[20vh] rotate-[-4deg] md:top-[25vh] md:left-[4%] lg:left-[5%] lg:rotate-[-10deg] lg:top-[65vh]`}
            showComingSoon={true}
          />
          <ToolTypeHeroBadge
            label={tags[1].name}
            className={`${tags[1].color} absolute right-[5%] top-[20vh] rotate-[4deg] md:top-[25vh] md:right-[4%] lg:right-[5%] lg:rotate-[10deg] lg:top-[65vh]`}
            showComingSoon={true}
          />
          <ToolTypeHeroBadge
            label={tags[2].name}
            className={`${tags[2].color} absolute left-[10%] rotate-[-3deg] top-[12.5vh] md:top-[15vh] md:left-[8%] lg:left-[6%] lg:rotate-[-6deg] lg:top-[35vh]`}
            showComingSoon={false}
          />
          <ToolTypeHeroBadge
            label={tags[3].name}
            className={`${tags[3].color} absolute right-[10%] rotate-[3deg] top-[12.5vh] md:top-[15vh] md:right-[8%] lg:right-[6%] lg:rotate-[6deg] lg:top-[35vh]`}
            showComingSoon={true}
          />
          <ToolTypeHeroBadge
            label={tags[4].name}
            className={`${tags[4].color} absolute left-[20%] rotate-[-3deg] top-[5vh] md:left-[22%] lg:left-[25%] lg:rotate-[-3deg] lg:top-[8vh]`}
            showComingSoon={true}
          />
          <ToolTypeHeroBadge
            label={tags[5].name}
            className={`${tags[5].color} absolute right-[20%] rotate-[3deg] top-[5vh] md:right-[22%] lg:right-[25%] lg:rotate-[3deg] lg:top-[8vh]`}
            showComingSoon={true}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col justify-between items-center w-full max-w-3xl min-h-[70vh] lg:min-h-[80vh] mx-auto pointer-events-none">
          {/* Headline - centered vertically */}
          <div className="flex-1 flex flex-col justify-center items-center pt-16">
            <h1 className="text-black leading-tight flex flex-col items-center gap-4">
              <span className="font-crimson font-medium text-6xl md:text-7xl lg:text-8xl">
                Why isn't
              </span>
              <span className="text-7xl sm:text-8xl md:text-8xl lg:text-9xl">
                <span className="relative inline-block group">
                  {/* Outline layer (underneath) */}
                  <span
                    className="absolute inset-0 z-10 font-work-sans font-semibold italic"
                    style={{
                      WebkitTextStroke: 'clamp(2px, 1.5vw, 15px) #FFFBEB',
                      color: 'transparent',
                      textShadow: `
                      2px 0 0 #FFFBEB, -2px 0 0 #FFFBEB, 0 2px 0 #FFFBEB, 0 -2px 0 #FFFBEB,
                      2px 2px 0 #FFFBEB, -2px -2px 0 #FFFBEB, 2px -2px 0 #FFFBEB, -2px 2px 0 #FFFBEB
                    `,
                      transformOrigin: 'center'
                    }}
                    aria-hidden="true"
                  >
                    Everyone
                  </span>
                  {/* Main text (on top) */}
                  <span
                    className="relative z-20 font-work-sans font-semibold italic text-black"
                    style={{ transformOrigin: 'center' }}
                    role="text"
                    aria-label="Everyone"
                  >
                    Everyone
                  </span>
                </span>
                <EveryoneWavyUnderline className="pl-2 -mt-[0.5rem] sm:-mt-3" />
              </span>
              <span className="font-crimson font-medium text-6xl md:text-7xl lg:text-8xl">
                using this?
              </span>
            </h1>
          </div>

          {/* Supporting Text - always at the bottom of the hero */}
          <div className="flex flex-col items-center gap-2 w-full max-w-[25rem] md:max-w-md px-4">
            <div className="bg-black/60 text-white px-6 py-4 rounded-2xl inline-block mb-2 shadow-lg">
              <p className="font-work-sans font-medium italic text-lg md:text-xl text-center">
                Thoughtfully chosen tools for a more intentional & joyful digital life.
              </p>
            </div>
            <p className="font-crimson font-medium text-black/60 text-lg italic">
              A Collection by Gary Smith
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
