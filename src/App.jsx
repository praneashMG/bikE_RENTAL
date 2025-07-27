import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import HeroSection from "./components/HeroSection";
import FeaturedVehiclesGrid from "./components/FeaturedVehiclesGrid";
import Gallery from "./components/Gallery";
import ImageUpload from "./components/ImageUpload";

// Placeholder pages
const Browse = () => <div className="mt-10 text-center">Browse All Vehicles Page</div>;
const ListVehicle = () => <div className="mt-10 text-center">List Your Vehicle Page</div>;
const Dashboard = () => <div className="mt-10 text-center">User Dashboard</div>;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handles clicking outside the sidebar to close it
  function handleMainClick() {
    if (sidebarOpen) setSidebarOpen(false);
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar and Sidebar */}
        <Navbar onLogoClick={() => setSidebarOpen((v) => !v)} />
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col" onClick={handleMainClick}>
          <main className="transition-all duration-200 mt-16">
            <Routes>
              {/* Homepage */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <FeaturedVehiclesGrid />
                    <Gallery />
                  </>
                }
              />

              {/* Other Routes */}
              <Route path="/browse" element={<Browse />} />
              <Route path="/list" element={<ListVehicle />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-bike" element={<ImageUpload />} />
            </Routes>
          </main>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
