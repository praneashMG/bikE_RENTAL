
const Navbar = ({
  isLoggedIn = false,
  isAdmin = false,
  profilePhoto,
  newNotifications = 0,
  onLogoClick,
}) => {
//   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Brand/Logo clicks show sidebar */}
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={onLogoClick}
          title="Open menu"
        >
          <svg
            className="w-8 h-8 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              d="M4 17h16M5 17V9a2 2 0 012-2h10a2 2 0 012 2v8M9 21h6M7 17v4M17 17v4"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-bold tracking-tight text-blue-600">
            RideXchange
          </span>
        </div>

        {/* Desktop nav (unchanged) */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="text-gray-700 font-medium hover:text-blue-600 transition">Home</a>
          <a href="/browse" className="text-gray-700 font-medium hover:text-blue-600 transition">Browse</a>
          <a href="/list" className="text-gray-700 font-medium hover:text-blue-600 transition">List Your Vehicle</a>
          {isLoggedIn && (
            <a href="/dashboard" className="text-gray-700 font-medium hover:text-blue-600 transition">Dashboard</a>
          )}
          {isAdmin && (
            <a href="/admin" className="text-gray-700 font-medium hover:text-red-600 transition">Admin</a>
          )}
        </div>

        {/* Search Bar and Profile (unchanged) */}
        <div className="relative mx-4 hidden lg:block">
          <input
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:bg-white border focus:border-blue-400 transition-all duration-300 w-40 focus:w-64 outline-none"
            type="text"
            placeholder="Search vehicles..."
            aria-label="Search vehicles"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" strokeWidth="2" />
              <path d="M21 21l-4.35-4.35" strokeWidth="2" />
            </svg>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative focus:outline-none" aria-label="Notifications">
            {/* notification bell */}
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.5 14.5V11c0-3.042-1.635-5.623-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.135 5.377 5.5 7.958 5.5 11v3.5c0 .392-.154.768-.405 1.045L3.5 17h5m7 0v1a3 3 0 11-6 0v-1m6 0H9"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {newNotifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                {newNotifications}
              </span>
            )}
          </button>
          {isLoggedIn ? (
            <div className="relative group">
              <img
                src={profilePhoto || "/default-avatar.png"}
                className="w-9 h-9 rounded-full border-2 border-blue-400 object-cover cursor-pointer"
                alt="User profile"
              />
              {/* Profile Dropdown */}
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-xl rounded-md py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50 transition">
                <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
              </div>
            </div>
          ) : (
            <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded transition font-semibold hover:bg-blue-600">Sign In</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
