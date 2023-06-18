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
  price: number;
  imgUrl?: string;
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

type LongSectionProps = {
  color?: string;
};

type MainButtonProps = {
  size?: string;
};

type ProductCardDetailProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
};

type SessionInfoProps = {
  handleLogout: (value: boolean) => any;
};

type ProductData = {
  title: string;
  desc: string;
  price: number;
  imgUrl?: string;
};

type SizeSelectorProps = {
  onChange?: (a: string) => void;
};
