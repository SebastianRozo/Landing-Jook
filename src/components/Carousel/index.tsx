import { useEffect, useState } from "react"
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 640) // breakpoint "sm" de Tailwind
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const prev = () => {
    setActiveIndex(prev =>
      prev === 0 ? technologies.length - 1 : prev - 1
    )
  }

  const next = () => {
    setActiveIndex(prev =>
      prev === technologies.length - 1 ? 0 : prev + 1
    )
  }

  // En móvil solo usamos el item central, en desktop los 5
  const offsets = isMobile ? [0] : [-2, -1, 0, 1, 2]
  const visibleIndexes = offsets.map(offset => {
    const idx = (activeIndex + offset + technologies.length) % technologies.length
    return idx
  })

  return (
    <section className="w-full max-w-6xl mx-auto pt-10 pb-16 text-center px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        Tecnologías que dominamos
      </h2>

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-3 md:gap-5 min-h-[190px] sm:min-h-[210px] md:min-h-[220px]">
          {visibleIndexes.map((techIndex, position) => {
            const tech = technologies[techIndex]
            const { Icon } = tech

            const isCenter = isMobile ? true : position === 2
            const isNearSide = !isMobile && (position === 1 || position === 3)

            const baseCard =
              "rounded-[18px] border flex flex-col items-center justify-center " +
              "transition-all duration-300 ease-out " +
              "w-[260px] max-w-[80vw] sm:max-w-none " +
              "h-[170px] sm:h-[190px]"

            const centerStyles =
              "bg-gradient-to-b from-cyan-500/25 via-slate-800/85 to-slate-950/95 " +
              "border-white/30 opacity-100 scale-[1.02] sm:scale-[1.05] " +
              "shadow-[0_16px_40px_rgba(0,0,0,0.8)] text-white " +
              "hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)]"

            const nearStyles =
              "bg-black/60 border-white/10 opacity-60 scale-[0.97] text-white/75"

            const farStyles =
              "bg-black/70 border-white/5 opacity-30 scale-90 text-white/55"

            let cardStyles = centerStyles
            if (!isMobile) {
              cardStyles = farStyles
              if (isNearSide) cardStyles = nearStyles
              if (isCenter) cardStyles = centerStyles
            }

            return (
              <div
                key={`${tech.name}-${techIndex}`}
                className={`${baseCard} ${cardStyles}`}
              >
                <span className="mb-3 text-base sm:text-lg font-semibold">
                  {tech.name}
                </span>
                <Icon
                  className={
                    isCenter
                      ? "text-5xl sm:text-6xl md:text-[3.6rem] text-white"
                      : "text-3xl sm:text-4xl md:text-5xl"
                  }
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/40 text-base hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-200"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/40 text-base hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-200"
        >
          ›
        </button>
      </div>
    </section>
  )
}
