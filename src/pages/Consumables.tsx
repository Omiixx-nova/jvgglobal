import { Printer, Tag, Ticket, Box } from 'lucide-react';

export const Consumables = () => {
  const categories = [
    {
      icon: Tag,
      title: 'Labels & Tags',
      items: [
        'Thermal transfer labels',
        'Direct thermal labels',
        'RFID labels & tags',
        'Pre-printed labels',
        'Color labels',
        'Durable labels',
        'Asset tags',
        'Jewelry tags',
      ],
    },
    {
      icon: Printer,
      title: 'Ribbons',
      items: [
        'Wax ribbons',
        'Wax-resin ribbons',
        'Resin ribbons',
        'Color ribbons',
        'Zebra ribbons',
        'TSC ribbons',
        'Sato ribbons',
        'Generic ribbons',
      ],
    },
    {
      icon: Ticket,
      title: 'Receipt Paper',
      items: [
        'Thermal receipt rolls',
        'Bond paper rolls',
        '80mm receipt paper',
        '57mm receipt paper',
        'Kitchen printer paper',
        'ATM paper rolls',
        'Credit card rolls',
        'Custom printed rolls',
      ],
    },
    {
      icon: Box,
      title: 'Card Supplies',
      items: [
        'PVC cards',
        'Smart cards',
        'RFID cards',
        'Magnetic stripe cards',
        'Card printer ribbons',
        'Cleaning kits',
        'Lanyards',
        'Card holders',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 dark:from-blue-950 dark:via-gray-900 dark:to-black text-white py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
              <span className="text-sm font-medium">Consumables</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Printer Consumables & Supplies</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              High-quality labels, ribbons, paper rolls, and card supplies for all major printer brands
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
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Bulk Orders & Custom Solutions
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Need consumables in bulk or custom specifications? We offer competitive pricing on volume orders
                  and can provide custom labels, tags, and cards printed to your exact requirements.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Competitive bulk pricing</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Custom printing available</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Fast delivery across UAE</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Quality guarantee</span>
                  </li>
                </ul>
                <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors shadow-lg">
                  Request Quote
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Compatible Brands</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Zebra', 'TSC', 'Honeywell', 'Datalogic', 'Sato', 'Citizen', 'Godex', 'Brady'].map((brand, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center font-semibold text-gray-900 dark:text-white hover:shadow-lg transition-shadow"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
