import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaCarSide,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-white border-t shadow-inner mt-12 pt-8 pb-4">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Left: Brand & Tagline */}
        <div className="flex-1 mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-1">
            <FaCarSide className="text-blue-500 text-2xl" />
            <span className="text-2xl font-bold text-blue-600">RideXchange</span>
          </div>
          <p className="text-gray-500 max-w-xs">
            Find, rent, or list vehicles with confidence. Your journey starts here!
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex-1 mb-6 md:mb-0">
          <h5 className="font-semibold text-gray-800 mb-2">Quick Links</h5>
          <ul className="space-y-1">
            <li>
              <a href="/" className="text-gray-500 hover:text-blue-600 transition">Home</a>
            </li>
            <li>
              <a href="/browse" className="text-gray-500 hover:text-blue-600 transition">Browse</a>
            </li>
            <li>
              <a href="/list" className="text-gray-500 hover:text-blue-600 transition">List Your Vehicle</a>
            </li>
            <li>
              <a href="/dashboard" className="text-gray-500 hover:text-blue-600 transition">Dashboard</a>
            </li>
          </ul>
        </div>

        {/* Right: Contact & Social */}
        <div className="flex-1">
          <h5 className="font-semibold text-gray-800 mb-2">Contact Us</h5>
          <ul className="space-y-1 text-gray-500">
            <li className="flex items-center gap-2">
              <FaEnvelope /> praneashp@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91 9715499118
            </li>
          </ul>
          <div className="flex gap-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-gray-400 hover:text-blue-600 transition text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-gray-400 hover:text-blue-500 transition text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-gray-400 hover:text-pink-500 transition text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <span>&copy; {new Date().getFullYear()} RideXchange. All rights reserved.</span>
        <span>
          Made with <span className="text-blue-600 font-bold">&hearts;</span> for travelers.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
