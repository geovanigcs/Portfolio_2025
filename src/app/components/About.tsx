"use client"

import { Card } from "./ui/Card"
import { SectionHeader } from "./ui/SectionHeader"
import Image from "next/image"
import JavascriptIcon from "@/assets/icons/javascript.svg"
import Html5Icon from "@/assets/icons/html5.svg"
import TypescriptIcon from "@/assets/icons/typescript.svg"
import ReactIcon from "@/assets/icons/react.svg"
import NextjsIcon from "@/assets/icons/nextjs.svg"
import Css3Icon from "@/assets/icons/css3.svg"
import ux from "@/assets/icons/ux.svg"
import { CardHeader } from "./ui/CardHeader"
import { ToolBoxItems } from "./ui/ToolBoxItems"
import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"
import gigio1Perfil from "@/assets/images/gigio1.jpg"
import gigio2Perfil from "@/assets/images/gigio2.jpg"

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: Html5Icon,
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "NextJS",
    iconType: NextjsIcon,
  },
  {
    title: "CSS3",
    iconType: Css3Icon,
  },
  {
    title: "UX/UI",
    iconType: ux,
  },
]

const hobbies = [
  {
    title: "Skate",
    emoji: "🛹",
    top: "5%",
    left: "5%",
  },
  {
    title: "Música",
    emoji: "🎤 🎸",
    top: "5%",
    left: "50%",
  },
  {
    title: "Jogar",
    emoji: "🕹️",
    top: "35%",
    left: "10%",
  },
  {
    title: "Fotos",
    emoji: "📷",
    top: "40%",
    left: "35%",
  },
  {
    title: "Treinar",
    emoji: "🏋🏽‍♀️",
    top: "45%",
    left: "70%",
  },
  {
    title: "Pedalar",
    emoji: "🚴🏼‍♂️",
    top: "65%",
    left: "5%",
  },
  {
    title: "Estudar",
    emoji: "📚",
    top: "70%",
    left: "45%",
  },
]

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.15,
      ease: "easeOut",
    },
  }),
}

export const About = () => {
  const constrainRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: false })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  return (
    <div id="about" className="py-20 lg:py-28" ref={sectionRef}>
      <div className="container">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Conheça um pouco sobre mim"
          description="Veja um pouco quem sou eu, o que eu faço e onde busco inspiração"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid-cols-1 gap-8 grid md:grid-cols-5 lg:grid-cols-3">
            <motion.div variants={cardVariants} initial="hidden" animate={controls} custom={0}>
              <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
                <Image
                  src={gigio1Perfil || "/placeholder.svg"}
                  fill
                  alt="Perfil"
                  className="h-full w-full object-cover object-left-top"
                />
              </Card>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={1}
              className="md:col-span-3 lg:col-span-2"
            >
              <Card className="h-[320px] p-0">
                <CardHeader
                  className=""
                  title="Linguagens e Ferramentas"
                  description="Explore as tecnologias e ferramentas que eu uso para criar projetos digitais excepcionais."
                />
                <ToolBoxItems
                  items={toolboxItems}
                  className=""
                  itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                />
                <ToolBoxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-left [animation-duration:15s]"
                />
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={2}
              className="md:col-span-3 lg:col-span-2"
            >
              <Card className="h-[320px] p-0 flex flex-col">
                <CardHeader className="" title="Além de codar..." description="Explore meus interesses e hobbies." />
                <div className="relative flex-1" ref={constrainRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      drag
                      dragConstraints={constrainRef}
                      key={hobby.title}
                      style={{ left: hobby.left, top: hobby.top }}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    >
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={3}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="h-[320px] p-0 relative">
                <Image
                  src={gigio2Perfil || "/placeholder.svg"}
                  fill
                  alt="Perfil"
                  className="h-full w-full object-cover object-left-top"
                />
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

