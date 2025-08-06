import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout & UI components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// Page & Feature components
import VehicleDetails from "./components/VehicleDetails";
import HeroSection from "./components/HeroSection";
import FeaturedVehiclesGrid from "./components/FeaturedVehiclesGrid";
// import Gallery from "./components/Gallery";
import AddBikeForm from "./components/AddBikeForm";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import HeroWithRollingMountain from "./components/1. HeroWithRollingMountain";
import WaihekeGuide from "./components/WaihekeGuide";
// import ScooterGallery3D from "./components/ScooterGallery3D";
import PopScooterGallery from "./components/PopScooterGallery";

// Placeholder simple pages
function Browse() {
  return <div className="mt-10 text-center">Browse All Vehicles Page</div>;
}
function ListVehicle() {
  return <div className="mt-10 text-center">List Your Vehicle Page</div>;
}
function Dashboard() {
  return <div className="mt-10 text-center">User Dashboard</div>;
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Close sidebar on main click
  function handleMainClick() {
    if (sidebarOpen) setSidebarOpen(false);
  }

  // User login and logout handlers
  const onLoginSuccess = (userData) => setUser(userData);
  const onLogout = () => {
    setUser(null);
    // Optionally: localStorage.removeItem("accessToken");
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar at the top */}
        <Navbar
          onLogoClick={() => setSidebarOpen((v) => !v)}
          isLoggedIn={!!user}
          profilePhoto={user?.profilePhoto}
          onLogout={onLogout}
        />

        {/* Slide-in sidebar */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content */}
        <div className="flex-1 flex flex-col" onClick={handleMainClick}>
          <main className="transition-all duration-200 mt-16">
            <Routes>
              {/* Homepage with hero, featured, and hero 3D */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <FeaturedVehiclesGrid />
                    {/* <HeroWithRollingMountain /> */}
                    <WaihekeGuide/>
                    <PopScooterGallery/>
                    {/* <Gallery /> */}
                  </>
                }
              />
              {/* Public simpls */}
              <Route path="/browse" element={<Browse />} />
              <Route path="/list" element={<ListVehicle />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Vehicle Detail Page */}
              <Route path="/vehicles/:id" element={<VehicleDetails />} />

              {/* Login & Signup—redirect to homepage if already logged in */}
              <Route
                path="/login"
                element={
                  !user
                    ? <Login onLoginSuccess={onLoginSuccess} />
                    : <Navigate to="/" replace />
                }
              />
              <Route
                path="/signup"
                element={
                  !user
                    ? <SignUp onLoginSuccess={onLoginSuccess} />
                    : <Navigate to="/" replace />
                }
              />

              {/* Protected route: Add Bike */}
              <Route
                path="/add-bike"
                element={
                  user
                    ? <AddBikeForm onAdded={() => window.location.href = "/"} />
                    : <Navigate to="/login" replace />
                }
              />

              {/* 404 and fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
