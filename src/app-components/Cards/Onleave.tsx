
export const leaves = [
    {name:"Onu Akinyemi", day:"Feb 20", type:"Annual leave"},
    {name:"Abdulmalik Abdulgaffar", day:"Feb 20", type:"Annual leave"},
]




function Onleave() {

    return(
        <div>
        {leaves.map((leave, i) => (
            <div className="flex flex-row gap-x-3 items center mt-5">
                <div className="flex bg-[#8080ff] text-white items-center justify-center w-[48px] rounded-[50%] font-semibold">{leave.name.charAt(0)}</div>
                <div className="">
                    <div className="font-bold">{leave.name}</div>
                    <div>{`${leave.day} ${leave.type}`}</div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default Onleave