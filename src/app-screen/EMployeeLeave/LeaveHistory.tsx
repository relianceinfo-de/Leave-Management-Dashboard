import Card from "../../app-components/Cards/Item";
import { CardTypes } from "../../app-components/Cards/Item";
import EmpleaveHistory from '../../app-components/LeaveHistory';

function EmpLeaveHistory() {
  return (
    <div className="mt-10">
        <Card CardsVariant={CardTypes.FILL}>
            <div className="flex flex-col">
                    <div className="my-5 pl-10 text-3xl font-semibold tracking-wide text-left text-[#002456]">
                        <h2> Leave History</h2>
                    </div>

                    <EmpleaveHistory/>  
                    
            </div>
        </Card>
    </div>
  )
}

export default EmpLeaveHistory