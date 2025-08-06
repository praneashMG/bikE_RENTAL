import React from "react";

const WaihekeGuide = () => (
  <div className="flex flex-col md:flex-row bg-gray-100 p-4 rounded-lg gap-4">
    {/* Left image (motorbike with background) */}
    <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
      <img
        src="https://images.booqable.com/w1280/assets/019861fd-1134-4580-a86c-f9c0feda01be/clztcaue200lr3b798fi6v93gfinedining-d26335c2ded488e1759f7a6ec3c3947c1072fc07d9ce261c85e87a117fcf5ebf(2).jpg"
        alt="Motorbike on Waiheke"
        className="object-cover w-full h-full min-h-[300px] max-h-[400px]"
      />
    </div>
    {/* Right content */}
    <div className="md:w-1/2 w-full bg-white rounded-lg flex flex-col justify-center p-8">
      <div className="mb-2 text-gray-400 tracking-wide">Restaurants & Cafés</div>
      <h2 className="text-2xl font-bold mb-4">A guide to food on Waiheke</h2>
      <p className="text-gray-600 mb-4">
        Waiheke is not just a paradise for nature lovers but also a haven for food enthusiasts.
      </p>
      <p className="text-gray-600 mb-8">
        Whether you’re seeking gourmet dining with breathtaking views, local seafood delicacies, or quirky cafes with unique flavors, Waiheke Island has it all.
      </p>
      <button className="bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 px-6 rounded-full w-fit shadow">
        Read more
      </button>
    </div>
  </div>
);

export default WaihekeGuide;
