type cardTeamProps = {
    title:string;
    img:string;
    Description:string;
}


function cardTeam({title, img, Description}:cardTeamProps){
    return(
        <div className="bg-slate-900 rounded-xl p-8 m-4 text-white w-66 h-[450px] flex flex-col items-center justify-between">
            <div>
                <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            <div >
                <img src={img} alt="Imagen Desarrollador" className="w-48 h-48  rounded-lg"/>
            </div>
            <div className="text-center">
                <p className="text-sm">{Description}</p>
            </div>    
        </div>
    )
}


export default cardTeam;
