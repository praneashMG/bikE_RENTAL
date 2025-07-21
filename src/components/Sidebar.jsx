import {
  HomeIcon,
  KeyIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

// Custom Car Icon
const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="3" y="11" width="18" height="6" rx="2" strokeWidth="1.5" stroke="currentColor"/>
    <circle cx="7.5" cy="17.5" r="1.5" strokeWidth="1.5" stroke="currentColor"/>
    <circle cx="16.5" cy="17.5" r="1.5" strokeWidth="1.5" stroke="currentColor"/>
    <rect x="6" y="7" width="12" height="4" rx="2" strokeWidth="1.5" stroke="currentColor"/>
  </svg>
);

const menuItems = [
  { name: "Home", icon: <HomeIcon className="h-5 w-5" />, link: "/" },
  { name: "Browse Vehicles", icon: <CarIcon />, link: "/browse" },
  { name: "My Bookings", icon: <KeyIcon className="h-5 w-5" />, link: "/bookings" },
  { name: "Profile", icon: <UserCircleIcon className="h-5 w-5" />, link: "/profile" },
  { name: "Settings", icon: <Cog6ToothIcon className="h-5 w-5" />, link: "/settings" },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Backdrop/Overlay, all screens */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          transition-transform duration-200
          fixed top-16 left-0 w-60 h-[calc(100vh-4rem)] bg-white border-r shadow-lg z-40 flex flex-col
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ minHeight: 0 }}
        role="navigation"
      >
        <div className="py-6 px-6 flex items-center justify-center border-b">
          <span className="text-xl font-bold text-blue-600 tracking-tight">
            Ride<span className="text-gray-800">Xchange</span>
          </span>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 transition"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-4 mb-8">
          <a
            href="/logout"
            className="flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-red-100 transition"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            <span>Logout</span>
          </a>
        </div>
      </aside>
    </>
  );
}
