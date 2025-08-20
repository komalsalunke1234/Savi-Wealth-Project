import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CalculatorIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const SIPCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const results = useMemo(() => {
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = timePeriod * 12;
    const totalInvestment = monthlyInvestment * totalMonths;
    
    const futureValue = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const wealthGained = futureValue - totalInvestment;

    return {
      totalInvestment,
      futureValue,
      wealthGained
    };
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center mb-6">
        <CalculatorIcon className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
          SIP Calculator
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Monthly Investment (₹)
            </label>
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>₹500</span>
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                ₹{monthlyInvestment.toLocaleString()}
              </span>
              <span>₹1,00,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Expected Annual Return (%)
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="0.5"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>1%</span>
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {expectedReturn}%
              </span>
              <span>30%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time Period (Years)
            </label>
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>1 Year</span>
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {timePeriod} Years
              </span>
              <span>40 Years</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <ArrowTrendingUpIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Investment Results
            </h4>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Total Investment:</span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                ₹{results.totalInvestment.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Wealth Gained:</span>
              <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                ₹{results.wealthGained.toLocaleString()}
              </span>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Future Value:</span>
                <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                  ₹{results.futureValue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Start SIP Investment
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SIPCalculator;