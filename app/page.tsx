"use client"
import { Work_Sans as WorkSans, Crimson_Pro as CrimsonPro } from "next/font/google"
import Hero from "@/components/hero"
import ProductivityApps from "@/components/productivity-apps"
import OrganizationApps from "@/components/organization-apps"
import CreativityApps from "@/components/creativity-apps"
import ReferencesApps from "@/components/references-apps"
import ExtensionsApps from "@/components/extensions-apps"
import Footer from "@/components/footer"
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
        "min-h-screen texture-black",
        workSans.variable,
        crimsonPro.variable,
      )}
    >
      <Hero />
      <ProductivityApps />
      <OrganizationApps />
      <CreativityApps />
      <ExtensionsApps />
      <ReferencesApps />
      <Footer />
    </div>
  )
}
