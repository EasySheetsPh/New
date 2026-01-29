import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold font-heading text-white mb-4">Easy Sheets</div>
                        <p className="max-w-xs text-gray-400 mb-6">Empowering students with beautiful, automated tools for academic and financial success.</p>
                        <div className="flex space-x-6">
                            <a href="https://www.facebook.com/profile.php?id=61582341212031" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-teal-400 transition-colors"
                                onClick={() => window.gtag && window.gtag('event', 'social_click', { platform: 'facebook' })}
                            ><Twitter className="w-5 h-5" /></a>
                            <a href="https://www.instagram.com/easysheetsonig/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-teal-400 transition-colors"
                                onClick={() => window.gtag && window.gtag('event', 'social_click', { platform: 'instagram' })}
                            ><Instagram className="w-5 h-5" /></a>
                            <a href="https://ph.pinterest.com/EasySheets_/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:text-teal-400 transition-colors"
                                onClick={() => window.gtag && window.gtag('event', 'social_click', { platform: 'pinterest' })}
                            ><Linkedin className="w-5 h-5" /></a>
                            <a href="mailto:easysheets.contacts@gmail.com" aria-label="Email" className="hover:text-teal-400 transition-colors"
                                onClick={() => window.gtag && window.gtag('event', 'contact', { method: 'email' })}
                            ><Mail className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#products" className="hover:text-teal-400 transition-colors">Blossom Pink</a></li>
                            <li><a href="#products" className="hover:text-teal-400 transition-colors">Forest Green</a></li>
                            <li><a href="#products" className="hover:text-teal-400 transition-colors">Budget Tracker</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Support</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#faq" className="hover:text-teal-400 transition-colors">FAQ</a></li>
                            <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">License</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pt-8 border-t border-gray-800">
                    <p>&copy; {new Date().getFullYear()} Easy Sheets. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
