"use client"

import type React from "react"
import CosmoIcon from "@/assets/icons/Cosmonauta.svg"

export const Header = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="w-full top-0 bg-background/80 backdrop-blur-md fixed flex items-start justify-between max-w-7x1 mx-auto z-10 xl:items-center">
      <div className="logo p-2 flex flex-row mx-3 ">
        <CosmoIcon className="flex flex-row mx-3 size-[65px]" />
      </div>
      <nav className="flex-row flex max-w-7xl items-center justify-end p-5 lg:px-8">
        <a href="#hero" className="nav-item" onClick={(e) => handleSmoothScroll(e, "hero")}>
          Início
        </a>
        <a href="#projects" className="nav-item" onClick={(e) => handleSmoothScroll(e, "projects")}>
          Projetos
        </a>
        <a href="#about" className="nav-item" onClick={(e) => handleSmoothScroll(e, "about")}>
          Sobre
        </a>
        <a
          href="mailto:geovanigcs.dev@gmail"
          className="nav-item bg-white text-gray-900 hover:bg-white/ hover:text-white-900"
        >
          Contato
        </a>
      </nav>
    </header>
  )
}

