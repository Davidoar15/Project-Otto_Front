import { useEffect, useState } from "react";
import style from "./ImageSlider.module.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={style.container}>
      <div className={style.leftArrow} onClick={previous}>
        🡠
      </div>

      <div className={style.rightArrow} onClick={next}>
        🡢
      </div>

      <div
        className={style.sliderStyles}
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
      ></div>

      <div className={style.conDots}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${style.dot} ${index === currentIndex ? style.activeDot : ""}`}
            onClick={() => goToSlide(index)}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
