import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];

export default function GalleryCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      duration: 500, // Transition time in ms
    },

    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 769px)": {
        slides: { perView: 2, spacing: 15 },
      },
    },
  });

  return (
    <div className="bg-[#1f1b2e] p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-purple-100 mb-6 tracking-wide font-serif">
        Photo Gallery
      </h2>
      <div ref={sliderRef} className="keen-slider">
        {photos.map((src, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <img
              src={src}
              alt={`photo-${index}`}
              className="rounded-lg max-h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
