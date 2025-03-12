"use client"

import { HeroOrbit } from "./HeroOrbit"



export const CodeElements = () => {
  return (
    <>
      <HeroOrbit size={800} rotation={-72}>
        <div className="font-mono text-xs text-cyan-400/70 bg-gray-900/40 p-2 rounded border border-cyan-500/20 animate-move-alternate">
          {'<div className="hero">'}
        </div>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={20}>
        <div className="font-mono text-xs text-pink-400/70 bg-gray-900/40 p-2 rounded border border-pink-500/20 animate-move-alternate">
          {"const [state, setState] = useState()"}
        </div>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={144}>
        <div className="font-mono text-xs text-amber-400/70 bg-gray-900/40 p-2 rounded border border-amber-500/20 animate-move-alternate">
          {"@keyframes float { ... }"}
        </div>
      </HeroOrbit>
      <HeroOrbit size={400} rotation={-22}>
        <div className="font-mono text-xs text-green-400/70 bg-gray-900/40 p-2 rounded border border-green-500/20 animate-move-alternate">
          {"{ }"}
        </div>
      </HeroOrbit>
    </>
  )
}

export const DesignElements = () => {
  return (
    <>
      <HeroOrbit size={800} rotation={-72}>
        <div className="bg-gradient-to-r from-purple-500/30 to-indigo-500/30 size-16 rounded-lg border border-white/10 flex items-center justify-center animate-move-alternate">
          <svg className="size-8 text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" fill="currentColor" fillOpacity="0.5" />
            <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z" fill="currentColor" fillOpacity="0.7" />
            <path d="M12 12.5H8.5a3.5 3.5 0 100 7H12v-7z" fill="currentColor" fillOpacity="0.5" />
            <path d="M12 19.5h3.5a3.5 3.5 0 100-7H12v7z" fill="currentColor" fillOpacity="0.7" />
          </svg>
        </div>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <div className="bg-gradient-to-r from-blue-500/30 to-cyan-500/30 size-12 rounded-lg border border-white/10 flex items-center justify-center animate-move-alternate">
          <svg className="size-6 text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" fillOpacity="0.6" />
            <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" />
            <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
          </svg>
        </div>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={144}>
        <div className="bg-gradient-to-r from-amber-500/30 to-orange-500/30 size-14 rounded-lg border border-white/10 flex items-center justify-center animate-move-alternate">
          <svg className="size-7 text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" />
            <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.6" />
          </svg>
        </div>
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-14}>
        <div className="bg-gradient-to-r from-emerald-500/30 to-teal-500/30 size-10 rounded-lg border border-white/10 flex items-center justify-center animate-move-alternate">
          <svg className="size-5 text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeOpacity="0.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </HeroOrbit>
    </>
  )
}
