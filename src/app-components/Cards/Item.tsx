

import { FunctionComponent, ReactNode } from 'react';

enum CardTypes {
  ELEVATED,
  OUTLINED,
  FILLED,
  FILL,
}

const CardComponent_MAPS: Record<CardTypes, string> = {
  [CardTypes.ELEVATED]: 'mb-3.5 px-4 py-5 bg-white hover:bg-zinc-100 rounded-lg border flex flex-row justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]',
  [CardTypes.OUTLINED]: '',
  [CardTypes.FILLED]: 'py-5 px-5 bg-[#C8C3D3]',
  [CardTypes.FILL]: 'py-5 px-5 rounded-lg border shadow-[0_3px_10px_rgb(0,0,0,0.2)]',
};

type CardsProps = {
  CardsVariant: CardTypes;
  children?: ReactNode;
  onClick?: () => void;
  link?: string;
};

const Card: FunctionComponent<CardsProps> = function Cards({
  CardsVariant,
  children,
  //onClick,
  // link,
}: 
CardsProps) {
  const CardDesignLayout = 'text-center w-full align-middle rounded';
  const FinalCardClasses = `${CardDesignLayout} ${CardComponent_MAPS[CardsVariant]} `;

  return (
    <div className={`${FinalCardClasses}`}>
      {children}
    </div>
  );
};

export default Card;

export { CardTypes };