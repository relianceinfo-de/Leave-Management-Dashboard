
export const leaves = [
    {name:"Onu Akinyemi", day:"Feb 20", type:"Annual leave", status:"On Leave", RemainDays:"3 days Left"},
    {name:"Abdulmalik Abdulgaffar", day:"Feb 20", type:"Annual leave", status:"On Leave", RemainDays:"8 days Left"},
    {name:"Onu Akinyemi", day:"Feb 20", type:"Annual leave", status:"pending", RemainDays:"19-02-2024"},
    {name:"Abdulmalik Abdulgaffar", day:"Feb 20", type:"Annual leave", status:"pending", RemainDays:"26-02-2014"},
]

function Onleave() {
 
    return(
        <div>
        {leaves.map((leave, i) => (
            <div className=" px-5 flex flex-row gap-x-3 mt-5 justify-between">
                <div className="flex flex-row space-x-5">
                <div className="flex bg-[#8080ff] text-white items-center justify-center w-[48px] rounded-[50%] font-semibold">{leave.name.charAt(0)}</div>
                <div className="">
                    <div className="font-bold">{leave.name}</div>
                    <div>{`${leave.day} ${leave.type}`}</div>
                </div>
                </div>
                <div className="flex flex-col">
                        <div className="text-[#002456] text-xs">{`${leave.status}`}</div>
                        <div className="text-[#505050] text-xs">{`${leave.RemainDays}`}</div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default Onleave