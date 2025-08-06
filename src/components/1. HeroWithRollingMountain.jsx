import React from "react";

export default function HeroWithRollingMountain() {
  return (
    <section
      className="
        relative flex flex-col items-center justify-center min-h-[90vh]
        bg-gradient-to-tr from-gray-900 via-slate-800 to-orange-200
        px-4 sm:px-8 md:px-16
      "
    >
      {/* Inline CSS animations for mountain and bike */}
      <style>{`
        .rolling-mountain {
          animation: rolling-mountain 6s cubic-bezier(0.86, 0, 0.07, 1) infinite alternate;
          transform-origin: 50% 55%;
          will-change: transform;
        }

        @keyframes rolling-mountain {
          0% { transform: rotate(-8deg); }
          30% { transform: rotate(10deg); }
          70% { transform: rotate(-8deg); }
          100% { transform: rotate(-8deg); }
        }

        .floating-bike {
          animation: floating-bike 4s ease-in-out infinite alternate;
        }

        @keyframes floating-bike {
          0%   { transform: translate(-50%, 0); }
          50%  { transform: translate(-50%, -10px); }
          100% { transform: translate(-50%, 0); }
        }
      `}</style>

      {/* Image Container */}
      <div className="relative flex flex-col items-center select-none z-10 w-full max-w-[650px] aspect-[3/2] sm:aspect-[5/3]">
        {/* 🚲 Floating Bike */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/2006HondaCBR600RR-profile.png/1600px-2006HondaCBR600RR-profile.png"
          alt="Gravel Bike"
          className="
            floating-bike absolute top-[5%] left-1/2
            w-[140px] sm:w-[200px] md:w-[250px]
            drop-shadow-2xl z-20
          "
        />

        {/* ⛰️ Rolling Mountain */}
        <img
          src="https://www.freepnglogos.com/uploads/ufo-png/ufo-ufovisitors-ufos-1.png"
          alt="Rolling Mountain"
          className="
            rolling-mountain absolute bottom-0 left-1/2 -translate-x-1/2
            w-[300px] sm:w-[400px] md:w-[500px]
            z-10 pointer-events-none select-none
          "
        />

        {/* 🕳️ Shadow under mountain */}
        <div
          className="
            absolute bottom-[-20px] left-2/2 -translate-x-1/2
            w-[160px] sm:w-[200px] md:w-[260px] h-[28px]
            bg-black/30 rounded-full blur-3xl opacity-40 z-0
          "
        />
      </div>

      <div className="mt-16 flex flex-wrap gap-4 justify-center z-20">
        
      </div>

      {/* Tagline */}
      <p
        className="
          absolute bottom-12 right-6 max-w-md text-right
          hidden md:block text-sm sm:text-base md:text-lg
          text-white/90 drop-shadow-lg italic font-semibold
          select-none pointer-events-none
        "
      >
      </p>
    </section>
  );
}
