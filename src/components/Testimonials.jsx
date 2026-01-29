import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    { name: "Sarah J.", uni: "Stanford University", text: "The Blossom Pink tracker literally saved my GPA. I actually look forward to planning my week now. It's so calming to use.", img: "https://i.pravatar.cc/100?img=5" },
    { name: "Michael C.", uni: "UCLA", text: "Best investment I've made for college. The formulas are broken-proof and the design is so clean compared to everything else.", img: "https://i.pravatar.cc/100?img=11" },
    { name: "Jessica L.", uni: "NYU", text: "I tried making my own sheets, but this is on another level. The visualization charts are a game changer for my budget.", img: "https://i.pravatar.cc/100?img=9" },
    { name: "David K.", uni: "Oxford", text: "Simple, effective, and beautiful. Forest Green theme helps me focus during late study sessions.", img: "https://i.pravatar.cc/100?img=3" }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-teal-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-teal-400 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-4">Real Students, Real Results</h2>
                </div>

                <div className="max-w-4xl mx-auto relative px-8 md:px-16">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="text-center"
                        >
                            <Quote className="w-12 h-12 text-teal-400 mx-auto mb-6 opacity-50" />
                            <p className="text-xl md:text-3xl font-heading leading-relaxed mb-8 italic">"{testimonials[index].text}"</p>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full border-2 border-teal-400 mb-3 overflow-hidden">
                                    <img src={testimonials[index].img} alt={`Student testimonial - ${testimonials[index].name} using Easy Sheets academic tracker`} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="font-bold text-lg">{testimonials[index].name}</h4>
                                <p className="text-teal-200 text-sm">{testimonials[index].uni}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm z-20">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm z-20">
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="flex justify-center mt-10 gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-teal-400 w-8' : 'bg-white/30 w-2'}`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
