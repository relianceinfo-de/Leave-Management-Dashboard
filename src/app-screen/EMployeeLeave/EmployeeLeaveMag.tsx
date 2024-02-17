import ModuleContainer from '../../app-containers/ModuleContainer';
import ModuleHeaderbar from '../../app-containers/ModuleHeader';
import LeaveTypes from '../EMployeeLeave/LeaveTypes';
import Upcoming from '../EMployeeLeave/UpcomingHolidays';
import EmpLeaveHistory from '../EMployeeLeave/LeaveHistory';

function EmployeeLeaveMag() {
  return (
    <div>
        <ModuleContainer>
            <ModuleHeaderbar Title="Empolyee Leave Management" SubTitle="Streamline employee time-off requests, approvals and tracking."/>
            <LeaveTypes/>
            <div className='flex flex-row space-x-10'>
              <div className='w-3/5'>
                <EmpLeaveHistory/>
              </div>

              <div className='w-2/5'>
                <Upcoming/>
              </div>

            </div>
        </ModuleContainer>
    </div>
  )
}

export default EmployeeLeaveMag