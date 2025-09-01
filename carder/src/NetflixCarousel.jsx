import { useState } from "react";
import "./NetflixCarousel.css";

const slides = [
  { id: 1, img: "https://picsum.photos/1200/400?random=201", title: "Slide 1" },
  { id: 2, img: "https://picsum.photos/1200/400?random=202", title: "Slide 2" },
  { id: 3, img: "https://picsum.photos/1200/400?random=203", title: "Slide 3" },
  { id: 4, img: "https://picsum.photos/1200/400?random=204", title: "Slide 4" },
];

export default function NetflixCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.img} alt={slide.title} />
            <div className="caption">{slide.title}</div>
          </div>
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>‹</button>
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
}
