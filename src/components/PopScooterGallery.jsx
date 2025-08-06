// src/PopScooterGallery.jsx
import React from "react";

const images = [
  {
    src: "https://www.cycleworld.com/resizer/2VzDUCVlCOsYv1xrH0dH_lveqVc=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/LFYPOL4YHQFOKZRTLJNMUDL2JA.jpg",
    alt: "White and red scooters on beach",
  },
  {
    src: "https://www.cycleworld.com/resizer/2VzDUCVlCOsYv1xrH0dH_lveqVc=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/LFYPOL4YHQFOKZRTLJNMUDL2JA.jpg",
    alt: "Pop Scooter Hire shop front with scooters",
  },
  {
    src: "https://www.cycleworld.com/resizer/2VzDUCVlCOsYv1xrH0dH_lveqVc=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/LFYPOL4YHQFOKZRTLJNMUDL2JA.jpg",
    alt: "Sunny beach with grassy area",
  },
  {
    src: "https://www.cycleworld.com/resizer/2VzDUCVlCOsYv1xrH0dH_lveqVc=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/LFYPOL4YHQFOKZRTLJNMUDL2JA.jpg",
    alt: "Back of t-shirt saying Scoot the Pop Way",
  },
  {
    src: "https://www.cycleworld.com/resizer/2VzDUCVlCOsYv1xrH0dH_lveqVc=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/LFYPOL4YHQFOKZRTLJNMUDL2JA.jpg",
    alt: "Pop Scooter Hire logo on orange wall",
  },
  {
    src: "https://www.cycleworld.com/resizer/2VzDUCVlCOsYv1xrH0dH_lveqVc=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/LFYPOL4YHQFOKZRTLJNMUDL2JA.jpg",
    alt: "Scooter parked with beach in background",
  },
  {
    src: "https://www.cycleworld.com/resizer/2VzDUCVlCOsYv1xrH0dH_lveqVc=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/LFYPOL4YHQFOKZRTLJNMUDL2JA.jpg",
    alt: "Sandy beach and calm sea bay",
  },
  {
    src: "https://www.cycleworld.com/resizer/2VzDUCVlCOsYv1xrH0dH_lveqVc=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/LFYPOL4YHQFOKZRTLJNMUDL2JA.jpg",
    alt: "Row of blue scooters on deck by the sea",
  },
];

function GalleryImage({ src, alt }) {
  const defaultImg = "https://via.placeholder.com/400?text=No+Image";
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = defaultImg;
  };
  return (
    <div className="relative group transition-transform duration-200 transform hover:scale-105">
      <img
        src={src}
        alt={alt}
        className="w-full h-56 object-cover rounded-xl shadow-lg border-2 border-transparent group-hover:border-orange-400 transition-all duration-300 bg-gray-200"
        onError={handleImgError}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 rounded-xl transition-opacity"></div>
      <div className="absolute bottom-3 left-4 right-4 flex items-end">
        <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">{alt}</span>
      </div>
    </div>
  );
}

export default function PopScooterGallery() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-2 bg-gradient-to-br from-orange-100 via-white to-orange-50">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 tracking-tight mb-2">
            Pop Scooter Hire
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-orange-500 rounded-full mb-1"></div>
          <p className="text-gray-600 text-lg mt-3 max-w-2xl text-center">
            Discover your adventure with our premium fleet of scooters, available at the most scenic spots. Explore smoothly, ride stylishly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {images.map((img, idx) => (
            <GalleryImage key={idx} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
