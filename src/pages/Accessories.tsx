import { Cable, BatteryCharging, Shield, HardDrive } from 'lucide-react';

export const Accessories = () => {
  const categories = [
    {
      icon: BatteryCharging,
      title: 'Power & Charging',
      items: [
        'Replacement batteries',
        'Charging cradles',
        'Multi-bay chargers',
        'Vehicle chargers',
        'Power adapters',
        'Battery eliminators',
        'Charging stations',
        'USB charging cables',
      ],
    },
    {
      icon: Shield,
      title: 'Protection & Cases',
      items: [
        'Protective cases',
        'Screen protectors',
        'Holsters & carry cases',
        'Bumper guards',
        'Hand straps',
        'Stylus pens',
        'Cleaning kits',
        'Mounting brackets',
      ],
    },
    {
      icon: Cable,
      title: 'Cables & Connectivity',
      items: [
        'USB cables',
        'Serial cables',
        'Ethernet cables',
        'Audio adapters',
        'Communication cables',
        'Docking stations',
        'Extension cables',
        'Wireless modules',
      ],
    },
    {
      icon: HardDrive,
      title: 'Storage & Memory',
      items: [
        'SD cards',
        'Memory expansion',
        'External storage',
        'Flash drives',
        'Backup solutions',
        'Data transfer cables',
        'Card readers',
        'Storage cases',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 dark:from-blue-950 dark:via-gray-900 dark:to-black text-white py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
              <span className="text-sm font-medium">Accessories</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Device Accessories & Parts</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Complete range of accessories for mobile computers, scanners, printers, and POS terminals
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>

                <ul className="grid grid-cols-2 gap-3">
                  {category.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Can't Find What You Need?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              We stock a wide range of accessories for all major brands. Contact us with your device model
              and requirements, and we'll help you find the right accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors shadow-lg">
                Contact Us
              </button>
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors">
                View Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
