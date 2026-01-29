import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Play, Video, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ProductCard({ title, price, description, features, link, color, badge, image, imageAlt, images = [], video, onCtaClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const displayImages = images.length > 0 ? images : [image];

    // Auto-cycle images on hover if no video
    // useEffect(() => {
    //    let interval;
    //    if (isHovered && images.length > 1 && !video) {
    //        interval = setInterval(() => {
    //             setCurrentImageIndex(prev => (prev + 1) % images.length);
    //        }, 1500);
    //    } else {
    //        setCurrentImageIndex(0);
    //    }
    //    return () => clearInterval(interval);
    // }, [isHovered, images, video]);

    const openModal = () => {
        if (video || images.length > 0) {
            setShowModal(true);
        }
    };

    return (
        <>
            <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full relative"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {badge && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full z-20 uppercase tracking-wide">
                        {badge}
                    </div>
                )}

                <div
                    className="h-72 relative overflow-hidden bg-gray-50 cursor-pointer group"
                    onClick={() => {
                        openModal();
                        if (window.gtag) {
                            window.gtag('event', 'select_item', {
                                item_name: title,
                                item_category: 'Academic Tracker',
                                item_price: price === 'Free' ? 0 : 117,
                                currency: 'PHP'
                            });
                            console.log('Product clicked:', title);
                        }
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="absolute inset-0 p-6 flex items-center justify-center">
                        <img
                            src={displayImages[currentImageIndex] || image || "/images/pink.png"}
                            alt={imageAlt || `${title} - Google Sheets Student Template`}
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                    {/* Carousel Controls (Only if > 1 image) */}
                    {displayImages.length > 1 && (
                        <>
                            {/* Prev Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(prev => (prev - 1 + displayImages.length) % displayImages.length);
                                }}
                                className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm transition-all z-20 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 md:opacity-0 opacity-100'}`}
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(prev => (prev + 1) % displayImages.length);
                                }}
                                className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm transition-all z-20 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 md:opacity-0 opacity-100'}`}
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                                {displayImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImageIndex(i);
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all shadow-sm ${i === currentImageIndex ? 'bg-teal-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                                        aria-label={`Go to image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {/* Play Icon (Only if video exists and NOT interacting with carousel) */}
                    {video && (
                        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg">
                                <Play className="w-6 h-6 text-teal-600 fill-teal-600" />
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">{title}</h3>
                    <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-gray-900">{price}</span>
                        {price !== 'Free' && <span className="text-gray-500 ml-2 text-sm font-normal">one-time</span>}
                    </div>

                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{description}</p>

                    <ul className="space-y-3 mb-8 flex-1">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                                <Check className="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <a
                        href={link}
                        onClick={onCtaClick}
                        target={link.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl group"
                    >
                        <span className="group-hover:scale-105 inline-block transition-transform">
                            {price === 'Free' ? 'Get for Free' : 'Buy Now'}
                        </span>
                    </a>

                    <p className={`text-center text-xs text-gray-500 mt-3 flex items-center justify-center ${price === 'Free' ? 'invisible' : ''}`}>
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                        30-Day Money Back Guarantee
                    </p>
                </div>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setShowModal(false)}
                    >
                        <div
                            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-white/70 hover:text-white z-10 bg-black/50 p-2 rounded-full"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {video ? (
                                <div className="aspect-video bg-black">
                                    <video
                                        src={video}
                                        controls
                                        autoPlay
                                        className="w-full h-full"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ) : (
                                <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                                    <img
                                        src={displayImages[currentImageIndex]}
                                        alt={title}
                                        className="max-h-full max-w-full object-contain"
                                    />

                                    {displayImages.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(prev => (prev - 1 + displayImages.length) % displayImages.length);
                                                }}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-black/50 rounded-full"
                                            >
                                                <ChevronLeft className="w-6 h-6" />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(prev => (prev + 1) % displayImages.length);
                                                }}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-black/50 rounded-full"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </button>

                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                                {displayImages.map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? 'bg-white' : 'bg-white/30'}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}