import { creativity_apps } from "@/lib/creativity-data"
import ToolTypeSectionTitle from "./ToolTypeSectionTitle"
import AppCard from "./AppCard"

export default function CreativityApps() {
  return (
    <section id="creativity" className="p-8 lg:p-16 mx-auto">
      <div className="-mb-8 -ml-4 w-min">
        <ToolTypeSectionTitle
          label="Creativity"
          className="bg-[#FFB900] border-[#B38A0A]"
          showComingSoon={false}
          glowColor="#FFB900"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-[#FFFBEB] p-8 lg:p-16 rounded-3xl">
        {creativity_apps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </section>
  )
} 