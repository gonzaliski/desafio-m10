import Carousel from "nuka-carousel";
import styled from "styled-components";
import Image from "next/image";

export const DetailCarousel = ({ images }: { images: string[] }) => {
  return (
    <CarouselWrapper>
      <Carousel
        className={"carousel"}
        wrapAround={true}
        adaptiveHeight={true}
        defaultControlsConfig={{
          pagingDotsStyle: {
            display: images?.length > 10 ? "none" : "initial",
            margin: images?.length > 10 ? "5px 5px 0px 5px" : "5px 8px 0px 8px",
          },
        }}
        renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
          <button
            className={"slide-button"}
            onClick={previousSlide}
            disabled={previousDisabled}
          >
            {"<"}
          </button>
        )}
        renderCenterRightControls={({ nextDisabled, nextSlide }) => (
          <button
            className={"slide-button"}
            onClick={nextSlide}
            disabled={nextDisabled}
          >
            {">"}
          </button>
        )}
      >
        {images?.map((r: any) => (
          <Image
            src={r || ""}
            alt={"imagen"}
            height={400}
            width={400}
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
  flex-grow: 1;
  .slider__img {
    object-fit: contain;
    width: 100%;
  }

  @media (max-width: 768px) {
    .slider__img {
      transform: scale(0.85);
    }
  }

  @media (min-width: 768px) {
    .slider__img {
      max-height: 500px;
      max-width: 500px;
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
  .slider-container {
    padding: 0 10% 0 10%;
  }
`;
