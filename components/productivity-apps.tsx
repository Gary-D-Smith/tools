import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { apps } from "@/lib/app-data"
import ToolTypeHeroBadge from "./ToolTypeHeroBadge"

export default function ProductivityApps() {
  return (
    <section className="px-4 py-16 max-w-7xl mx-auto">
      <div className="mb-8">
        <ToolTypeHeroBadge 
          label="Productivity" 
          className="bg-[#FE4D11] border-[#B1360F]" 
          showComingSoon={false}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {apps.mustHave.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </section>
  )
}

interface App {
  name: string
  description: string
  useCase: string
  features: string[]
  tags: string[]
  setupSince: string
  delightMeter: number
  icon?: string
  img?: string
}

function AppCard({ app }: { app: App }) {
  // Helper for delight meter color (simple rainbow gradient)
  const getDelightGradient = () =>
    "bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-pink-400";

  // Capitalize the first letter of the useCase
  const capitalizeFirst = (str?: string) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

  return (
    <Card className="flex flex-col items-center bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden p-6">
      {/* App Image */}
      <div className="flex justify-center w-full mb-2">
        <img
          src={`/app-images/${app.img}`}
          alt={app.name}
          className="w-32 h-32 object-contain border-gray-200 bg-white"
        />
      </div>
      {/* App Name */}
      <h3 className="font-work-sans font-medium text-3xl text-center text-gray-900 mb-4">{app.name}</h3>
      {/* For When Section (styled to match reference) */}
      <div className="w-full flex justify-center mb-8 relative">
        <div className="absolute text-center w-full font-work-sans font-semibold text-sm rounded-tr-lg rounded-tl-lg h-5 bg-[#EEEDEB] text-[#9e9c99]">
          For When:
        </div>
        <div className="w-full rounded-2xl border border-black/10 p-4 pb-2 pt-6 text-center font-crimson text-xl leading-tight">
          {capitalizeFirst(app.useCase)}
        </div>
      </div>
      {/* Features (More thoughts...) */}
      {/* {app.features && app.features.length > 0 && (
        <div className="w-full flex justify-center mb-8">
          <div className="w-full bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-4">
            <span className="block text-center italic font-semibold text-gray-500 text-lg tracking-wide">MORE THOUGHTS ON THIS...</span>
            <ul className="mt-2 space-y-1">
              {app.features.map((feature, idx) => (
                <li key={idx} className="text-center text-gray-700 text-base">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )} */}
      {/* Delight Meter */}
      <div className="w-full mt-auto">
        <div className="flex items-center justify-between px-4 mb-1">
          <span className="font-semibold italic text-white bg-gray-800 rounded-full px-3 py-1 text-xs">Delight-O-Meter</span>
          <span className="font-bold text-white bg-gray-800 rounded-full px-3 py-1 text-xs">{app.delightMeter}/10</span>
        </div>
        <div className={`h-4 w-full rounded-full ${getDelightGradient()} border-2 border-gray-300`}>
          {/* Optionally, you could fill the bar proportionally to delightMeter */}
        </div>
      </div>
    </Card>
  );
}
