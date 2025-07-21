// Hero.jsx
import { FaMotorcycle, FaBolt, FaMapMarkerAlt } from "react-icons/fa";

const bikeTypes = [
  { label: "Electric", icon: <FaBolt size={20} /> },
  { label: "Commuter", icon: <FaMotorcycle size={20} /> },
  { label: "Premium", icon: <FaMotorcycle size={20} /> },
];

const bgUrl = "https://i.pinimg.com/736x/e8/f9/8e/e8f98e86a24947a14f6922b6307bb5e7.jpg";

const Hero = () => (
  <section
    className="relative min-h-[88vh] flex items-center bg-cover bg-center overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(to right, #18181b99 30%, #ea580c70 100%), url('${bgUrl}')`,
    }}
  >
    {/* Decorative floating icon - unique accent */}
    <FaMotorcycle className="absolute opacity-20 text-white right-10 top-10 text-8xl z-10 hidden md:block" />

    <div className="relative z-20 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-6 py-24 md:py-0 gap-8 items-center">
      {/* LEFT: Headline/Text */}
      <div className="flex-1 text-white max-w-xl md:pr-8 drop-shadow-md">
        <span className="inline-flex items-center gap-2 uppercase tracking-widest bg-white/20 rounded-full py-1 px-4 text-xs font-semibold text-orange-200 mb-6 shadow-md">
          <FaMapMarkerAlt /> Women Ride More!
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight md:leading-tight mb-5">
          Discover Freedom on <span className="text-orange-300">Two Wheels</span>
        </h1>
        <p className="mt-2 text-lg md:text-xl font-medium opacity-90">
          Handpicked bikes, scooters & electrics for the bold and adventurous.
          Empower your ride—rent hourly, daily, or monthly, wherever you go!
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/browse"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-base"
          >
            Explore Bikes
          </a>
          <a
            href="/list"
            className="bg-white/20 hover:bg-white/40 border border-white text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 text-base"
          >
            List Your Bike
          </a>
        </div>
      </div>

      {/* RIGHT: Glass booking card */}
      <div className="flex-1 flex flex-col items-end w-full">
        <div className="w-full max-w-sm rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-8 ring-1 ring-orange-100 border-t-4 border-orange-400">
          {/* Category Tabs */}
          <div className="flex justify-between items-center gap-2 mb-2">
            {bikeTypes.map((type, idx) => (
              <button
                key={type.label}
                className={`flex flex-col items-center flex-1 py-2 px-0 border-b-2 transition
                  ${idx === 0
                    ? "border-orange-500 text-orange-700 bg-orange-100/30"
                    : "border-transparent text-gray-600 hover:border-orange-300 hover:text-orange-600"}
                  group`}
              >
                <span className="mb-1">{type.icon}</span>
                <span className="text-xs font-bold uppercase tracking-widest">{type.label}</span>
              </button>
            ))}
          </div>
          <hr className="-mx-8 mb-4 border-orange-100" />

          {/* Location */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-orange-700 mb-2">Location</label>
            <div className="flex gap-2">
              <select className="flex-1 border rounded-lg py-2 px-3 focus:ring-orange-500">
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Chennai</option>
              </select>
              <select className="flex-1 border rounded-lg py-2 px-3 focus:ring-orange-500">
                <option>Koramangala</option>
                <option>HSR Layout</option>
                <option>Andheri</option>
              </select>
            </div>
          </div>
          {/* Pickup */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-orange-700 mb-2">Pickup</label>
            <div className="flex gap-2">
              <input type="date" className="flex-1 border rounded-lg py-2 px-3 focus:ring-orange-500" />
              <input type="time" className="flex-1 border rounded-lg py-2 px-3 focus:ring-orange-500" />
            </div>
          </div>
          {/* Drop */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-orange-700 mb-2">Drop</label>
            <div className="flex gap-2">
              <input type="date" className="flex-1 border rounded-lg py-2 px-3 focus:ring-orange-500" />
              <input type="time" className="flex-1 border rounded-lg py-2 px-3 focus:ring-orange-500" />
            </div>
          </div>
          {/* Action Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow transition">
            Search Adventure
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
