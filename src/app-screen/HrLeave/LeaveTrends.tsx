import Card from "../../app-components/Cards/Item";
import { CardTypes } from "../../app-components/Cards/Item";
import LeaveTrendsCardItems from '../../app-components/LeaveTrendsItems';



function LeaveTrends() {
  return (
    
        <div className="w-3/5 mr-2.5">
            <Card CardsVariant={CardTypes.FILLED} >
                <div className="flex flex-col">
                <div className="text-3xl font-semibold tracking-wide text-left text-[#002456]"> 
                    <h2 className="mb-3"> Leave Trends.</h2>
                    <hr></hr>
                </div>
                <div className=" flex flex-row justify-between my-5"> 
                <LeaveTrendsCardItems Heading="Total Leave Taken" Values={567}/>
                <LeaveTrendsCardItems Heading="Pending Leave Request" Values={36}/>
                <LeaveTrendsCardItems Heading="Approved Leave" Values={136}/>
                <LeaveTrendsCardItems Heading="Leave Reject" Values={17}/>
                </div>
                </div>
            </Card>
            </div>
        
  )
}

export default LeaveTrends