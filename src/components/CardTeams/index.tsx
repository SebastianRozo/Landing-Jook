type cardTeamProps = {
  title: string
  img: string
  Description: string
}

function cardTeam({ title, img, Description }: cardTeamProps) {
  return (
    <div
      className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 m-2 text-white
                 w-full sm:w-[220px] max-w-xs
                 flex flex-col items-center justify-start gap-3
                 shadow-lg shadow-black/40
                 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-center leading-tight min-h-[3.5rem] flex items-center justify-center">
        {title}
      </h3>

      <img
        src={img}
        alt="Imagen integrante"
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg shrink-0"
      />

      <p className="text-sm text-center text-gray-200 mt-2 flex-grow flex items-start justify-center">
        {Description}
      </p>
    </div>
  )
}

export default cardTeam
