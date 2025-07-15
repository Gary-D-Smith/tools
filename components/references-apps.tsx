import { references_apps } from "@/lib/references-data"
import ToolTypeSectionTitle from "./ToolTypeSectionTitle"
import AppCard from "./AppCard"

export default function ReferencesApps() {
  return (
    <section id="references" className="p-8 lg:p-16 mx-auto">
      <div className="-mb-8 -ml-4 w-min">
        <ToolTypeSectionTitle
          label="References"
          className="bg-[#27BB5D] border-[#1A8A47]"
          showComingSoon={false}
          glowColor="#27BB5D"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-[#FFFBEB] p-8 lg:p-16 rounded-3xl">
        {references_apps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </section>
  )
} 