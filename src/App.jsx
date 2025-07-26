import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturedVehiclesGrid from "./components/FeaturedVehiclesGrid";
// import UserReviews from "./components/UserReviews";
const Browse = () => <div className="mt-10">Browse All Vehicles Page</div>;
const ListVehicle = () => <div className="mt-10">List Your Vehicle Page</div>;
const Dashboard = () => <div className="mt-10">User Dashboard</div>;
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  function handleMainClick() {
    if (sidebarOpen) setSidebarOpen(false);
  }
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar onLogoClick={() => setSidebarOpen((v) => !v)} />
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 flex flex-col">
          <main className="transition-all duration-200 mt-16 p-0" onClick={handleMainClick}>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/list" element={<ListVehicle />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Add more routes as you build more pages */}
            </Routes>
          </main>
        </div>
        <FeaturedVehiclesGrid/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
