import { List, ListItem, ListItemPrefix, Avatar, Typography} from "@material-tailwind/react";
import Card from './app-components/Cards/Item';
import { CardTypes } from './app-components/Cards/Item';
import CardItems from './app-components/Cards/index';
import LeaveRequest from './app-components/Cards/table';


function App() {
 
  return (
      <div>  
      <section></section>
      <section className='flex flex-row gap-5'>
      <Card CardsVariant={CardTypes.ELEVATED}> 
        <CardItems Title= {"Casual Leave"} Circle={"10/04"} Used={4} Available = {3}/> 
      </Card>

        <Card CardsVariant={CardTypes.ELEVATED}>
          <CardItems Title= {"Sick Leave"} Circle={"10/04"} Used={4} Available = {3}/> 
        </Card>

        <Card CardsVariant={CardTypes.ELEVATED}>
           <CardItems Title= {"Earned Leave"} Circle={"10/04"} Used={4} Available = {3}/>     
        </Card>

        <Card CardsVariant={CardTypes.ELEVATED}>
          <CardItems Title= {"Adjustment Leave"} Circle={"10/04"} Used={4} Available = {3}/>     
        </Card>
      </section>

      <section className="pt-10 ">
        <div className='flex flex-row'>
          <div className='w-3/5 mr-10'> <LeaveRequest/> </div>

          <div className='w-2/5'>
          
              <Card CardsVariant={CardTypes.FILLED}>
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
            </Card>
          </div>
        </div>

      </section>
      </div>
  )
}

export default App
