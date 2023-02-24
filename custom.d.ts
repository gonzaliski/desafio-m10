type textProps = {
  text: string;
};
type PageSectionProps = {
  sm?: sm;
  width?: string;
  alignCenter?: alignCenter;
};
type ProductCardProps = {
  id: string;
  title: string;
  desc: string;
  price: number;
  imgUrl?: string;
  purchasable?: boolean;
  detail?: boolean;
};
type NavBarLinksProps = {
  active?: boolean;
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

type HorizontalBoxProps = {
  gap?: string;
};

type HeadingProps = {
  position?: "right" | "left" | "center";
};

type userData = {
  username?: string;
  telephone?: number;
};
type UserStorageData = {
  username: string;
  telephone: number;
  address: string;
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

type SessionInfoProps = {
  handleLogout: (value: boolean) => any;
};
