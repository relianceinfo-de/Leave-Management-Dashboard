

import { FunctionComponent, ReactNode } from 'react';

enum CardTypes {
  ELEVATED,
  OUTLINED,
  FILLED,
}

const CardComponent_MAPS: Record<CardTypes, string> = {
  [CardTypes.ELEVATED]: 'mb-3.5 px-4 py-5 bg-white hover:bg-zinc-100 rounded-lg border flex flex-row items-center',
  [CardTypes.OUTLINED]: '',
  [CardTypes.FILLED]: 'mb-3.5 pr-4 pt-4 pb-2.5 bg-neutral-100 flex flex-row items-center',
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
    <div className={` justify-between ${FinalCardClasses}`}>
      {children}
    </div>
  );
};

export default Card;

export { CardTypes };