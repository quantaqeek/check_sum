'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BiEnvelope, BiCheckCircle, BiError } from 'react-icons/bi';

type SubscribeStatus = 'idle' | 'loading' | 'success' | 'error';

export default function SubscribeToOurNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubscribeStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      setErrorMessage('Please enter your email');
      setStatus('error');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setErrorMessage('Please enter a valid email address');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    }, 1500);
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 py-20 px-4 md:px-24 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: '#98FB98' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" style={{ backgroundColor: '#2E8B57' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #00FF7F, #2E8B57)' }} />
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#2E8B57' }}>
                  Stay Updated
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Subscribe to Our{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #00FF7F, #2E8B57)' }}>
                  Newsletter
                </span>
              </h2>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Get the latest articles, insights, and industry trends delivered straight to your inbox. Join thousands of readers who stay informed with our curated content.
            </p>

            {/* Benefits */}
            <motion.div className="flex flex-col gap-3 mt-4">
              {['Weekly curated articles', 'Exclusive insights & tips', 'No spam, ever'].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to right, #00FF7F, #2E8B57)' }}>
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-8 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700"
            >
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">50K+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Subscribers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">4.8★</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Avg Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form & Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Illustration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(to br, #00FF7F, #2E8B57)' }}
            >
              {/* Abstract Design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Paper Planes */}
                  <motion.div
                    animate={{ x: [0, 20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-8 left-8 text-5xl"
                  >
                    ✈️
                  </motion.div>

                  {/* Envelope */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative w-24 h-16 bg-white rounded-lg shadow-lg transform -rotate-6">
                      <div className="absolute inset-0 border-2 rounded-lg" style={{ borderColor: '#98FB98' }} />
                      <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-lg" style={{ background: 'linear-gradient(to b, #00FF7F, transparent)' }} />
                    </div>
                  </motion.div>

                  {/* Sparkles */}
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-12 right-12 text-2xl"
                  >
                    ✨
                  </motion.div>

                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-16 right-8 text-2xl"
                  >
                    ⭐
                  </motion.div>

                  {/* Dots */}
                  <div className="absolute bottom-8 left-8 w-3 h-3 rounded-full bg-white opacity-60" />
                  <div className="absolute bottom-20 right-12 w-2 h-2 rounded-full bg-white opacity-40" />
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500">
                  <BiEnvelope size={20} />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus('idle');
                  }}
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none transition-colors"
                  style={{
                    borderColor: '#cbd5e1',
                    borderWidth: '2px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2E8B57'}
                  onBlur={(e) => e.target.style.borderColor = ''}
                />
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                disabled={status === 'loading' || status === 'success'}
                type="submit"
                className={`py-3 md:py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-90`}
                style={{
                  background: status === 'success'
                    ? 'linear-gradient(to right, #2E8B57, #006400)'
                    : status === 'error'
                    ? '#ef4444'
                    : 'linear-gradient(to right, #00FF7F, #2E8B57)',
                  boxShadow: status !== 'loading' && status !== 'success' ? '0 10px 25px rgba(46, 139, 87, 0.3)' : 'none'
                }}
              >
                {status === 'loading' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ⏳
                  </motion.div>
                )}
                {status === 'success' && <BiCheckCircle size={20} />}
                {status === 'error' && <BiError size={20} />}
                <span>
                  {status === 'loading'
                    ? 'Subscribing...'
                    : status === 'success'
                    ? 'Subscribed!'
                    : status === 'error'
                    ? 'Try again'
                    : 'Subscribe Now'}
                </span>
              </motion.button>

              {/* Error Message */}
              {status === 'error' && errorMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 dark:text-red-400 text-sm flex items-center gap-2"
                >
                  <BiError size={16} />
                  {errorMessage}
                </motion.p>
              )}

              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}