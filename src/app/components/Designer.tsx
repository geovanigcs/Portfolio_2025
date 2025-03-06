import barberPage from "@/assets/images/Capa Barber.png"
import burgerPage from "@/assets/images/Capa Burger.png"
import financePage from "@/assets/images/Capa Finance.png"
import dronePage from "@/assets/images/Capa Drone.png"
import Image from "next/image"
import { SectionHeader } from "./ui/SectionHeader"
import { Card } from "./ui/Card"
import { Fragment } from "react"

const designProjects = [
  {
    name: "Gigio's Barber",
    image: barberPage,
  },
  {
    name: "Gigio's Hamburgeria",
    image: burgerPage,
  },
  {
    name: "Gigio's Finance",
    image: financePage,
  },
  {
    name: "Gigio's Drone",
    image: dronePage,
  },
]

export const Designer = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="UX/UI Designer"
          title="Meus Projetos de Design"
          description="Uma amostra visual dos projetos de design que desenvolvi."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex text-center text-white/60 md:text-lg lg:text-xl pr-8 gap-8 flex-none animate-move-left [animation-duration:60s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {designProjects.map((project) => (
                  <Card
                    key={project.name}
                    className="max-w-xs md:max-w-md p-4 pb-1 hover:-rotate-3 transition duration-300 flex flex-col items-center"
                  >
                    <div className="w-full h-auto overflow-hidden rounded-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-4 text-center font-medium">{project.name}</h3>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

