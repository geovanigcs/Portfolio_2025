"use client"

import type React from "react"
import CosmoIcon from "@/assets/icons/Cosmonauta.svg"
import { motion } from "framer-motion"

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

  const logoVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const linkVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.8,
        delay: custom * 0.2,
      },
    }),
  }

  const navLinks = [
    { href: "#hero", text: "Início", id: "hero" },
    { href: "#projects", text: "Projetos", id: "projects" },
    { href: "#about", text: "Sobre", id: "about" },
    { href: "mailto:geovanigcs.dev@gmail.com", text: "Contato", id: "", isContact: true },
  ]

  return (
    <header className="w-full top-0 bg-background/80 backdrop-blur-md fixed flex items-start justify-between max-w-7x1 mx-auto z-10 xl:items-center">
      <motion.div className="logo p-2 flex flex-row mx-3" initial="hidden" animate="visible" variants={logoVariants}>
        <CosmoIcon className="flex flex-row mx-3 size-[65px]" />
      </motion.div>

      <nav className="flex-row flex max-w-7xl items-center justify-end p-5 lg:px-8">
        {navLinks.map((link, index) => (
          <motion.a
            key={link.text}
            href={link.href}
            className={`nav-item ${link.isContact ? "bg-white text-gray-900 hover:bg-white/80 hover:text-gray-900" : ""}`}
            onClick={link.id ? (e) => handleSmoothScroll(e, link.id) : undefined}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={linkVariants}
          >
            {link.text}
          </motion.a>
        ))}
      </nav>
    </header>
  )
}

