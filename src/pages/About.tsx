import { Target, Users, Award, TrendingUp, CheckCircle, Heart } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Users,
      title: 'People First',
      description: 'Great technology begins with great people. We prioritize understanding our clients and their unique needs.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to continuous improvement and delivering the highest quality solutions.',
    },
    {
      icon: Heart,
      title: 'Ethical Practices',
      description: 'We operate with integrity, transparency, and a commitment to doing what\'s right for our clients.',
    },
    {
      icon: TrendingUp,
      title: 'Customer Satisfaction',
      description: 'Long-term customer satisfaction is at the heart of everything we do.',
    },
  ];

  const capabilities = [
    'Rugged Handheld Devices & PDAs',
    'Mobile Computers & Tablets',
    'POS Systems & Terminals',
    'Barcode Scanners & Printers',
    'RFID Systems & Solutions',
    'ID Card Systems & Solutions',
    'Enterprise Mobility Solutions',
    'Digital Automation Technologies',
    'IT Consulting Services',
    'Deployment & Integration',
    'Annual Maintenance Contracts',
    'Technical Support Services',
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 dark:from-blue-950 dark:via-gray-900 dark:to-black text-white py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
              <span className="text-sm font-medium">About JVG Global</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Together V Succeed</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Empowering businesses across the UAE with innovative IT solutions and digital transformation expertise
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-purple-600 dark:text-purple-400">JVG Global</strong> is a UAE-based IT Consultancy and Solutions provider
                  delivering advanced AIDC, POS, enterprise mobility, scanning, barcoding, RFID, and digital automation technologies
                  designed to optimize operational performance and business efficiency.
                </p>
                <p>
                  With expertise in rugged handheld devices, PDAs, tablets, mobile computers, POS systems, ID card solutions,
                  barcode printers, RFID systems, consumables, and accessories, we help organizations enhance productivity,
                  reduce costs, minimize risks, and accelerate implementation.
                </p>
                <p>
                  Guided by the belief that <strong>great technology begins with great people</strong>, we work closely with clients
                  to understand their vision and deliver solutions tailored to their needs while committing to continuous improvement,
                  ethical practices, and long-term customer satisfaction.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                To deliver cutting-edge technology solutions that empower organizations to achieve operational excellence,
                drive business growth, and succeed in an increasingly digital world.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Innovative Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Client-Centric Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Continuous Improvement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Ethical Business Practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions across the full spectrum of enterprise technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 dark:bg-black text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Infinite Ideas @ Work</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              At JVG Global, we don't just implement technology—we partner with you to create innovative solutions
              that transform your business operations and drive lasting success.
            </p>
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
