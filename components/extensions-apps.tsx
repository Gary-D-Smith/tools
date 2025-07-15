import { extensions_apps } from "@/lib/extensions-data"
import ToolTypeSectionTitle from "./ToolTypeSectionTitle"
import AppCard from "./AppCard"

export default function ExtensionsApps() {
  return (
    <section id="extensions" className="p-8 lg:p-16 mx-auto">
      <div className="-mb-8 -ml-4 w-min">
        <ToolTypeSectionTitle
          label="Extensions"
          className="bg-[#AE69FA] border-[#7B4BB3]"
          showComingSoon={false}
          glowColor="#AE69FA"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-[#FFFBEB] p-8 lg:p-16 rounded-3xl">
        {extensions_apps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </section>
  )
} 