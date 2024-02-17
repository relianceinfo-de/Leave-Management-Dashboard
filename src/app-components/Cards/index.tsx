
import { FunctionComponent, ReactNode } from 'react';

type CardItemsProps = {
    Circle: ReactNode;
    Title: ReactNode;
  };
  
  const CardItems: FunctionComponent<CardItemsProps> = function CardItem({
    Circle,
    Title,
  
  }: CardItemsProps) {
    return (
      <div className='flex flex-col my-5 justify-center'>
        <div className='font-bold mb-5'>
          <h2>{Title}</h2>
        </div>

        <div className='my-25'>
            <div>{Circle}</div>
        </div>
    </div>
    );
  };
  export default CardItems;

  