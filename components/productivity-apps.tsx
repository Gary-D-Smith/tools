import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { apps } from "@/lib/app-data"

export default function ProductivityApps() {
  return (
    <section className="px-4 py-16 max-w-7xl mx-auto">
      <div className="mb-8">
        <Badge className="bg-red-500 hover:bg-red-600 text-white text-lg px-6 py-3 mb-8">Productivity</Badge>
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
}

function AppCard({ app }: { app: App }) {
  const getDelightColor = (rating: number) => {
    if (rating >= 9) return "text-green-600"
    if (rating >= 7) return "text-yellow-600"
    if (rating >= 5) return "text-orange-600"
    return "text-red-600"
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <CardContent className="p-6">
        {/* App Icon & Name */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            {app.icon || app.name.charAt(0)}
          </div>
          <h3 className="font-work-sans font-bold text-lg text-gray-900">{app.name}</h3>
        </div>

        {/* Description */}
        <p className="font-work-sans text-sm text-gray-700 mb-4 leading-relaxed">{app.description}</p>

        {/* Use Case */}
        <div className="mb-4">
          <h4 className="font-work-sans font-semibold text-xs text-gray-500 uppercase tracking-wide mb-2">
            More thoughts on this...
          </h4>
          <p className="font-work-sans text-xs text-gray-600 leading-relaxed">{app.useCase}</p>
        </div>

        {/* Features */}
        {app.features.length > 0 && (
          <div className="mb-4">
            <ul className="space-y-1">
              {app.features.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="font-work-sans text-xs text-gray-600 leading-relaxed">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {app.tags.map((tag, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs px-2 py-1 bg-gray-100 text-gray-700">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Setup Since */}
        <p className="font-work-sans text-xs text-gray-500 mb-3">On my Setup Since {app.setupSince}</p>

        {/* Delight Meter */}
        <div className="flex items-center justify-between">
          <span className="font-work-sans text-xs text-gray-500">Delight Meter</span>
          <div className="flex items-center gap-1">
            <Star className={`w-4 h-4 ${getDelightColor(app.delightMeter)} fill-current`} />
            <span className={`font-work-sans font-bold text-sm ${getDelightColor(app.delightMeter)}`}>
              {app.delightMeter}/10
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
