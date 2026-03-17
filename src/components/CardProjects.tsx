type CardProjectsProps = {
  title?: string
  img: string
  Description: string
  fecha?: string
}

function CardProjects({ title, img, Description, fecha }: CardProjectsProps) {
  return (
    <div
      className="my-4 rounded-xl bg-slate-900/50 backdrop-blur-md
                 flex flex-col sm:flex-row items-center sm:items-stretch
                 p-6 sm:p-8 lg:p-10
                 shadow-lg shadow-black/40 border border-white/10
                 w-full max-w-2xl mx-auto
                 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="mb-6 sm:mb-0 sm:pr-8 flex-shrink-0 flex items-center justify-center w-full sm:w-auto">
        <img src={img} alt="Logo Empresa" className="h-40 sm:h-56 w-auto object-contain" />
      </div>

      {/* Línea vertical / horizontal según breakpoint */}
      <div className="w-full h-px bg-gray-500 mb-6 sm:hidden" />
      <div className="hidden sm:block h-32 w-px bg-gray-500 mx-8" />

      <div className="flex flex-col gap-3 text-justify w-full">
        {title && (
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        )}
        <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
          {Description}
        </p>
        {fecha && (
          <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {fecha}
          </span>
        )}
      </div>
    </div>
  )
}

export default CardProjects
