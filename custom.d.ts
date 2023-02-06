type textProps = {
  text: string;
};
type PageSectionProps = {
  sm?: sm;
  width?: string;
  alignCenter?: alignCenter;
};
type ProductCardProps = {
  id: number;
  title: string;
  desc: string;
  price: number;
  imgUrl?: string;
  purchasable?: boolean;
};
type NavBarLinksProps = {
  active?: active;
};

type BurgerMenuContainerProps = {
  open?: boolean;
};

type VerticalBoxProps = {
  gap?: string;
  width?: string;
  align?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "space-evenly";
};

type HeadingProps = {
  position?: "right" | "left" | "center";
};

type userData = {
  username?: string;
  telephone?: number;
};

type ProductsSectionProps = {
  color?: string;
};

type MainButtonProps = {
  size?: string;
};

type ProductCardDetailProps = {
  id: string;
};
