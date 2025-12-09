type cardTeamProps = {
  title: string
  img: string
  Description: string
}

function cardTeam({ title, img, Description }: cardTeamProps) {
  return (
    <div
      className="bg-slate-900 rounded-xl p-6 sm:p-8 m-2 text-white
                 w-full sm:w-[260px] max-w-xs
                 flex flex-col items-center justify-between gap-4
                 shadow-lg shadow-black/40
                 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-center">
        {title}
      </h3>

      <img
        src={img}
        alt="Imagen integrante"
        className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
      />

      <p className="text-sm text-center text-gray-100">{Description}</p>
    </div>
  )
}

export default cardTeam
