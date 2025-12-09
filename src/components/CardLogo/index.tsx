import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

type CardLogoProps = {
  Logo: string
  title?: string
  img: string
  Description: string
  fecha?: string
}

function CardLogo({ Logo, title, img, Description, fecha }: CardLogoProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(prev => !prev)

  return (
    <article
      className="bg-slate-900 text-white p-6 rounded-xl shadow-lg
                 transform transition-transform duration-300
                 hover:-translate-y-2 hover:shadow-2xl
                 w-full max-w-xl"
    >
      {/* Cabecera clicable */}
      <button
        type="button"
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="Logo Software"
            className="h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0"
          />
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {title}
            </h3>
            <span className="text-[11px] text-gray-400">
              Haz clic para ver detalles del proyecto
            </span>
          </div>
        </div>

        <FiChevronDown
          className={`text-xl flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Contenido expandible */}
      <div
        className={`transition-all duration-300 ease-out overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div
          className="rounded-md bg-gradient-to-r from-[#181F23]/80 to-[#222B30]/80
                     flex flex-col sm:flex-row items-start sm:items-center
                     p-4 sm:p-6 shadow-lg shadow-black/40 border border-gray-800
                     gap-4 sm:gap-6"
        >
          <div className="flex-shrink-0">
            <img src={img} alt="" className="h-20 w-20 sm:h-24 sm:w-24" />
          </div>

          {/* Línea vertical solo en desktop */}
          <div className="hidden sm:block h-24 w-px bg-gray-500" />

          <div className="flex flex-col gap-2 text-justify">
            <p className="text-sm text-gray-100 leading-relaxed">
              {Description}
            </p>
            {fecha && (
              <span className="text-xs text-gray-400 leading-relaxed">
                {fecha}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardLogo
