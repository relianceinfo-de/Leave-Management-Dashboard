import LeavePostpone from './HrLeaveMag';
import LeaveRefuser from './HrLeaveMag';
import LeaveBrances from './HrLeaveMag';

function Leaves() {
  return (
    <div className='flex flex-row gap-5 mt-10'>
        <LeavePostpone/>
        <LeaveRefuser/>
        <LeaveBrances/>
    </div>
  )
}

export default Leaves