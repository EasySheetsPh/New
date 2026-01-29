import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-teal-50 pt-24 pb-20 lg:pt-32 lg:pb-28">
            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-teal-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                        <span className="flex items-center text-teal-600 text-sm font-medium">
                            <Star className="w-4 h-4 mr-1 fill-teal-600" />
                            Trusted by 1,200+ Students
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl lg:text-7xl font-bold font-heading text-gray-900 mb-6 tracking-tight"
                >
                    Master Your Grades with <br />
                    <span className="text-teal-600">Administrative Calm</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
                >
                    Beautiful, automated Google Sheets templates designed to help you track assignments, manage your budget, and achieve academic success without the stress.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-teal-200/50 flex items-center justify-center group">
                        Explore Templates
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
                <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl opacity-60" />
            </div>
        </section>
    );
}
