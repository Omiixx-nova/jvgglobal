import { Smartphone, Tablet, Printer, Radio, CreditCard, Scan, Box, Laptop } from 'lucide-react';

interface ProductsProps {
  onNavigate: (page: string) => void;
}

export const Products = ({ onNavigate }: ProductsProps) => {
  const productCategories = [
    {
      icon: Smartphone,
      title: 'Rugged Mobile Computers',
      description: 'Industrial-grade handheld devices built for harsh environments with advanced data capture capabilities',
      products: ['Zebra MC3300', 'Honeywell CT40', 'Datalogic Memor 10', 'Chainway C66'],
    },
    {
      icon: Tablet,
      title: 'Rugged Tablets & PDAs',
      description: 'Durable tablets and portable data assistants for field operations and mobile workforces',
      products: ['Zebra ET50/ET56', 'Samsung Galaxy Tab Active', 'Getac F110', 'Panasonic Toughpad'],
    },
    {
      icon: Scan,
      title: 'Barcode Scanners',
      description: '1D/2D barcode scanners with wireless and wired connectivity for inventory and asset tracking',
      products: ['Honeywell Voyager', 'Zebra DS2208', 'Datalogic Gryphon', 'Motorola LI4278'],
    },
    {
      icon: Printer,
      title: 'Barcode Printers',
      description: 'Industrial and desktop thermal printers for labels, receipts, and asset tags',
      products: ['Zebra ZT411/ZD620', 'TSC TTP-244 Pro', 'Honeywell PM45', 'Sato CL4NX'],
    },
    {
      icon: Radio,
      title: 'RFID Systems',
      description: 'Radio-frequency identification readers, tags, and complete tracking solutions',
      products: ['Zebra FX9600', 'Impinj R700', 'Alien ALR-F800', 'RFID Tags & Labels'],
    },
    {
      icon: CreditCard,
      title: 'POS Terminals',
      description: 'Complete point-of-sale systems with touch screens, printers, and payment integration',
      products: ['Sunmi T2 Mini', 'Ingenico Move 5000', 'PAX A920', 'Verifone V400m'],
    },
    {
      icon: Box,
      title: 'ID Card Systems',
      description: 'Professional card printers and access control solutions for secure identification',
      products: ['Zebra ZC100/ZC300', 'Fargo DTC1250e', 'Evolis Primacy', 'HID FARGO'],
    },
    {
      icon: Laptop,
      title: 'Rugged Laptops',
      description: 'Military-grade laptops designed for extreme conditions and mobile computing',
      products: ['Getac B360', 'Panasonic Toughbook', 'Dell Latitude Rugged', 'HP EliteBook Rugged'],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 dark:from-blue-950 dark:via-gray-900 dark:to-black text-white py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
              <span className="text-sm font-medium">Product Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Enterprise-Grade Hardware</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Discover our comprehensive range of rugged devices, scanners, printers, and RFID solutions
              designed for demanding business environments
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {productCategories.map((category, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase">Featured Products:</p>
                  <ul className="space-y-2">
                    {category.products.map((product, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-blue-400 rounded-full"></div>
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Need Help Choosing the Right Product?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our experts are ready to help you select the perfect hardware solution for your specific business needs.
                Get personalized recommendations and competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Sales Team
                </button>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
                >
                  View Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-400">Products Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-400">Leading Brands</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-400">Deployments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
