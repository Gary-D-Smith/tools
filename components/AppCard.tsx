import { Card } from "@/components/ui/card"
import { FiCalendar } from "react-icons/fi";
import { FiStar } from "react-icons/fi";

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
  site?: string
  favorite?: boolean
}

interface AppCardProps {
  app: App
}

const FreeTag = () => {
  return (
    <div className="group relative">
      <div className="border-2 border-[#27BB5D] text-[#27BB5D] opacity-80 font-work-sans font-medium text-[11px] px-2 py-0 rounded-full whitespace-nowrap cursor-pointer">
        FREE
      </div>
      {/* Tooltip */}
      <div className="w-20 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-2 bg-white/95 text-gray-800 text-xs font-work-sans rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 pointer-events-none">
        <div className="text-center flex items-center justify-center gap-1">
          <span>yay!</span>
          <img src="/cat.gif" alt="Happy cat" className="w-3 h-3" />
        </div>
        {/* Tooltip arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
      </div>
    </div>
  )
}

const SetappTag = () => {
  return (
    <div className="group relative">
      <a 
        href="https://setapp.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border-2 border-gray-300 text-gray-500 opacity-80 font-work-sans font-medium text-[11px] px-2 py-0 rounded-full whitespace-nowrap flex items-center gap-1 cursor-pointer hover:opacity-100 transition-opacity duration-200"
      >
        <img src="/setapp-icon.png" alt="Setapp" className="w-3 h-3" />
        <span>Setapp</span>
      </a>
      {/* Tooltip */}
      <div className="w-44 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-2 bg-white/95 text-gray-800 text-xs font-work-sans rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 pointer-events-none">
        <div className="text-center mb-1 leading-tight">Setapp is like Netflix for productivity apps.</div>
        <div className="text-center font-semibold">Explore More! ⬇︎</div>
        {/* Tooltip arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
      </div>
    </div>
  )
}

const PaidTag = () => {
  return (
    <div className="border-2 border-[#4A90E2] text-[#4A90E2] opacity-80 font-work-sans font-medium text-[11px] px-2 py-0 rounded-full whitespace-nowrap">
      PAID
    </div>
  )
}

export default function AppCard({ app }: AppCardProps) {
  // Helper for delight meter color (using hero tag colors in rainbow order)
  const getDelightGradient = () =>
    "bg-gradient-to-r from-[#FB4C54] via-[#FE4D11] via-[#FFB900] via-[#27BB5D] via-[#5074FE] to-[#AE69FA]";

  // Capitalize the first letter of the useCase
  const capitalizeFirst = (str?: string) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

  // Helper function to render tags based on app tags
  const renderTags = () => {
    const tagComponents = [];
    
    if (app.tags.some(tag => tag.toLowerCase() === 'setapp')) {
      tagComponents.push(<SetappTag key="setapp" />);
    }
    if (app.tags.some(tag => tag.toLowerCase() === 'free')) {
      tagComponents.push(<FreeTag key="free" />);
    }
    // Only show Paid tag if it's the only tag (no other tags present)
    const hasSetapp = app.tags.some(tag => tag.toLowerCase() === 'setapp');
    const hasFree = app.tags.some(tag => tag.toLowerCase() === 'free');
    
    if (app.tags.some(tag => tag.toLowerCase() === 'paid') && !hasSetapp && !hasFree) {
      tagComponents.push(<PaidTag key="paid" />);
    }
    
    return tagComponents;
  };

  return (
    <Card className="flex flex-col items-center bg-white/80
    backdrop-blur-sm border-2 border-[#B4B0A8] rounded-3xl
    shadow-lg hover:shadow-xl transition-all duration-300
    hover:scale-[102%] p-6 pb-2 max-w-sm relative">
      {/* Star icon in top right if favorited */}
      {app.favorite && (
        <div className="absolute rotate-6 -top-4 -right-4 z-20 group">
            <img 
              src="/star.svg" 
              alt="Favorite" 
              className="w-11 h-11 transition-all duration-500 ease-out
              hover:rotate-180 transform-gpu cursor-pointer" 
            />
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white/95 text-gray-800 text-sm font-work-sans rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap z-30 pointer-events-none">
              This is one of Gary's all-time favorites!
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
        </div>
      )}

      {/* Tags positioned in top left */}
      <div className="absolute top-4 left-4 flex flex-col gap-1 z-10 items-start">
        {renderTags()}
      </div>
      
      {/* App Image */}
      <div className="flex justify-center w-full mb-0">
        {app.site ? (
          <a 
            href={app.site} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <img
              src={`/app-images/${app.img}`}
              alt={app.name}
              className="w-28 h-38 object-contain border-gray-200 bg-white 
              transition-all duration-300 ease-in-out
              group-hover:scale-110 group-hover:rotate-3
              cursor-pointer"
            />
          </a>
        ) : (
          <img
            src={`/app-images/${app.img}`}
            alt={app.name}
            className="w-28 h-38 object-contain border-gray-200 bg-white"
          />
        )}
      </div>
      {/* App Name */}
      <h3 className="font-work-sans font-medium text-3xl text-center text-gray-900 mb-4">{app.name}</h3>
      {/* For When Section (styled to match reference) */}
      <div className="w-full flex justify-center mb-3 relative">
        <div className="absolute text-center w-full font-work-sans font-semibold text-sm rounded-tr-lg rounded-tl-lg h-5 bg-[#EEEDEB] text-[#9e9c99]">
          For When:
        </div>
        <div className="w-full rounded-2xl border border-black/10 p-4 pb-2 pt-6 text-center font-crimson font-medium text-xl leading-tight">
          {capitalizeFirst(app.useCase)}
        </div>
      </div>
      {/* Features (More thoughts...) */}
      {app.features && app.features.length > 0 && (
        <div className="w-full mb-2">
          <ul className="space-y-1.5 font-work-sans text-justify">
            {app.features.map((feature, idx) => (
              <li key={idx} className="text-[#5d5b56] text-[13px] leading-tight pl-4 relative">
                <span className="absolute left-0 text-xl top-[-5px]">•</span>
                <span className="block">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="w-full flex flex-col items-center mt-auto">
        {/* Divider */}
        <div className="w-full h-[2px] bg-[#E3E2E0] my-3 col-span-full rounded-full"></div>

        {/* On My Setup Since */}
        <div className="w-full flex items-center justify-center mb-1 gap-2 font-work-sans">
          <span className="italic font-semibold text-[#5B5B5B] text-md">On My Setup Since:</span>
          <span className="flex items-center gap-1">
            <span 
              className={`font-bold px-2 py-0 rounded-md tracking-wide shadow-inner text-sm opacity-70 ${
                app.setupSince === '2019' 
                  ? 'text-white bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-lg' // Amber
                  : app.setupSince === '2020'
                  ? 'text-white bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 shadow-lg' // Grey
                  : app.setupSince === '2021'
                  ? 'text-white bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 shadow-lg' // Amber
                  : app.setupSince === '2022'
                  ? 'text-white bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-lg' // Amber
                  : app.setupSince === '2023'
                  ? 'text-white bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 shadow-lg' // Grey
                  : app.setupSince === '2024'
                  ? 'text-white bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 shadow-lg' // Amber
                  : 'text-white bg-[#8E8C8C]' // Default gray for other years
              }`}
            >
              {app.setupSince}
            </span>
          </span>
        </div>

        {/* Delight Meter */}
        <div className="w-[110%] flex flex-col items-center group relative">
          <div className="w-full bg-[#5B5B5B] rounded-2xl rounded-b-xl pb-1 px-1 flex flex-col shadow-inner cursor-pointer">
            <div className="flex items-center justify-between mb-1 text-sm font-crimson italic text-white px-4">
              <span className=" text-[15px]">Delight-O-Meter</span>
              <div className="flex-1 h-px bg-white mx-2"></div>
              <span>
                <span className="font-semibold">{app.delightMeter}</span>
                <span> / 10</span>
              </span>
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white/95 text-gray-800 text-xs font-work-sans rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 pointer-events-none w-48">
              <div className="text-center leading-tight">Real-world joy rating. ✨</div>
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
            <div className="w-full h-4 bg-white rounded-full flex items-center border-4 border-white relative overflow-hidden">
              <div
                className={`h-full rounded-full`}
                style={{ 
                  width: '100%',
                  opacity: 0.7,
                  clipPath: `inset(0 ${100 - (app.delightMeter / 10) * 100}% 0 0)`,
                  transition: 'clip-path 0.5s',
                  background: 'linear-gradient(90deg, #FB4C54 0%, #FE4D11 17%, #FFB900 34%, #27BB5D 51%, #5074FE 68%, #AE69FA 85%)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
    
  );
}

export type { App }
