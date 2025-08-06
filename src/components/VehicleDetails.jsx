import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function VehicleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost/image_upload_project/get-vehicles.php")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const foundVehicle = data.find((v) => v.id.toString() === id);
          if (foundVehicle) {
            setVehicle(foundVehicle);
            setError(null);
          } else {
            setError("Vehicle not found.");
          }
        } else {
          setError("Invalid data received.");
        }
      })
      .catch(() => {
        setError("Failed to load vehicle data.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <svg
          className="animate-spin h-10 w-10 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-label="Loading spinner"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
        <span className="ml-3 text-lg text-gray-700">Loading...</span>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center mt-12 space-y-4">
        <p className="text-red-600 font-semibold text-lg">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <main className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        aria-label="Back to listing"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back to listing
      </button>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
          <img
            src={vehicle.imageUrl || "/placeholder-image.png"}
            alt={vehicle.title}
            className="object-contain max-h-full max-w-full"
            draggable={false}
            onError={(e) => {
              e.currentTarget.src = "/placeholder-image.png";
            }}
          />
        </div>

        <section className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{vehicle.title}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 mb-6">
            <p>
              <span className="font-semibold">Category:</span> {vehicle.category}
            </p>
            <p>
              <span className="font-semibold">Location:</span> {vehicle.location}
            </p>
            <p>
              <span className="font-semibold">Price per day:</span>{" "}
              <span className="text-blue-600 font-bold">₹{vehicle.pricePerDay}</span>
            </p>
            <p>
              <span className="font-semibold">Uploaded on:</span>{" "}
              {new Date(vehicle.uploaded_at).toLocaleString()}
            </p>
          </div>

          <hr className="border-gray-300 mb-6" />

          <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
            {vehicle.description}
          </p>
        </section>
      </article>
    </main>
  );
}
