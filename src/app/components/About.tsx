'use client'

import { Card } from "./ui/Card";
import { SectionHeader } from "./ui/SectionHeader";
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/javascript.svg';
import Html5Icon from '@/assets/icons/html5.svg';
import TypescriptIcon from '@/assets/icons/typescript.svg';
import ReactIcon from '@/assets/icons/react.svg';
import NextjsIcon from '@/assets/icons/nextjs.svg';
import Css3Icon from '@/assets/icons/css3.svg';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "./ui/CardHeader";
import { ToolBoxItems } from "./ui/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";


const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: Html5Icon,
  },
  {
    title: 'TypeScript',
    iconType: TypescriptIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'NextJS',
    iconType: NextjsIcon,
  },
  {
    title: 'CSS3',
    iconType: Css3Icon,
  },
]

const hobbies = [
  {
    title: 'Skate',
    emoji: '🛹',
    top:'5%',
    left:'5%',
  },
  {
    title: 'Música',
    emoji: '🎤 🎸',
    top:'5%',
    left:'50%',
  },
  {
    title: 'Jogar',
    emoji: '🕹️',
    top:'35%',
    left:'10%',
  },
  {
    title: 'Fotos',
    emoji: '📷',
    top:'40%',
    left:'35%',
  },
  {
    title: 'Treinar',
    emoji: '🏋🏽‍♀️',
    top:'45%',
    left:'70%',
  },
  {
    title: 'Pedalar',
    emoji: '🚴🏼‍♂️',
    top:'65%',
    left:'5%',
  },
  {
    title: 'Estudar',
    emoji: '📚',
    top:'70%',
    left:'45%',
  },
]

export const About = () => {
  const constrainRef = useRef(null)
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="Sobre mim" title="Conheça um pouco sobre mim" description="Veja um pouco quem sou eu, o que eu  faço e onde busco inspiração" />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid-cols-1 gap-8 grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <CardHeader title="Meus livros" description="Explore os livros que me inspiraram." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Capa de livro" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader className="" title="Linguagens e Ferramentas" description="Explore as tecnologias e ferramentas que eu uso para criar projetos digitais excepcionais." />
              <ToolBoxItems items={toolboxItems} className="" />
              <ToolBoxItems items={toolboxItems} className="mt-6 md:mb-5" itemsWrapperClassName="-translate-x-1/2" />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader className="" title="Além de codar..." description="Explore meus interesses e hobbies."/>
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div drag dragConstraints={constrainRef} key={hobby.title} style={{ left: hobby.left, top: hobby.top, }} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute">
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Mapa" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-gradient-to-r rounded-full from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={smileMemoji} alt="Sorriso" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};
