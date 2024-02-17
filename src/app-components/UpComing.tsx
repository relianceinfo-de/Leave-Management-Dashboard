
export const UpComingHoliday = [
    {TypeHoliday:"Valentine", Days:"Feb 14th", },
    {TypeHoliday:"Easter Holiday", Days:"March 31st",},
    {TypeHoliday:"Easter Holiday", Days:"March 31st",},
    {TypeHoliday:"Easter Holiday", Days:"March 31st",},
]

function EmpUpComingHoliday() {
 
    return(
        <div >
        {UpComingHoliday.map((Holiday) => (
            <div className="bg-[#FAFAFA] px-5 py-5 my-5 space-x-10 flex flex-row justify-between text-lg font-normal leading-normal">
               <div>{Holiday.TypeHoliday}</div>
               <div>{Holiday.Days}</div>
            </div>
        ))}
        <div className="flex justify-end text-lg text-[#002456]">
            <p>See All</p>
        </div>
        </div>
    )
}

export default EmpUpComingHoliday