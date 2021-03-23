import React, {  useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ array, showIcons }) => {
  const [current, setCurrent] = useState(0);
  const length = array.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    setTimeout(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 4500)}, [current, length])

  return (
    <div className="slider">
      {showIcons && <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />}
      {showIcons && <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />}
      {array.map((element, index) => {
        const { img} = element;
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
                <Image src={img} alt="" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Slider;
