import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3 group">
                    <img src="/images/logo.jpg" alt="Easy Sheets" className="h-10 w-auto object-contain" />
                    <span className="text-xl font-bold font-heading text-gray-900 tracking-tight group-hover:text-teal-600 transition-colors">Easy Sheets</span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#products" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Templates</a>
                    <a href="#faq" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">FAQ</a>
                    <a href="#contact" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Contact</a>
                    <a href="#products" className="px-5 py-2.5 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">Get Started</a>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-900 z-50 relative" aria-label="Toggle Menu">
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden absolute top-full left-0 right-0 shadow-xl"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            <a href="#products" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium px-4 py-3 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors">Templates</a>
                            <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium px-4 py-3 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors">FAQ</a>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium px-4 py-3 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors">Contact</a>
                            <div className="pt-2">
                                <a href="#products" onClick={() => setIsOpen(false)} className="block text-center px-5 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-md">Get Started</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
