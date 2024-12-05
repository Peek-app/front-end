import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MobileMosaic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentIndex(s.track.details.rel);
    },
  });

  const slides = [
    {
      src: "/petMosaic1.png",
      alt: "Image 1",
    },
    {
      src: "/petMosaic2.png",
      alt: "Image 2",
    },
    {
      src: "/petMosaic3.png",
      alt: "Image 3",
    },
    {
      src: "/petMosaic4.jpg",
      alt: "Image 4",
    },
  ];

  useEffect(() => {
    if (slider.current) {
      slider.current.moveToIdx(currentIndex);
    }
  }, [currentIndex, slider]);

  return (
    <div className="relative w-full max-w-lg mx-auto bg-white py-8">
      <div className="w-3/4 mx-auto">
        <div
          ref={sliderRef}
          className="keen-slider rounded-3xl shadow-2xl h-96"
        >
          {slides.map((slide, index) => (
            <div key={index} className="keen-slider__slide relative">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 25vw"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-400" : "bg-gray-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
