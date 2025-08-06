import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeaturedVehiclesGrid() {
  const [vehiclesData, setVehiclesData] = useState([]);
  const navigate = useNavigate();

  const fetchVehicles = () => {
    fetch("http://localhost/image_upload_project/get-vehicles.php")
      .then((res) => res.json())
      .then((data) => setVehiclesData(Array.isArray(data) ? data : []))
      .catch(() => setVehiclesData([]));
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleAddBike = () => {
    navigate("/add-bike");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Featured Vehicles
        </h2>
        <button
          onClick={handleAddBike}
          className="inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition"
          aria-label="Add a new bike"
        >
          + Add Bike
        </button>
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {vehiclesData.map(
          ({ id, title, category, pricePerDay, location, imageUrl, description }) => (
            <article
              key={id}
              className="group flex flex-col rounded-lg bg-white shadow-md ring-1 ring-gray-200 hover:shadow-lg hover:ring-orange-400 transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/vehicles/${id}`)}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <img
                  src={imageUrl}
                  alt={title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="capitalize">{category}</span> &middot; {location}
                </p>
                <p className="text-gray-700 text-sm flex-grow line-clamp-3">{description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-orange-600 font-bold text-lg">
                    ₹{pricePerDay}
                    <small className="text-gray-500 font-normal text-sm ml-1">/ day</small>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card navigation
                      navigate(`/vehicles/${id}`);
                    }}
                    className="text-orange-600 font-medium hover:underline focus:outline-none"
                    aria-label={`View details for ${title}`}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}
