"use client"

import { motion } from "framer-motion"
import StarIcon from '@/assets/icons/star.svg';

const words = [
  "Performace",
  "Acessibilidade",
  "Segurança",
  "Interatividade",
  "Escalável",
  "Responsivo",
  "Usuário amigo",
  "Sustentável",
  "Utilizável",
  "Confiável",
  "Otimizado",
]

export default function Tape() {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip items-center justify-center">
      <motion.div drag={true} className="bg-gradient-to-r from-emerald-500 to-sky-600 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 45 }}
          >
            {[...Array(2)].map((_, containerIndex) => (
              <div key={containerIndex} className="flex flex-none gap-4 py-3">
                {words.map((word) => (
                  <div key={`${containerIndex}-${word}`} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                  <StarIcon className="size-6 text-gray-900 -rotate-10" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

