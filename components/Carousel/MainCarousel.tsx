import { useMediaQuery } from "hooks/useMediaQuery";
import Image from "next/image";
import Router from "next/router";
import Carousel from "nuka-carousel";
import styled from "styled-components";

export const MainCarousel = ({ images }: { images: Banner[] }) => {
  const isMdScreen = useMediaQuery(550);
  let imageSize = {
    height: isMdScreen ? 540 : 300,
    width: isMdScreen ? 1900 : 300,
  };
  return (
    <CarouselWrapper>
      <Carousel
        className={"carousel"}
        wrapAround={true}
        adaptiveHeight={true}
        // withoutControls={true}
        autoplay={true}
        autoplayInterval={5000}
        defaultControlsConfig={{
          prevButtonStyle: { display: "none" },
          nextButtonStyle: { display: "none" },
          pagingDotsStyle: {
            display: images?.length > 10 ? "none" : "initial",
            margin: images?.length > 10 ? "5px 5px 0px 5px" : "5px 3px 0px 3px",
          },
        }}
      >
        {images?.map((r: any) => (
          <Image
            key={r.id}
            src={(isMdScreen ? r.desktop : r.mobile) || ""}
            alt={"imagen"}
            height={imageSize.height}
            width={imageSize.width}
            className="slider__img"
            onClick={() =>
              Router.push({ pathname: "/search", query: { search: r.query } })
            }
            priority
          ></Image>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  display: flex;
  place-content: center;
  width: 100%;
  height: auto;
  .slider__img {
    cursor: pointer;
    object-fit: scale-down;
    object-position: top;
    margin-bottom: 35px;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 350px) {
    .slider__img {
      object-fit: cover;
    }
  }

  .carousel {
    width: 100%;
    min-width: 200px;
  }

  .slide-button {
    cursor: pointer;
    padding: 5px;
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: var(--secondary-color);
    &:hover {
      color: var(--primary-comp-color);
    }
  }
  .paging-item.active {
    button {
      transform: scale(1.6);
    }
  }
`;
