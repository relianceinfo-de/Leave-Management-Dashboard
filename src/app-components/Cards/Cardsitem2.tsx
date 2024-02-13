
import { FunctionComponent, ReactNode } from 'react';

type CardItemsProps = {
    
    Title: string;
    Pending: number;
    Approved: number;
  };
  
  const CardItems: FunctionComponent<CardItemsProps> = function CardItem({
    Title,
    Pending,
    Approved,
  }: CardItemsProps) {
    return (
      <div className='flex flex-col'>
        <div className='flex justify-center'>
          <h2>{Title}</h2>
        </div>

        <div className='flex flex-row gap-8 mt-5'>

            
            <div className='flex flex-col'>
                <p >Approved : {Approved}</p>
                <p >Pending : {Pending}</p> 
            </div>

        </div>
    </div>
    );
  };
  export default CardItems;

  