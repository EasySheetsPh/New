import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ExitPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasShown) {
                // Check localStorage
                if (!localStorage.getItem('easy-sheets-exit-popup')) {
                    setIsVisible(true);
                    setHasShown(true);
                    localStorage.setItem('easy-sheets-exit-popup', 'true');
                }
            }
        };

        const timer = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave);
        }, 5000);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasShown]);

    const close = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-blue-500" />
                        <button onClick={close} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors bg-gray-100 rounded-full p-1"><X className="w-5 h-5" /></button>

                        <div className="text-center mt-2">
                            <span className="text-4xl mb-2 block">🎁</span>
                            <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900">Wait! Before you go...</h3>
                            <p className="text-gray-600 mb-6">Join 1,200+ students and get our <strong>Budget Tracker for FREE</strong> (usually $5).</p>

                            <form name="exit-popup" method="POST" data-netlify="true">
                                <input type="hidden" name="form-name" value="exit-popup" />
                                <div className="space-y-3">
                                    <input type="email" name="email" required placeholder="Enter your student email" className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all" />
                                    <button type="submit" className="w-full py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
                                        Send Me The Free Tracker
                                    </button>
                                </div>
                            </form>
                            <button onClick={close} className="text-xs text-gray-400 mt-4 hover:text-gray-600 transition-colors">No thanks, I have enough spreadsheets</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
