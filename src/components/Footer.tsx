import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/pfp.jfif"
                alt="JVG Global Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h3 className="text-white font-bold text-lg">JVG GLOBAL</h3>
                <p className="text-xs text-purple-400">Together V Succeed</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              UAE-based IT Consultancy and Solutions provider delivering advanced AIDC, POS, and digital automation technologies.
            </p>
            <p className="text-xs text-gray-500 italic">Infinite ideas @ work</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Industries</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">AIDC Solutions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">POS Systems</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">RFID Technology</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">IT Consulting</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Technical Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-purple-400 flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a href="tel:+971561929535" className="hover:text-purple-400 transition-colors">+971 56 192 9535</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a href="mailto:vinay@jvgglobal.in" className="hover:text-purple-400 transition-colors">vinay@jvgglobal.in</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2025 JVG Global. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
