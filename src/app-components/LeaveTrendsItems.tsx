
import { FunctionComponent} from 'react';

type LeaveTrendsItemsProps = {
    Heading: string
    Values: number
  };
  
  const LeaveTrendsCardItems: FunctionComponent<LeaveTrendsItemsProps> = function CardItem({
    Heading,
    Values,
  }: LeaveTrendsItemsProps) {
    return (
      <div className='flex flex-col'>
        <div className='font-bold text-base font-semibold tracking-wide leading-4 mb-5'>
          <h2>{Heading}</h2>
        </div>

        <div className=''>
            <div className='text-4xl font-normal leading-10 text-start'>{Values}</div>
        </div>
    </div>
    );
  };
  export default LeaveTrendsCardItems;

  