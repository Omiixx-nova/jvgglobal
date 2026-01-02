import { ShoppingBag, Truck, Factory, Heart, Hotel, Shield } from 'lucide-react';

export const Industries = () => {
  const industries = [
    {
      icon: ShoppingBag,
      title: 'Retail & E-commerce',
      description: 'Modern POS systems, inventory management, and omnichannel solutions for retail operations',
      challenges: ['Inventory accuracy', 'Customer experience', 'Omnichannel integration', 'Loss prevention'],
      solutions: ['Mobile POS', 'RFID tagging', 'Self-checkout', 'Analytics dashboards'],
    },
    {
      icon: Truck,
      title: 'Logistics & Warehousing',
      description: 'Complete warehouse automation with RFID, barcode scanning, and mobile computing',
      challenges: ['Order accuracy', 'Inventory visibility', 'Labor efficiency', 'Space optimization'],
      solutions: ['WMS integration', 'Voice picking', 'Automated sorting', 'Real-time tracking'],
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Track production, manage assets, and ensure quality with automated data capture',
      challenges: ['Production tracking', 'Quality control', 'Asset management', 'Compliance'],
      solutions: ['MES integration', 'Work-in-progress tracking', 'Quality inspection', 'Maintenance scheduling'],
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Patient safety, asset tracking, and medication management solutions for healthcare facilities',
      challenges: ['Patient identification', 'Asset tracking', 'Medication errors', 'Compliance'],
      solutions: ['Patient wristbands', 'Asset tags', 'Medication verification', 'Mobile carts'],
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'POS, guest management, and mobile service solutions for hotels and restaurants',
      challenges: ['Guest experience', 'Order accuracy', 'Staff efficiency', 'Payment processing'],
      solutions: ['Mobile POS', 'Kitchen display', 'Self-service kiosks', 'Contactless payments'],
    },
    {
      icon: Shield,
      title: 'Government & Defense',
      description: 'Rugged solutions for field operations, asset tracking, and secure communications',
      challenges: ['Durability', 'Security', 'Real-time data', 'Field connectivity'],
      solutions: ['Rugged devices', 'Encrypted communications', 'GPS tracking', 'Mobile forms'],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 dark:from-blue-950 dark:via-gray-900 dark:to-black text-white py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
              <span className="text-sm font-medium">Industries Served</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industry Expertise</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Specialized solutions tailored to the unique challenges and requirements of your industry
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{industry.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                    <h3 className="font-bold text-red-900 dark:text-red-300 mb-4 text-lg">Key Challenges</h3>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="flex items-start space-x-2 text-sm text-red-800 dark:text-red-200">
                          <div className="w-1.5 h-1.5 bg-red-600 dark:bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-green-900 dark:text-green-300 mb-4 text-lg">Our Solutions</h3>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, sIdx) => (
                        <li key={sIdx} className="flex items-start space-x-2 text-sm text-green-800 dark:text-green-200">
                          <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Industry-Specific Consultation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Our industry experts understand the unique challenges you face. Schedule a consultation to discover
              how we can help you achieve your operational goals.
            </p>
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
