import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/general/zodiac.jpg";
import img2 from "../../assets/general/zodiac-signs.jpg";
import img3 from "../../assets/general/tarot.jpg";
// import img3 from "../../assets/general/bg.jpg";
import "../slider/Slider.scss";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mt-4">
      <Carousel.Item>
        <img src={img1} alt="" className="sliderImg" />
        <Carousel.Caption className="slider1">
          <h3 className="display-1">Your Spiritual Home</h3>
          <p className="fs-3">
            Welcome at the Horoscope website. We are here to reveal the
            spiritual mysteries for you.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="" className="sliderImg" />
        <Carousel.Caption className="slider2">
          <h3 className="display-3">Let Us Guide You In The Spiritual World</h3>
          <p className="fs-3">
            Are you looking for a place to explore your spiritual side and
            connect with like-minded individuals? Then this website is the
            perfect place for you. Our website is here to to provide you with a
            comprehensive and enriching experience, as we believe that everyone
            deserves access to spiritual guidance and knowledge.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="" className="sliderImg" />
        <Carousel.Caption className="text-black slider3 fs-4 p-1">
          <h3 className="fs-2">Tarot</h3>
          <p>
            Tarot cards are an age-old method of predicting the future with the
            help of 78 cards. Each of these cards carries a special archetypal
            symbol that represents the future. A psychic or a person with
            knowledge of tarot cards can uncover the meaning of these cards. The
            present-day tarot cards’ meanings were interpreted by Etteilla and
            Marie-Anne Adelaide Lenormand.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
