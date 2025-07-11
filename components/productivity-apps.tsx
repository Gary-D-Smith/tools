import { apps } from "@/lib/app-data"
import ToolTypeSectionTitle from "./ToolTypeSectionTitle"
import AppCard from "./AppCard"

export default function ProductivityApps() {
  return (
    <section id="productivity" className="p-8 lg:p-16 mx-auto">
      <div className="-mb-8 -ml-4 w-min">
        <ToolTypeSectionTitle
          label="Productivity"
          className="bg-[#FE4D11] border-[#B1360F]"
          showComingSoon={false}
          glowColor="#FE4D11"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-[#FFFBEB] p-8 lg:p-16 rounded-3xl">

        <h2 className="font-crimson font-medium text-5xl text-left w-full text-gray-900 col-span-full pt-4 lg:pt-0">
          Must Have:
        </h2>
        {apps.mustHave.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}

        <div className="w-full h-1 bg-[#B4B0A8] my-8 col-span-full rounded-full"></div>

        <h2 className="font-crimson font-medium text-5xl text-left w-full text-gray-900 col-span-full pt-4 lg:pt-0">
          Should Have:
        </h2>
        {apps.shouldHave.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}

        <div className="w-full h-1 bg-[#B4B0A8] my-8 col-span-full rounded-full"></div>

        <h2 className="font-crimson font-medium text-5xl text-left w-full text-gray-900 col-span-full pt-4 lg:pt-0">
          Nice to Have:
        </h2>
        {apps.nicheHave.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}

      </div>

    </section>
  )
}
