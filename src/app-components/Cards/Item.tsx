

import { FunctionComponent, ReactNode } from 'react';

enum CardTypes {
  ELEVATED,
  OUTLINED,
  FILLED,
}

const CardComponent_MAPS: Record<CardTypes, string> = {
  [CardTypes.ELEVATED]: 'mb-3.5 px-4 py-5 bg-white hover:bg-zinc-100 rounded-lg border flex justify-center',
  [CardTypes.OUTLINED]: '',
  [CardTypes.FILLED]: 'py-5 px-5 bg-[#C8C3D3]',
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