type alignProps = "center" | "flex-end" | "flex-start" | "stretch" | "baseline";
type justifyProps =
  | "center"
  | "flex-end"
  | "flex-start"
  | "space-around"
  | "space-between"
  | "space-evenly";
type textProps = {
  text: string;
};
type PageSectionProps = {
  gap?: string;
  sm?: boolean;
  width?: string;
  align?: alignProps;
  justify?: justifyProps;
};
type ProductCardProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  stock: boolean;
  isAlreadyFavourite: boolean;
};
type NavBarLinksProps = {
  active?: boolean;
};

type BurgerMenuContainerProps = {
  open?: boolean;
};
type FlexProps = {
  gap?: string;
  align?: alignProps;
  justify?: justifyProps;
};

type VerticalBoxProps = FlexProps & {
  width?: string;
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
  sizesAvailable: string[];
  images: string[];
  stock: boolean;
};

type SessionInfoProps = {
  handleLogout: (value: boolean) => any;
};

type ProductData = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  stock: boolean;
};

type SizeSelectorProps = {
  onChange?: (a: string) => void;
  available: string[];
};
type shoppingCartItem = {
  id: string;
  imgUrl: string;
  size: string;
  title: string;
  price: number;
};
type favouriteItems = {
  id: string;
  image: string;
  title: string;
  price: number;
  isAlreadyFavourite: boolean;
};

type Brand = {
  name: string;
  image: string;
};
type Banner = {
  id: string;
  query: string;
  desktop: string;
  mobile: string;
};

type Genre = "men" | "female";
