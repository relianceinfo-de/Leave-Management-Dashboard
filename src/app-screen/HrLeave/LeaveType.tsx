import Card from "../../app-components/Cards/Item";
import { CardTypes } from "../../app-components/Cards/Item";
import CardItems from "../../app-components/Cards";
import CasualLeaveDonut from '../../app-components/Cards/charts/CasualLeaveDonut';
import AnnualLeaveDonut from '../../app-components/Cards/charts/AnnualLeaveDonut';
import MaternityLeaveDonut from '../../app-components/Cards/charts/MaternityLeaveDonut';
import SickLeaveDonut from '../../app-components/Cards/charts/SickLeaveDonut';



export default function LeaveTypeMatrixHr() {
  return (
    <div className='flex flex-row gap-5 mt-10'>
        <Card CardsVariant={CardTypes.ELEVATED}> 
          <CardItems Title={<h2 className="text-[#ff4dff]">Casual Leave</h2>} Circle={<CasualLeaveDonut/>} /> 
        </Card>

        <Card CardsVariant={CardTypes.ELEVATED}>
          <CardItems Title={<h2 className="text-[#8080ff]">Annual Leave</h2>} Circle={<AnnualLeaveDonut/>} /> 
        </Card>

        <Card CardsVariant={CardTypes.ELEVATED}>
           <CardItems Title={<h2 className="text-[#99ff99]">Sick Leave</h2>} Circle={<SickLeaveDonut/>} />     
        </Card>

        <Card CardsVariant={CardTypes.ELEVATED}>
          <CardItems Title={<h2 className="text-[#ffc0cb]">Maternity Leave</h2>} Circle={<MaternityLeaveDonut/>} />     
        </Card>
    </div>
  )
}
