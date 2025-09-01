import React, { useState } from "react";
import "./TwoBanner.css"

const slides = [
  {
    id: 1,
    img: "https://picsum.photos/1200/400?random=10",
    title: "First Banner",
    desc: "This is the first banner",
  },
  {
    id: 2,
    img: "https://picsum.photos/1080/720?grayscale",
    title: "Second Banner",
    desc: "This is the second banner",
  },
];

export default function TwoBanner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="banner">
      <img src={slides[current].img} alt={slides[current].title} className="banner-image2"/>
      <div className="banner-text">
        <h2>{slides[current].title}</h2>
        <p>{slides[current].desc}</p>
      </div>
      <button className="prev" onClick={prevSlide}>prev</button>
      <button className="next" onClick={nextSlide}>Next</button>
    </div>
  );
}
