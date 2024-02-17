import Card from "../../app-components/Cards/Item";
import { CardTypes } from "../../app-components/Cards/Item";
import EmpAnnualLeave from '../../app-components/Cards/charts/EmployeeCharts/AnnualLeaveDonut';
import CardItems from "../../app-components/Cards";

function LeaveTypes() {
  return (
    <div className="mt-10">
        <Card CardsVariant={CardTypes.FILL}>
        <div className="flex flex-col">
            <div className="my-5 pl-10 text-3xl font-semibold tracking-wide text-left text-[#002456]">
                <h2> Leave Balance</h2>
            </div>
                <div className="flex flex-row justify-between">
                    <CardItems Title={<h2 className="text-[#ff4dff]">Annual Leave</h2>} Circle={<EmpAnnualLeave/>} />
                   <CardItems Title={<h2 className="text-[#ff4dff]">Sick / Medical</h2>} Circle={<EmpAnnualLeave/>} />
                   <CardItems Title={<h2 className="text-[#ff4dff]">Compassionate</h2>} Circle={<EmpAnnualLeave/>} />
                   <CardItems Title={<h2 className="text-[#ff4dff]"> Maternity / Paternity</h2>} Circle={<EmpAnnualLeave/>} />
                   <CardItems Title={<h2 className="text-[#ff4dff]">Study</h2>} Circle={<EmpAnnualLeave/>} />
                </div>
            </div>
        </Card>
    </div>
  )
}

export default LeaveTypes