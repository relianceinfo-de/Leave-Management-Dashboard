import Card from "../../app-components/Cards/Item";
import { CardTypes } from "../../app-components/Cards/Item";
import EmpUpComingHoliday from '../../app-components/UpComing';

function Upcoming() {
  return (
    <div className="mt-10">
        <Card CardsVariant={CardTypes.FILL}>
        <div className="flex flex-col">
            <div className="my-5 pl-10 text-3xl font-semibold tracking-wide text-left text-[#002456]">
                <h2> Upcoming Public Holidays</h2>
            </div>
                <div >
                    <EmpUpComingHoliday/>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Upcoming