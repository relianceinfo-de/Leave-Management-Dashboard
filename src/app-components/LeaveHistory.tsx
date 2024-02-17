
export const LeaveHistory = [
    {LeaveType:"Casual Leave", Period:"Feb 08th - 09th -", Days:"2 Days", status:"Pending", },
    {LeaveType:"Annual Leave", Period:"Feb 26th - Mar 1st", Days:"5 Days", status:"Approved",},
    {LeaveType:"Casual Leave", Period:"Feb 15th -16th ", Days:"2 Days", status:"Rejected",},
    {LeaveType:"Study Leave", Period:"Jan 22th - 24th ", Days:"3 Days", status:"Approved",},
]

function EmpleaveHistory() {
 
    return(
        <div >
        {LeaveHistory.map((History, i) => (
            <div className="bg-[#FAFAFA] px-5 py-5 my-5 space-x-10 flex flex-row justify-between text-lg font-normal leading-normal">
               <div>{History.LeaveType}</div>
               <div>{History.Period}</div>
               <div>{History.Days}</div>
               <div>{History.status}</div>
               <div>View Details</div>
            </div>
        ))}
        <div className="flex justify-end text-lg text-[#002456]">
            <p>See All</p>
        </div>
        </div>
    )
}

export default EmpleaveHistory