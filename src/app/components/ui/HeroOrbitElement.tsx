"use client"

// Option 1: Floating UI Elements
import { HeroOrbit } from "./HeroOrbit"

export const FloatingUIElements = () => {
  return (
    <>
      <HeroOrbit size={800} rotation={-72}>
        <div className="rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 p-3 backdrop-blur-sm animate-pulse">
          <div className="w-16 h-2 bg-white/20 rounded-full mb-2"></div>
          <div className="w-10 h-2 bg-white/20 rounded-full"></div>
        </div>
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20}>
        <div className="rounded-full bg-gradient-to-r from-cyan-500/30 to-teal-500/30 size-12 flex items-center justify-center border border-white/10 animate-bounce-slow">
          <div className="size-6 border-2 border-white/30 rounded-full"></div>
        </div>
      </HeroOrbit>

      <HeroOrbit size={650} rotation={144}>
        <div className="rounded-md bg-gradient-to-tr from-pink-500/20 to-orange-500/20 p-2 border border-white/10 rotate-12 animate-float">
          <div className="w-12 h-1.5 bg-white/20 rounded-full mb-1.5"></div>
          <div className="w-8 h-1.5 bg-white/20 rounded-full mb-1.5"></div>
          <div className="w-10 h-1.5 bg-white/20 rounded-full"></div>
        </div>
      </HeroOrbit>

      <HeroOrbit size={430} rotation={-14}>
        <div className="size-10 flex items-center justify-center rounded-lg bg-gradient-to-bl from-emerald-500/20 to-teal-500/20 border border-white/10 animate-spin-slow">
          <div className="size-5 border-2 border-dashed border-white/30 rounded-full"></div>
        </div>
      </HeroOrbit>
    </>
  )
}

// Option 2: Code Elements
export const CodeElements = () => {
  return (
    <>
      <HeroOrbit size={800} rotation={-72}>
        <div className="font-mono text-xs text-cyan-400/70 bg-gray-900/40 p-2 rounded border border-cyan-500/20 animate-float">
          {'<div className="hero">'}
        </div>
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20}>
        <div className="font-mono text-xs text-pink-400/70 bg-gray-900/40 p-2 rounded border border-pink-500/20 animate-pulse">
          {"const [state, setState] = useState()"}
        </div>
      </HeroOrbit>

      <HeroOrbit size={650} rotation={144}>
        <div className="font-mono text-xs text-amber-400/70 bg-gray-900/40 p-2 rounded border border-amber-500/20 animate-bounce-slow">
          {"@keyframes float { ... }"}
        </div>
      </HeroOrbit>

      <HeroOrbit size={430} rotation={-14}>
        <div className="font-mono text-xs text-green-400/70 bg-gray-900/40 p-2 rounded border border-green-500/20 animate-spin-slow">
          {"{ }"}
        </div>
      </HeroOrbit>
    </>
  )
}

// Option 3: Design Tool Elements
export const DesignElements = () => {
  return (
    <>
      <HeroOrbit size={800} rotation={-72}>
        <div className="bg-gradient-to-r from-purple-500/30 to-indigo-500/30 size-16 rounded-lg border border-white/10 flex items-center justify-center animate-float">
          <svg className="size-8 text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" fill="currentColor" fillOpacity="0.5" />
            <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z" fill="currentColor" fillOpacity="0.7" />
            <path d="M12 12.5H8.5a3.5 3.5 0 100 7H12v-7z" fill="currentColor" fillOpacity="0.5" />
            <path d="M12 19.5h3.5a3.5 3.5 0 100-7H12v7z" fill="currentColor" fillOpacity="0.7" />
          </svg>
        </div>
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20}>
        <div className="bg-gradient-to-r from-blue-500/30 to-cyan-500/30 size-12 rounded-lg border border-white/10 flex items-center justify-center animate-pulse">
          <svg className="size-6 text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" fillOpacity="0.6" />
            <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" />
            <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
          </svg>
        </div>
      </HeroOrbit>

      <HeroOrbit size={650} rotation={144}>
        <div className="bg-gradient-to-r from-amber-500/30 to-orange-500/30 size-14 rounded-lg border border-white/10 flex items-center justify-center animate-bounce-slow">
          <svg className="size-7 text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" />
            <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.6" />
          </svg>
        </div>
      </HeroOrbit>

      <HeroOrbit size={430} rotation={-14}>
        <div className="bg-gradient-to-r from-emerald-500/30 to-teal-500/30 size-10 rounded-lg border border-white/10 flex items-center justify-center animate-spin-slow">
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

// Option 4: Geometric Shapes
export const GeometricShapes = () => {
  return (
    <>
      <HeroOrbit size={800} rotation={-72}>
        <div className="size-16 border-2 border-cyan-500/40 rotate-45 animate-spin-slow"></div>
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20}>
        <div className="size-12 rounded-full border-2 border-purple-500/40 animate-pulse"></div>
      </HeroOrbit>

      <HeroOrbit size={650} rotation={144}>
        <div
          className="w-14 h-12 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rotate-12 animate-float"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        ></div>
      </HeroOrbit>

      <HeroOrbit size={430} rotation={-14}>
        <div className="size-10 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-full animate-bounce-slow"></div>
      </HeroOrbit>

      <HeroOrbit size={590} rotation={98}>
        <div
          className="w-8 h-8 border-2 border-amber-500/40 rotate-[30deg] animate-spin-slow"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        ></div>
      </HeroOrbit>
    </>
  )
}

