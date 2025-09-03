import React, { useEffect, useState } from "react";
import "./TwoBanner.css";

const slides = [
  {
    id: 1,
    img: "https://picsum.photos/1200/400?random=10",
    title: "Slide 1",
    desc: "This is the first banner",
  },
  {
    id: 2,
    img: "https://picsum.photos/1080/720?grayscale",
    title: "Slide 2",
    desc: "This is the second banner",
  },
  {
    id: 3,
    img: "https://picsum.photos/1200/400?random=103",
    title: "Slide 3",
    desc: "Here’s the third slide 🎉",
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner cell-2" key={slides[current].id}>
      <img
        src={slides[current].img}
        alt={slides[current].title}
        className="banner-image2"
      />
      <div className="banner-text">
        <h2>{slides[current].title}</h2>
        <p>{slides[current].desc}</p>
      </div>
      <button className="prev" onClick={prevSlide}>
        prev
      </button>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}
