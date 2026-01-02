import { Database, Cloud, BarChart3, Settings, Boxes, Users } from 'lucide-react';

export const Software = () => {
  const software = [
    {
      icon: Database,
      title: 'ERP Systems',
      description: 'Comprehensive enterprise resource planning solutions for unified business management',
      features: ['Financial Management', 'Supply Chain', 'Human Resources', 'CRM Integration'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud-based applications for remote access and real-time collaboration',
      features: ['Data Synchronization', 'Remote Access', 'Auto Backup', 'Multi-tenant Support'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description: 'Business intelligence tools providing actionable insights from your data',
      features: ['Real-time Dashboards', 'Custom Reports', 'Predictive Analytics', 'KPI Tracking'],
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Robotic process automation to streamline repetitive tasks and improve efficiency',
      features: ['Process Automation', 'Task Scheduling', 'Integration APIs', 'Rule Engine'],
    },
    {
      icon: Boxes,
      title: 'Inventory Management',
      description: 'Advanced software for real-time inventory tracking and warehouse optimization',
      features: ['Stock Control', 'Demand Forecasting', 'Multi-location', 'Barcode/RFID Integration'],
    },
    {
      icon: Users,
      title: 'Workforce Management',
      description: 'Mobile workforce solutions for field service, attendance, and task management',
      features: ['Time Tracking', 'Task Assignment', 'GPS Tracking', 'Mobile Apps'],
    },
  ];

  const integrations = [
    'SAP', 'Oracle', 'Microsoft Dynamics', 'Odoo', 'QuickBooks',
    'Salesforce', 'Zoho', 'NetSuite', 'Sage', 'Tally ERP',
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 dark:from-blue-950 dark:via-gray-900 dark:to-black text-white py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
              <span className="text-sm font-medium">Software & ERP</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Enterprise Software Solutions</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Powerful software platforms and ERP integrations to digitize operations and drive business intelligence
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {software.map((item, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{item.description}</p>

                <ul className="space-y-2">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-blue-400 rounded-full"></div>
                      <span>{feature}</span>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">ERP Integrations</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Seamless integration with leading ERP platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {integrations.map((platform, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                <span className="font-semibold text-gray-900 dark:text-white text-center">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-900 to-blue-700 dark:from-blue-950 dark:to-gray-900 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Custom Software Development</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Need a custom solution? Our development team can build tailored software applications to meet your unique business requirements
            </p>
            <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 shadow-xl">
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
