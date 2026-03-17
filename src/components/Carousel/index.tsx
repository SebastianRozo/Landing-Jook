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
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

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

  // Swipe logic
  const minSwipeDistance = 50

  const onTouchStart = (e: any) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      next()
    } else if (isRightSwipe) {
      prev()
    }
  }

  // Siempre 5 posiciones: 2 izq, centro, 2 der
  const offsets = [-2, -1, 0, 1, 2]
  const visibleIndexes = offsets.map(offset => {
    const idx = (activeIndex + offset + technologies.length) % technologies.length
    return idx
  })

  return (
    <section className="w-full max-w-6xl mx-auto pt-10 pb-16 text-center px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 sm:mb-20">
        Tecnologías que dominamos
      </h2>

      <div
        className="flex items-center justify-center overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEndHandler}
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 min-h-[190px] sm:min-h-[210px] md:min-h-[220px] select-none">
          {visibleIndexes.map((techIndex, position) => {
            const tech = technologies[techIndex]
            const { Icon } = tech

            const isCenter = position === 2
            const isNearSide = position === 1 || position === 3
            const isFarSide = position === 0 || position === 4

            const baseCard =
              "rounded-[18px] border flex flex-col items-center justify-center " +
              "transition-all duration-300 ease-out " +
              "w-[220px] sm:w-[260px] " +
              "h-[170px] sm:h-[190px]"

            const centerStyles =
              "bg-slate-900/50 backdrop-blur-md " +
              "border-white/30 opacity-100 scale-[1.02] sm:scale-[1.05] " +
              "shadow-lg shadow-black/40 text-white " +
              "hover:-translate-y-1 hover:shadow-2xl"

            const nearStyles =
              "bg-black/60 border-white/10 opacity-60 scale-[0.97] text-white/75"

            const farStyles =
              "bg-black/70 border-white/5 opacity-30 scale-90 text-white/55"

            let cardStyles = farStyles
            if (isNearSide) cardStyles = nearStyles
            if (isCenter) cardStyles = centerStyles

            // En móvil solo mostramos la central: los laterales se ocultan
            const visibility = isCenter ? "flex" : "hidden sm:flex"

            return (
              <div
                key={`${tech.name}-${techIndex}`}
                onClick={() => setActiveIndex(techIndex)}
                className={`${baseCard} ${cardStyles} ${visibility} cursor-pointer`}
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

      <div className="mt-12 sm:mt-16 flex justify-center gap-4">
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
