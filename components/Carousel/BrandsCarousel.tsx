import Carousel from "nuka-carousel";
import styled from "styled-components";
import Image from "next/image";

export const BrandsCarousel = ({ brands }: { brands: Brand[] }) => {
  return (
    <CarouselWrapper>
      <Carousel
        className={"carousel"}
        wrapAround={true}
        // withoutControls={true}
        autoplay={true}
        slidesToShow={4}
        autoplayInterval={2000}
        animation="zoom"
        pauseOnHover={true}
        speed={5000}
        cellAlign="center"
        defaultControlsConfig={{
          prevButtonStyle: { display: "none" },
          nextButtonStyle: { display: "none" },
          pagingDotsStyle: {
            display: "none",
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
        {brands.map((r: any, i) => (
          <Image
            key={i}
            src={r.image || ""}
            alt={"imagen"}
            height={500}
            width={500}
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
  place-items: center;
  height: auto;
  justify-content: center;
  .slider__img {
    object-fit: contain;
    width: 100%;
    max-height: 100px;
    max-width: 100px;
  }

  @media (min-width: 550px) {
    .slider__img {
      max-height: 130px;
      max-width: 130px;
    }
  }

  .slider-container {
    padding: 0 7% 0 7%;
    width: 90%;
    min-width: 200px;
  }
  @media (min-width: 768px) {
    .slider-container {
      width: 70%;
    }
  }
  .slide {
    width: auto !important;
  }
  .slider-list {
    justify-content: space-between;
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
