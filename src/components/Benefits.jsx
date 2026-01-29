import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Clock, TrendingUp, ShieldCheck } from 'lucide-react';

const benefits = [
    { icon: LayoutDashboard, title: "Automated Dashboards", desc: "Stop calculating manually. Your GPA, spending, and habits are updated instantly as you input data." },
    { icon: Clock, title: "Save 10+ Hours/Month", desc: "Focus on studying, not organizing. Our templates are plug-and-play ready out of the box." },
    { icon: TrendingUp, title: "Visualize Progress", desc: "Beautiful charts and progress bars keep you motivated throughout the semester." },
    { icon: ShieldCheck, title: "Error-Free Formulas", desc: "Tested by 1,200+ students. Never worry about broken spreadsheet formulas again." }
];

export default function Benefits() {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Why Students Trust Easy Sheets</h2>
                    <p className="text-gray-600">More than just a spreadsheet. A complete academic system.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                                <b.icon className="w-7 h-7 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{b.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
