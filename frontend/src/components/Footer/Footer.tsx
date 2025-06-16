
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Desktop: 5 columns, Tablet: 2-3 columns, Mobile: Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Company</h2>
            <div className="mb-4">
              <Link to="/" className="inline-block">
                <span className="text-white font-bold text-2xl">LOGO</span>
              </Link>
            </div>
            <p className="text-sm mb-4">
              Discover premium-quality fashion that complements your style and
              gives you the confidence to wear it proudly — for both men and
              women.
            </p>
            <div className="flex space-x-3">
              <Link to="#" className="hover:text-white transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Account</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Login/Register
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li>123 Business Avenue</li>
              <li>Suite 500</li>
              <li>San Francisco, CA 94107</li>
              <li className="pt-2">
                <Link
                  to="tel:+11234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (123) 456-7890
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:info@company.com"
                  className="hover:text-white transition-colors"
                >
                  info@company.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Newsletter</h2>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 rounded-r-none bg-gray-800 border-gray-700 focus:ring-gray-600 text-white"
                />
                <button
                  type="submit"
                  className="rounded-l-none p-3 bg-zinc-900 hover:bg-zinc-800 "
                >
                  <ArrowRight size={16} />
                </button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-fourth mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex space-x-1">
              {/* Payment method logos */}
              <div className="">
                <img src="/paypal.png" alt="" />
              </div>
              <div className="">
                <img src="/gpay.png" alt="" />
              </div>
              <div className="">
                <img src="/applepay.png" alt="" />
              </div>
              <div className="">
                <img src="/visa.png" alt="" />
              </div>
              <div className="">
                <img src="/rupay.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
