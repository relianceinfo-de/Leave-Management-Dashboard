import ModuleContainer from '../../app-containers/ModuleContainer';
import ModuleHeaderbar from '../../app-containers/ModuleHeader';
import LeaveTypeMatrixHr from '../../app-screen/HrLeave/LeaveType';
import LeaveRequestTable from '../HrLeave/LeaveRequestTable';
import OnleaveBoard from '../HrLeave/OnleaveBoard';
import LeaveTrends from '../HrLeave/LeaveTrends';
import Notification from '../HrLeave/Notification';
//import Leaves from '../../app-screen/HrLeave/Leaves';


function HrLeaveMag() {
  return (
    <div>
        <ModuleContainer>
            <ModuleHeaderbar Title="HR Leave Management" SubTitle="Streamline employee time-off requests, approvals and tracking."/>

            <LeaveTypeMatrixHr/>

            <section className='flex flex-row mt-10'>
              <LeaveTrends/>
              <Notification/>
            </section>

            <section className='flex flex-row mt-10'>
                <LeaveRequestTable/>
                <OnleaveBoard/>
            </section>
            
            {/* <Leaves/> */}
        </ModuleContainer>
    </div>
  )
}

export default HrLeaveMag