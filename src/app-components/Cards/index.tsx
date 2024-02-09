
type Tcard = {
    title:string,
    name: string,
    score: string,
    icon: string,
    description: string,
    link?: string,
    type?: string,
    color: string,
}


export function CardItems({name, score, icon, description, link, type, color,}:Tcard){

    if (type !== "blue") {
        return(
            <div className={`${color} flex flex-col justify-between p-5 text-white rounded-[24px] h-[190px]`} >
                <div className='flex flex-row items-center justify-between md:justify-evenly'>
                    <p className=''>{name}</p>
                    <div className="bg-white bg-opacity-25 p-2 rounded-full"><img src={icon} alt="" /></div>
                </div>
                <p className={`${score == "Very Active" ? "text-3xl" : "text-5xl mt-4 md:text-center"}`}>{score}</p>
                <p className='text-xs md:text-center mt-auto'>{description}</p>
            </div>
        )
    } else {
        return(
            <div className={`${color} flex flex-col justify-center items-center gap-y-4 p-5 text-white rounded-[24px] h-[190px]`}>
                <p className="text-2xl text-center">{name}</p>
                <div className="bg-white bg-opacity-25 p-5 rounded-full">
                    <img className="" src={icon} alt="" />
                </div>
            </div>
        )
    }
    
}

export function CardItems2({name, score, icon, description, link, type, color,}:Tcard){

    if (type !== "blue") {
        return(
            <div className={`${color} flex flex-row justify-evenly p-5 text-white rounded-[24px] h-[114px] w-[308px]`} >

                <div className='flex flex-col justify-between md:justify-evenly text-center'>
                    <p className=''>{name}</p>
                    <p className={`${score == "Very Active" ? "text-3xl" : "text-5xl mt-4 md:text-center"}`}>{score}</p>
                </div>
                <div className="">
                    <div className="bg-white bg-opacity-25 p-2 rounded-full ml-auto"><img src={icon} alt="" /></div>
                </div>
               
            </div>
        )   
    } else {
        return(
            <div className={`${color} flex flex-col justify-evenly items-center  p-5 text-white rounded-[24px] h-[114px] w-[308px]`}>
                <p className="text-2xl text-center">{name}</p>
                <div className="bg-white bg-opacity-25 p-3 rounded-full">
                    <img className="" src={icon} alt="" />
                </div>
            </div>
        )
    }
    
}

