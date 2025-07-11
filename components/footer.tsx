export default function Footer() {
  return (
    <footer className="w-full pb-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 text-white font-work-sans">
          <span className="text-lg">Made with</span>
          <span className="text-2xl animate-pulse">❤️</span>
          <span className="text-lg">by</span>
        </div>
        
        <a 
          href="https://garysmith.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="flex items-center gap-2 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-[0.2deg]">
            <img 
              src="/gary.svg" 
              alt="Gary Smith" 
              className="h-12 w-auto transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6"
            />
          </div>
        </a>
      </div>
    </footer>
  )
} 