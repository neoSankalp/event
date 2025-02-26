import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - About */}
          <div>
            <h2 className="text-xl font-semibold mb-3">About Us</h2>
            <p className="text-gray-400 text-sm">
              Bringing spiritual wisdom and inner peace through meditation,
              chanting, and community events.
            </p>
          </div>

          {/* Center Section - Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 text-xl"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 text-xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Knowledge360. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
