"use client"

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const contactCardVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      duration: 0.8,
    },
  },
}

export const Contact = () => {
  const contactRef = useRef(null)
  const isInView = useInView(contactRef, { amount: 0.3, once: false })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" ref={contactRef}>
      <div className="container">
        <motion.div
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0"
          variants={contactCardVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:3xl">Vamos criar algo maravilhoso juntos</h2>
              <p className="text-sm mt-2 md:text-base">
                Pronto para trazer o próximo projeto da sua vida? Me contate, eu posso te ajudar.
              </p>
            </div>
            <div className="">
              <a href="mailto:geovanigcs.dev@gmail.com">
                <button className="gap-2 w-max border border-gray-900 text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl">
                  <span className="font-semibold">Entre em contato</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

