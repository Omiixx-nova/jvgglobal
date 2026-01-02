import { ArrowRight, Zap, Shield, TrendingUp, Users, CheckCircle, Cpu, Smartphone, Printer, Radio, Package, Headphones } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home = ({ onNavigate }: HomeProps) => {
  const features = [
    {
      icon: Cpu,
      title: 'AIDC Solutions',
      description: 'Advanced automatic identification and data capture technologies for seamless operations',
    },
    {
      icon: Smartphone,
      title: 'Enterprise Mobility',
      description: 'Rugged mobile computers, tablets, and handheld PDAs for demanding environments',
    },
    {
      icon: Printer,
      title: 'Barcode & Printing',
      description: 'Professional barcode scanners and printers for efficient labeling and tracking',
    },
    {
      icon: Radio,
      title: 'RFID Technology',
      description: 'Radio-frequency identification systems for real-time asset tracking and management',
    },
    {
      icon: Package,
      title: 'POS Systems',
      description: 'Complete point-of-sale solutions with terminals, peripherals, and software integration',
    },
    {
      icon: Headphones,
      title: 'IT Consulting & Support',
      description: 'Expert deployment, AMC, and technical support services for optimal performance',
    },
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Optimize Performance', text: 'Enhance operational efficiency' },
    { icon: Shield, title: 'Reduce Risk', text: 'Minimize errors and downtime' },
    { icon: Zap, title: 'Accelerate Implementation', text: 'Fast deployment and integration' },
    { icon: Users, title: 'Expert Support', text: 'Dedicated technical assistance' },
  ];

  const industries = [
    'Retail & E-commerce',
    'Logistics & Warehousing',
    'Manufacturing',
    'Healthcare',
    'Hospitality',
    'Government & Defense',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 dark:from-blue-950 dark:via-gray-900 dark:to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeIn">
              <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30">
                <span className="text-sm font-medium">Together V Succeed</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Smart Technology
                </span>
              </h1>

              <p className="text-xl text-purple-100 leading-relaxed max-w-2xl">
                UAE-based IT Consultancy delivering cutting-edge AIDC, POS, enterprise mobility, and digital automation solutions
                to optimize performance and drive business efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="group px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Get in Touch
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                {benefits.slice(0, 3).map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative animate-fadeIn animation-delay-300">
              <div className="relative w-full h-96">
                <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-2xl opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500 rounded-2xl opacity-20 blur-3xl animate-pulse animation-delay-500"></div>
                <div className="relative grid grid-cols-2 gap-4 p-8">
                  {features.slice(0, 4).map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <feature.icon className="w-8 h-8 mb-3 text-purple-300" />
                      <h3 className="font-semibold text-sm">{feature.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From rugged hardware to enterprise software, we deliver end-to-end technology solutions
              tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose JVG Global?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                We believe that great technology begins with great people. Our team works closely with clients to
                understand their vision and deliver solutions that drive real business value.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{industry}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('industries')}
                className="mt-6 w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>View All Industries</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 dark:bg-black text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative solutions can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Request a Quote
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Browse Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
