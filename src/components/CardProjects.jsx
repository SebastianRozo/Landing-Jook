function CardProjects({ img, Description, fecha }) {
  return (
    <div className="my-4 rounded-md bg-gradient-to-r from-[#181F23]/80 to-[#222B30]/80 
            flex items-center p-10 
            shadow-lg shadow-black/40
            border border-gray-800">
      <div className="pr-8 ">
        <img src={img} alt="" className="h-30 w-40" />
      </div>

      {/* Línea vertical */}
      <div className="h-24 w-px bg-gray-500 mx-8" />

      {/* Texto a la derecha */}
        <div className="flex flex-col gap-3 text-justify max-w-xs">
            <p className="text-xs text-gray-100 leading-relaxed">
                {Description}
            </p>
            <span className="text-xs text-gray-100 leading-relaxed">
                {fecha}
            </span>
        </div>
    </div>
  );
}

export default CardProjects;
