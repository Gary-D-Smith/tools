import { Work_Sans as WorkSans, Crimson_Pro as CrimsonPro } from "next/font/google"
import Hero from "@/components/hero"
import ProductivityApps from "@/components/productivity-apps"
import { cn } from "@/lib/utils"

const workSans = WorkSans({
  subsets: ["latin"],
  variable: "--font-work-sans",
})

const crimsonPro = CrimsonPro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
})

export default function Home() {
  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-br from-amber-50 to-orange-50",
        workSans.variable,
        crimsonPro.variable,
      )}
    >
      <Hero />
      <ProductivityApps />
    </div>
  )
}
