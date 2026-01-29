import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    { q: "Do I need Excel installed?", a: "No! These templates are designed specifically for Google Sheets, which is free to use with any Google account. You don't need to buy any software." },
    { q: "Can I customize the colors?", a: "Absolutley. While the templates come with our signature aesthetic themes, every cell is editable so you can match your own style if you wish." },
    { q: "Is this a one-time payment?", a: "Yes! You pay once and get lifetime access to the template and any future updates. No monthly subscriptions." },
    { q: "How do I receive the product?", a: "Immediately after purchase, you'll receive an email with a link to copy the template directly to your Google Drive. It takes less than 30 seconds to get started." },
    { q: "Does the GPA calculator work for any grading system?", a: "The calculator is set up for standard 4.0 grading but is fully adjustable for 5.0 scales or weighted credits used in many universities." }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-teal-50" id="faq">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Got questions? We've got answers.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <FAQItem key={i} question={f.q} answer={f.a} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white rounded-xl shadow-sm border border-teal-100 overflow-hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-bold text-gray-900 text-lg">{question}</span>
                <span className={`p-1 rounded-full bg-teal-50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus className="w-5 h-5 text-teal-600" /> : <Plus className="w-5 h-5 text-teal-600" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-gray-600 pt-2 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
