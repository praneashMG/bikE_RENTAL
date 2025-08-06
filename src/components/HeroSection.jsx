import { FaMotorcycle, FaBolt, FaMapMarkerAlt } from "react-icons/fa";

// Vehicle types
const bikeTypes = [
  { label: "Electric", icon: <FaBolt size={20} /> },
  { label: "Commuter", icon: <FaMotorcycle size={20} /> },
  { label: "Premium", icon: <FaMotorcycle size={20} /> },
];

// Use a dark/blue overlay for better contrast with orange and white content
const bgUrl = "https://i.pinimg.com/736x/e8/f9/8e/e8f98e86a24947a14f6922b6307bb5e7.jpg";

const Hero = () => (
  <section
    className="relative min-h-[88vh] flex items-center bg-cover bg-center overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(to right, rgba(10,18,37,0.86) 40%, rgba(255,115,0,0.6) 100%), url('${bgUrl}')`,
    }}
  >
    {/* Decorative accent */}
    <FaMotorcycle className="absolute opacity-15 text-[#FF7300] right-10 top-10 text-8xl z-10 hidden md:block" />

    <div className="relative z-20 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-6 py-24 md:py-0 gap-8 items-center">
      {/* Left: Headline & CTA */}
      <div className="flex-1 text-white max-w-xl md:pr-8 drop-shadow-xl">
        <span className="inline-flex items-center gap-2 uppercase tracking-widest bg-[#203264]/90 rounded-full py-1 px-4 text-xs font-semibold text-orange-200 mb-6 shadow-md">
          <FaMapMarkerAlt /> Women Ride More!
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5">
          Discover Freedom on <span className="text-[#FF7300] drop-shadow">Two Wheels</span>
        </h1>
        <p className="mt-2 text-lg md:text-xl font-medium text-orange-100/90">
          Handpicked bikes, scooters & electrics for the bold and adventurous.
          Empower your ride—rent hourly, daily, or monthly, wherever you go!
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/browse"
            className="bg-[#FF7300] hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-base"
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

      {/* Right: Glass booking card */}
      <div className="flex-1 flex flex-col items-end w-full">
        <div className="w-full max-w-sm rounded-2xl bg-white/90 backdrop-blur-lg shadow-2xl p-8 ring-1 ring-[#FF7300]/20 border-t-4 border-[#FF7300]">
          {/* Category Tabs */}
          <div className="flex justify-between items-center gap-2 mb-2">
            {bikeTypes.map((type, idx) => (
              <button
                key={type.label}
                className={`flex flex-col items-center flex-1 py-2 px-0 border-b-2 transition
                  ${
                    idx === 0
                      ? "border-[#FF7300] text-[#d16000] bg-[#fff7ee]"
                      : "border-transparent text-gray-600 hover:border-[#FF7300]/50 hover:text-[#d16000]"
                  }
                  group`}
              >
                <span className="mb-1">{type.icon}</span>
                <span className="text-xs font-bold uppercase tracking-widest">{type.label}</span>
              </button>
            ))}
          </div>
          <hr className="-mx-8 mb-4 border-[#FF7300]/10" />

          {/* Location */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-[#FF7300] mb-2">Location</label>
            <div className="flex gap-2">
              <select className="flex-1 border rounded-lg py-2 px-3 focus:ring-[#FF7300]">
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Chennai</option>
              </select>
              <select className="flex-1 border rounded-lg py-2 px-3 focus:ring-[#FF7300]">
                <option>Koramangala</option>
                <option>HSR Layout</option>
                <option>Andheri</option>
              </select>
            </div>
          </div>

          {/* Pickup */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-[#FF7300] mb-2">Pickup</label>
            <div className="flex gap-2">
              <input type="date" className="flex-1 border rounded-lg py-2 px-3 focus:ring-[#FF7300]" />
              <input type="time" className="flex-1 border rounded-lg py-2 px-3 focus:ring-[#FF7300]" />
            </div>
          </div>

          {/* Drop */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-[#FF7300] mb-2">Drop</label>
            <div className="flex gap-2">
              <input type="date" className="flex-1 border rounded-lg py-2 px-3 focus:ring-[#FF7300]" />
              <input type="time" className="flex-1 border rounded-lg py-2 px-3 focus:ring-[#FF7300]" />
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full bg-[#FF7300] hover:bg-orange-700 text-white font-bold py-3 rounded-lg shadow transition">
            Search Adventure
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
