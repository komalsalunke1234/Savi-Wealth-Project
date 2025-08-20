import React from 'react';
import { motion } from 'framer-motion';
import { CalculatorIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import SIPCalculator from '../components/tools/SIPCalculator';

const Tools: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Financial <span className="text-primary-600 dark:text-primary-400">Tools</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Plan your financial future with our interactive calculators and planning tools designed to help you make informed investment decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Investment Calculators
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Use our professional-grade calculators to plan your investments and understand potential returns.
            </p>
          </motion.div>

          {/* SIP Calculator */}
          <div className="mb-16">
            <SIPCalculator />
          </div>

          {/* Coming Soon Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Tax Calculator',
                description: 'Calculate your tax liability and plan tax-saving investments effectively.',
                icon: <CurrencyDollarIcon className="h-8 w-8" />,
                comingSoon: true
              },
              {
                title: 'Retirement Planner',
                description: 'Plan your retirement corpus and understand how much you need to save.',
                icon: <ChartBarIcon className="h-8 w-8" />,
                comingSoon: true
              },
              {
                title: 'Goal Planner',
                description: 'Set financial goals and create investment strategies to achieve them.',
                icon: <CalculatorIcon className="h-8 w-8" />,
                comingSoon: true
              }
            ].map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center relative overflow-hidden"
              >
                {tool.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mx-auto mb-6 opacity-50">
                  <div className="text-white">
                    {tool.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {tool.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {tool.description}
                </p>
                
                <button
                  disabled
                  className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 font-semibold rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Need Personalized Advice?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              While our calculators provide estimates, our certified financial advisors can create a personalized investment strategy for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200">
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tools;