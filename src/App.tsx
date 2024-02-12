import { List, ListItem, ListItemPrefix, Avatar, Typography} from "@material-tailwind/react";
import Card from './app-components/Cards/Item';
import { CardTypes } from './app-components/Cards/Item';
import CardItems from './app-components/Cards/index';
import LeaveRequest from './app-components/Cards/table';
import { TABLE_ROWS } from './app-components/Cards/table';
import Onleave from "./app-components/Cards/Onleave";
import { leaves } from "./app-components/Cards/Onleave";

function App() {
 
  return (
      <>  
      <section className="mx-auto px-10 container ">

        <div className="flex flex-col justify-center px-20  bg-[#002456] text-white h-[100px] mt-5">
          <h2 className="text-2xl font-bold">Leave Management</h2>
          <p className=""> Streamline employee time-off requests, approvals and tracking.</p>
        </div>
      

      <section className='flex flex-row gap-5 mt-5'>
      <Card CardsVariant={CardTypes.ELEVATED}> 
        <CardItems Title={<h2 className="font-bold text-[#ff4dff]">Casual Leave</h2>} Circle={"10/04"} Used={4} Available = {3}/> 
      </Card>

        <Card CardsVariant={CardTypes.ELEVATED}>
          <CardItems Title={<h2 className="font-bold text-[#8080ff]">Annual Leave</h2>} Circle={"10/04"} Used={4} Available = {3}/> 
        </Card>

        <Card CardsVariant={CardTypes.ELEVATED}>
           <CardItems Title={<h2 className="font-bold text-[#99ff99]">Sick Leave</h2>} Circle={"10/04"} Used={4} Available = {3}/>     
        </Card>

        <Card CardsVariant={CardTypes.ELEVATED}>
          <CardItems Title={<h2 className="font-bold text-[#ffc0cb]">Maternity Leave</h2>} Circle={"10/04"} Used={4} Available = {3}/>     
        </Card>
      </section>

      <section className="pt-10 ">
        <div className="flex items-center gap-x-2">
          <h2 className="font-semibold">Leave request</h2> <div className="bg-[#002456] font-semibold text-sm text-white rounded-[50%] px-2">{TABLE_ROWS.length}</div>
        </div>
        
        <div className='flex flex-row'>
          <div className='w-3/5 mr-10'> <LeaveRequest/> </div>
          <div className='w-2/5 border rounded'>
          
              {/* <Card CardsVariant={CardTypes.FILLED}>
                <div className="flex flex-col px-5">
                <div className="mb-5"> <h3>Who's On Leave</h3> </div>
                    <List>
                      <ListItem>
                           <div className="flex flex-row w-1/6">
                              <ListItemPrefix>
                                <p>TK</p>
                              </ListItemPrefix>
                            </div>

                <div className="w-5/6">
                <Typography variant="h6" color="blue-gray">
                  <p>Tejas Khanna </p>
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                    <p> Apr 20 . Casual Leave </p>
                </Typography>
                </div> 
              </ListItem>
              </List>
              </div>
            </Card> */}
            <h3 className="font-semibold border-b pl-3 py-3">Who's On Leave?</h3>
            
            <div className="flex items-center gap-x-2 pl-3 mt-3">
              <h2 className="font-semibold">on leave:</h2> <div className="font-semibold text-sm text-[#ff4dff]">{leaves.length}</div>
            </div>

            <div className="mt-3 flex flex-col pl-3 gap-y-4">
              <Onleave />
            </div>
           

          </div>
        </div>
      </section>

      </section>

      </>
  )
}

export default App
