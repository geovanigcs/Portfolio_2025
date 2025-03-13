"use client"

import ArrowDown from "@/assets/icons/arrow-down.svg"
import grainImage from "@/assets/images/grain.jpg"
import { CodeElements, DesignElements } from "./ui/HeroOrbitElement"
import { Avatar } from "./ui/avatar"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const avatarVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Olá, me chamo Geovani", "Sou desenvolvedor", "Também sou Designer", "<Amo codar/>"],
    loop: true,
    delaySpeed: 2000,
  })

  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { amount: 0.3, once: false })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  return (
    <div id="hero" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" ref={heroRef}>
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <DesignElements />
        <CodeElements />
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <motion.div variants={avatarVariants} initial="hidden" animate={controls}>
            <Avatar />
          </motion.div>
          <div className="bg-black border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 rounded-full size-2.5 relative">
              <div className="bg-green-500 rounded-full absolute inset-0 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Avalie meus novos projetos</div>
          </div>
          <h1 className="text-white/60 mt-2 text-1xl lg:text-2x1 font-semibold scroll-px-10">
            <span>{text}</span>
            <Cursor cursorColor="#4169E1" />
          </h1>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl  md:text-5xl text-center mt-2 tracking-wide">
            Criando experiências excepcionais para o usuário
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Sou especialista em transformar designs em aplicações web funcionais e de alto desempenho. Vamos discutir
            seu próximo projeto!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-20">
            <span className="font-semibold">Explore meu trabalho</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-20">
            <span>👋</span>
            <a href="mailto:geovanigcs.dev@gmail.com" className="hover:text-gray-900/80 font-semibold">Vamos conversar?</a>
          </button>
        </div>
      </div>
    </div>
  )
}

