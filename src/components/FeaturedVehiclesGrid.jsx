// FeaturedVehiclesGrid.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const vehicles = [
  {
    id: 1,
    title: "Yamaha MT-15",
    category: "Bike",
    pricePerDay: 300,
    location: "Bangalore",
    imageUrl:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2019/08/4747397_Yamaha_MT-15_2019_Xe_Tinhte_9.jpg",
    description: "Agile and stylish bike perfect for city rides.",
  },
  {
    id: 2,
    title: "Honda Activa",
    category: "Scooter",
    pricePerDay: 200,
    location: "Chennai",
    imageUrl: "https://etimg.etb2bimg.com/photo/112152572.cms",
    description: "Reliable scooter, easy to handle for daily commute.",
  },
  {
    id: 3,
    title: "NS 200",
    category: "Bike",
    pricePerDay: 300,
    location: "Mumbai",
    imageUrl: "https://i.ytimg.com/vi/u8fBLjM5-ko/maxresdefault.jpg",
    description: "Powerful and sporty bike with great road presence.",
  },
  {
    id: 4,
    title: "Royal Enfield Classic 350",
    category: "Bike",
    pricePerDay: 700,
    location: "Hyderabad",
    imageUrl:
      "https://media.assettype.com/freepressjournal/2024-08-13/yzph8wjx/Royal%20Enfiel%20Classic%20350",
    description: "Classic cruiser bike with comfortable riding.",
  },
];

export default function FeaturedVehiclesGrid({ vehiclesData }) {
  const featuredVehicles = vehiclesData ?? vehicles;
  const navigate = useNavigate();

  const handleAddBike = () => {
    navigate("/add-bike");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Featured Vehicles</h2>
        <button
          onClick={handleAddBike}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          + Add Bike
        </button>
      </div>

      {/* Grid of Vehicles */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {featuredVehicles.map(
          ({ id, title, category, pricePerDay, location, imageUrl, description }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={imageUrl}
                alt={title}
                className="h-48 w-full object-cover"
                loading="lazy"
                draggable={false}
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500 mb-1">
                  {category} · {location}
                </p>
                <p className="text-gray-600 text-sm flex-grow">{description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-blue-600 font-bold">
                    ₹{pricePerDay}
                    <small className="text-gray-500 font-normal"> / day</small>
                  </span>
                  <a
                    href={`/vehicles/${id}`}
                    className="text-sm font-semibold text-blue-500 hover:text-blue-700 transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
