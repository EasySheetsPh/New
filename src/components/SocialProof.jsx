import React from 'react';
import CountUp from 'react-countup';

export default function SocialProof() {
    return (
        <section className="bg-white border-y border-gray-100 py-6 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/90">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 overflow-x-auto">
                <div className="flex items-center space-x-4 flex-shrink-0">
                    <div className="flex -space-x-3 overflow-hidden">
                        {[10, 12, 32, 45].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                {/* Use styled placeholder if image fails loading or for privacy */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100" />
                                {/* Avatar Image (placeholder) */}
                                <img src={`https://i.pravatar.cc/100?img=${i}`} alt="Student" className="w-full h-full object-cover mix-blend-multiply" loading="lazy" />
                            </div>
                        ))}
                    </div>
                    <div className="text-sm font-sans">
                        <p className="font-bold text-gray-900 flex items-center">
                            <span className="text-teal-600 mr-1">●</span>
                            <CountUp end={1243} duration={3} separator="," />+ Students
                        </p>
                        <p className="text-gray-500 text-xs">transforming their grades</p>
                    </div>
                </div>

                <div className="flex items-center gap-8 opacity-40 hover:opacity-80 transition-opacity duration-300 md:ml-auto overflow-hidden min-w-[200px]">
                    {/* University Names (Text based for speed/cleanness) */}
                    <span className="font-heading font-bold text-lg">Harvard</span>
                    <span className="font-heading font-bold text-lg">Stanford</span>
                    <span className="font-heading font-bold text-lg">UCLA</span>
                    <span className="font-heading font-bold text-lg">Yale</span>
                    <span className="font-heading font-bold text-lg hidden lg:block">Princeton</span>
                </div>
            </div>
        </section>
    );
}
