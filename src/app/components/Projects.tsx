import droneMonitor from "@/assets/images/Drone-Monitor.png";
import barberMonitor from "@/assets/images/Barber-Monitor.png";
import financeMonitor from "@/assets/images/Finance-Monitor.png";
import burgerMonitor from "@/assets/images/Burger-Monitor.png";
import movieMonitor from "@/assets/images/Movie-Monitor.png";

import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import Image from "next/image";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";

const portfolioProjects = [
  {
    company: "Gigio's",
    year: "2024",
    title: "Gigio's Drone Store",
    results: [
      { title: "Interatividade do usuário aumentada em 40% com animações dinâmicas de produtos" },
      { title: "Taxa de visualização de produtos melhorada em 50% com animações atraentes" },
      { title: "Engajamento do cliente elevado em 30% através de experiências visuais envolventes" },
    ],
    link: "https://storedrone.vercel.app/",
    image: droneMonitor,
  },
  {
    company: "Gigio's",
    year: "2024",
    title: "Gigio's Barber",
    results: [
      { title: "Experiência do usuário aprimorada em 45% com agendamentos simplificados" },
      { title: "Velocidade do site otimizada em 60%, reduzindo o tempo de espera" },
      { title: "Taxa de conversão aumentada em 30% com sistema de agendamentos eficiente" },
    ],
    link: "",
    image: barberMonitor,
  },
  {
    company: "Gigio's",
    year: "2025",
    title: "Gigio's Burger",
    results: [
      { title: "Satisfação do cliente aumentada em 50% com interface intuitiva de pedidos" },
      { title: "Tempo de entrega reduzido em 40% com otimização de rotas" },
      { title: "Número de pedidos mensais crescido em 25% após melhorias na usabilidade" },
    ],
    link: "",
    image: burgerMonitor,
  },
  {
    company: "Gigio's",
    year: "2025",
    title: "Gigio's Finance",
    results: [
      { title: "Precisão nas finanças aprimorada em 35% com relatórios detalhados" },
      { title: "Tempo de gerenciamento de contas reduzido em 50% com interface simplificada" },
      { title: "Engajamento do usuário aumentado em 45% com lembretes automáticos de pagamentos" },
    ],
    link: "",
    image: financeMonitor,
  },
  {
    company: "Gigio's",
    year: "2025",
    title: "Gigio's Movie",
    results: [
      { title: "Satisfação do usuário aumentada em 45% com navegação intuitiva e responsiva" },
      { title: "Tempo médio de permanência no site elevado em 60% por conteúdo interativo" },
      { title: "Retorno de visitantes melhorado em 35% com recomendações personalizadas" },
    ],
    link: "https://gigiosmovie.vercel.app/",
    image: movieMonitor,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Projetos" title="Projetos em destaques" description="Veja como eu transformo a concepção do envolvimento na experiência digital" />
        <div className="flex md:mt-20 flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 md:px-10 md:pt-12 lg:pt-16 lg:px-20 sticky top-16"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="font-bold uppercase tracking-widest text-sm gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text inline-flex">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visite meu site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-8 lg:-mb-0 lg:mt-8 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:-mb-18" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
