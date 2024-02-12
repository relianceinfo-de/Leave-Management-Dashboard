
import { FunctionComponent, ReactNode } from 'react';

type CardItemsProps = {
    Circle: string;
    Title: ReactNode;
    Used: number;
    Available: number;
  };
  
  const CardItems: FunctionComponent<CardItemsProps> = function CardItem({
    Circle,
    Title,
    Used,
    Available,
  }: CardItemsProps) {
    return (
      <div className='flex flex-col'>
        <div className='flex justify-center'>
          <h2 className='font-bold'>{Title}</h2>
        </div>

        <div className='flex flex-row gap-8 mt-5'>

            <div>{Circle}</div>

            <div className='flex flex-col'>
                <p >Available : {Available}</p>
                <p >Used : {Used}</p> 
            </div>

        </div>
    </div>
    );
  };
  export default CardItems;

  