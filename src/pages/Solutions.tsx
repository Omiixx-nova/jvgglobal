import { Warehouse, ShoppingCart, Factory, Building2, TrendingUp, CheckCircle } from 'lucide-react';

export const Solutions = () => {
  const solutions = [
    {
      icon: Warehouse,
      title: 'Warehouse Management',
      description: 'Streamline inventory tracking, picking, packing, and shipping operations with RFID and barcode solutions',
      benefits: ['Real-time inventory visibility', 'Reduced picking errors', 'Faster order fulfillment', 'Optimized space utilization'],
    },
    {
      icon: ShoppingCart,
      title: 'Retail Solutions',
      description: 'Modern POS systems, mobile checkout, inventory management, and customer engagement tools',
      benefits: ['Faster checkout experience', 'Omnichannel integration', 'Inventory accuracy', 'Customer analytics'],
    },
    {
      icon: Factory,
      title: 'Manufacturing Automation',
      description: 'Track work-in-progress, manage assets, and optimize production with automated data capture',
      benefits: ['Production visibility', 'Quality control', 'Asset tracking', 'Compliance documentation'],
    },
    {
      icon: Building2,
      title: 'Asset Management',
      description: 'Complete visibility and control over fixed assets, IT equipment, and valuable resources',
      benefits: ['Asset lifecycle tracking', 'Maintenance scheduling', 'Audit compliance', 'Loss prevention'],
    },
    {
      icon: TrendingUp,
      title: 'Supply Chain Optimization',
      description: 'End-to-end visibility across your supply chain with real-time tracking and analytics',
      benefits: ['Route optimization', 'Delivery tracking', 'Performance metrics', 'Cost reduction'],
    },
    {
      icon: CheckCircle,
      title: 'Quality Control',
      description: 'Ensure product quality with mobile inspection tools and automated verification systems',
      benefits: ['Inspection workflows', 'Defect tracking', 'Compliance reporting', 'Data-driven insights'],
    },
  ];

  const implementation = [
    { step: '01', title: 'Discovery & Analysis', description: 'Understanding your business needs and challenges' },
    { step: '02', title: 'Solution Design', description: 'Creating a customized implementation plan' },
    { step: '03', title: 'Deployment', description: 'Professional installation and configuration' },
    { step: '04', title: 'Training', description: 'Comprehensive user and administrator training' },
    { step: '05', title: 'Support', description: 'Ongoing maintenance and technical assistance' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 dark:from-blue-950 dark:via-gray-900 dark:to-black text-white py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
              <span className="text-sm font-medium">Complete Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">End-to-End Business Solutions</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Tailored technology solutions designed to optimize operations, reduce costs, and accelerate growth
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Proven solutions addressing the unique challenges of your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{solution.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{solution.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase mb-3">Key Benefits:</p>
                  {solution.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A proven methodology ensuring successful deployment and adoption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {implementation.map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl font-bold text-purple-600/20 dark:text-purple-400/20 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{phase.description}</p>
                </div>
                {idx < implementation.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-purple-600 dark:bg-blue-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-900 to-blue-700 dark:from-blue-950 dark:to-gray-900 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our solutions can address your specific business challenges and drive measurable results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
