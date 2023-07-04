import { BrandsCarousel } from "components/Carousel/BrandsCarousel";
import { MainCarousel } from "components/Carousel/MainCarousel";
import { Layout } from "components/Layout/Layout";
import FeaturedProducts from "components/bff";
import { GetServerSideProps } from "next/types";
import { LongSection, VerticalBox } from "ui/boxes";
import { Subtitle } from "ui/texts";

export default function Home({
  featuredProducts,
  brands,
  banners,
}: {
  featuredProducts: ProductCardProps[];
  brands: Brand[];
  banners: Banner[];
}) {
  return (
    <Layout>
      <VerticalBox>
        <MainCarousel images={banners} />
      </VerticalBox>
      <VerticalBox gap="70px">
        <Subtitle align="center">Buscá tus marcas favoritas</Subtitle>
        <BrandsCarousel brands={brands} />
      </VerticalBox>
      <LongSection color="var(--primary-color)">
        <FeaturedProducts products={featuredProducts}></FeaturedProducts>
      </LongSection>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  featuredProducts: ProductCardProps;
}> = async () => {
  let url;
  if (process.env.NODE_ENV == "development") {
    url = process.env.LOCAL_API;
  } else {
    url = process.env.PROD_API;
  }
  const brandsRes = await fetch(url + "/api/brands");
  const bannersRes = await fetch(url + "/api/banners");
  const productRes = await fetch(url + "/api/featured-products");
  const featuredProducts = await productRes.json();
  const brands = await brandsRes.json();
  const banners = await bannersRes.json();
  return { props: { featuredProducts, brands, banners } };
};
