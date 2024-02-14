import {Routes, Route} from 'react-router-dom'
import EmployeeLeaveMag from './app-screen/EMployeeLeave/EmployeeLeaveMag';
import HrLeaveMag from './app-screen/HrLeave/HrLeaveMag';

function App() {
 
  return (
       
       <Routes>
          <Route path='/HrLeaveDashboard' element ={<HrLeaveMag/>} />
          <Route path='/EmployeeLeaveDashboard' element ={<EmployeeLeaveMag/>} />
        </Routes>
  )
}

export default App
