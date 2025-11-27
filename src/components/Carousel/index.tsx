import { useState } from "react"
import type { IconType } from "react-icons"
import {
  SiReact,
  SiMui,
  SiWordpress,
  SiPostgresql,
  SiSpringboot,
  SiExpress,
  SiNodedotjs,
  SiPython,
  SiReplit,
  SiGraphql,
} from "react-icons/si"
import { FaJava, FaAws } from "react-icons/fa"

type Tech = {
  name: string
  Icon: IconType
}

const technologies: Tech[] = [
  { name: "React", Icon: SiReact },
  { name: "Material UI", Icon: SiMui },
  { name: "WordPress", Icon: SiWordpress },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Spring Boot", Icon: SiSpringboot },
  { name: "Java", Icon: FaJava },
  { name: "Express", Icon: SiExpress },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Python", Icon: SiPython },
  { name: "AWS", Icon: FaAws },
  { name: "Replit", Icon: SiReplit },
  { name: "GraphQL", Icon: SiGraphql },
]

export function TechCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? technologies.length - 1 : prev - 1
    )
  }

  const next = () => {
    setActiveIndex((prev) =>
      prev === technologies.length - 1 ? 0 : prev + 1
    )
  }

  const offsets = [-2, -1, 0, 1, 2]
  const visibleIndexes = offsets.map((offset) => {
    const idx = (activeIndex + offset + technologies.length) % technologies.length
    return idx
  })

  return (
    <section className="w-full max-w-6xl mx-auto pt-10 pb-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">
        Tecnologías que dominamos
      </h2>
      <div className="flex items-center justify-center gap-3 md:gap-5 h-[220px]">
        {visibleIndexes.map((techIndex, position) => {
          const tech = technologies[techIndex]
          const { Icon } = tech

          const isCenter = position === 2
          const isNearSide = position === 1 || position === 3
          const isFarSide = position === 0 || position === 4

          const baseCard =
            "w-[230px] md:w-[260px] h-[190px] rounded-[18px] border flex flex-col items-center justify-center transition-all duration-300 ease-out"

          const centerStyles =
            "bg-gradient-to-b from-cyan-500/25 via-slate-800/85 to-slate-950/95 border-white/30 opacity-100 scale-[1.05] shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white"

          const nearStyles =
            "bg-black/60 border-white/10 opacity-60 scale-[0.98] text-white/75"

          const farStyles =
            "bg-black/70 border-white/5 opacity-30 scale-90 text-white/55"

          let cardStyles = farStyles
          if (isNearSide) cardStyles = nearStyles
          if (isCenter) cardStyles = centerStyles

          return (
            <div
              key={`${tech.name}-${techIndex}`}
              className={`${baseCard} ${cardStyles}`}
            >
              <span className="mb-3 text-base md:text-lg font-semibold">
                {tech.name}
              </span>
              <Icon
                className={
                  isCenter
                    ? "text-6xl md:text-[3.6rem] text-white"
                    : "text-4xl md:text-5xl"
                }
              />
            </div>
          )
        })}
      </div>

      <div className="mt-12 flex justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/40 text-base hover:bg-white/10 transition-colors"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/40 text-base hover:bg-white/10 transition-colors"
        >
          ›
        </button>
      </div>
    </section>
  )
}
