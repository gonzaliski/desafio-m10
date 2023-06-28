import Carousel from "nuka-carousel";
import styled from "styled-components";
import Image from "next/image";

export const MainCarousel = ({ images }: { images: any[] }) => {
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
            src={r || ""}
            alt={"imagen"}
            height={540}
            width={1900}
            className="slider__img"
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
    object-fit: cover;
    object-position: top;
    margin-bottom: 35px;
    width: 100%;
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
