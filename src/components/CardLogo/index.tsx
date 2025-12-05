// components/CardLogo/index.tsx
import { useState } from "react";

type CardLogoProps = {
  Logo: string;
  title?: string;
  img: string;
  Description: string;
  fecha?: string;
};

function CardLogo({ Logo, title, img, Description, fecha }: CardLogoProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={handleClick}  
      className="bg-slate-900 text-white p-6 rounded-xl shadow-lg
                 transform transition-transform duration-200
                 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
                 overflow-hidden cursor-pointer flex items-center"
    >
      {/* Logo siempre visible */}
      <img src={Logo} alt="Logo Software" className="h-24 w-24 " />

      {/* Parte que se expande HACIA LA DERECHA */}
      <div
        className={`transition-all duration-300 ease-out overflow-hidden
                    ${isOpen ? "max-w-[600px] opacity-100 ml-4" : "max-w-30 opacity-0 max-h-30"}`}
      >
        <div className="rounded-md bg-gradient-to-r from-[#181F23]/80 to-[#222B30]/80 
                        flex items-center p-6 shadow-lg shadow-black/40 border border-gray-800
                        whitespace-nowrap">
          <div className="pr-6 flex-shrink-0">
            <img src={img} alt="" className="h-24 w-24" />
          </div>
          
          <div className="h-24 w-px bg-gray-500 mx-4 flex-shrink-0" />
          
          <div className="flex flex-col gap-3 text-justify min-w-[300px]">
            <h3 className="text-lg font-semibold text-white whitespace-normal">{title}</h3>
            <p className="text-sm text-gray-100 leading-relaxed whitespace-normal">
              {Description}
            </p>
            {fecha && (
              <span className="text-xs text-gray-400 leading-relaxed whitespace-normal">
                {fecha}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLogo;
