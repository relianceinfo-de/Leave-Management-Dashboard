import LeaveRequest from '../../app-components/Cards/table';
import {TABLE_ROWS} from '../../app-components/Cards/table';

function LeaveRequestTable() {
  return (
    <div className=' w-3/5 mr-10'>
      <div className="flex items-center gap-x-2">
          <h2 className="font-semibold">Leave request</h2> <div className="bg-[#002456] font-semibold text-sm text-white rounded-[50%] px-2">{TABLE_ROWS.length}</div>
      </div>
      <div>
          <LeaveRequest/>
      </div>
    </div>
  )
}

export default LeaveRequestTable