
type TModuleNavbar = {
    Title: string,
    SubTitle: string,  
}

function ModuleHeaderbar({ Title, SubTitle }: TModuleNavbar) {
    return (
        <header>
            <div className="flex flex-col justify-center px-20  bg-[#002456] text-white h-[100px] mt-5">
                <h2 className="text-2xl font-bold">{Title}</h2>
                <p className=""> {SubTitle} </p>
            </div>
        </header>
    )
}
export default ModuleHeaderbar;