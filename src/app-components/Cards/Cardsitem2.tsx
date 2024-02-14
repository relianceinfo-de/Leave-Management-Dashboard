
import { FunctionComponent, ReactNode } from 'react';

type CardItemsProps = {
    Title: string;
  };
  
  const CardItems: FunctionComponent<CardItemsProps> = function CardItem({
    Title,
   
  }: CardItemsProps) {
    return (
      <div className='flex flex-col'>
        <div className='flex justify-center'>
          <h2 className=''>{Title}</h2>
        </div>
    </div>
    );
  };
  export default CardItems;

  