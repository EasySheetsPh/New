import React from 'react';
import ProductCard from './ProductCard';

export default function ProductShowcase() {
    const products = [
        {
            title: "Blossom Pink Tracker",
            price: "₱117",
            description: "The ultimate aesthetic grade tracker. Monitor your GPA, assignments, and exams with calm, pink perfection.",
            features: ["Automatic GPA Calculator", "Assignment Tracker", "Exam Schedule", "Pink Aesthetic Dashboard"],
            link: "https://payhip.com/b/ewvNE",
            color: "bg-pink-100",
            badge: "Best Seller",
            image: "/images/blossom-pink-1.jpg",
            imageAlt: "Blossom Pink student grade tracker Google Sheets template showing GPA calculator, assignment tracker, and study planner",
            images: [
                "/images/blossom-pink-1.jpg",
                "/images/blossom-pink-2.jpg",
                "/images/blossom-pink-3.jpg",
                "/images/blossom-pink-4.jpg",
                "/images/blossom-pink-5.jpg"
            ],
            video: "/images/blossom-pink-demo.mp4"
        },
        {
            title: "Forest Green Tracker",
            price: "₱117",
            description: "Stay grounded and focused with this calming, nature-inspired academic planner for serious students.",
            features: ["Multi-semester GPA Support", "Budget Planner Integration", "Habit Tracker", "Forest Aesthetic"],
            link: "https://payhip.com/b/Fjfx3",
            color: "bg-emerald-800",
            image: "/images/forest-green-1.jpg",
            imageAlt: "Forest Green academic tracker Google Sheets template with grade management and attendance monitor",
            images: [
                "/images/forest-green-1.jpg",
                "/images/forest-green-2.jpg",
                "/images/forest-green-3.jpg",
                "/images/forest-green-4.jpg",
                "/images/forest-green-5.jpg"
            ],
            video: "/images/forest-green-demo.mp4"
        },
        {
            title: "Budget Tracker",
            price: "Free",
            description: "Start managing your student finances today. Simple, effective, and free forever.",
            features: ["Monthly Expense Tracking", "Income Overview", "Savings Goals", "Completely Free"],
            link: "#",
            color: "bg-blue-400",
            isFree: true,
            image: "/images/budget-tracker.jpg",
            imageAlt: "Free student budget tracker Google Sheets template for expense tracking and savings goals",
            images: ["/images/budget-tracker.jpg"]
        }
    ];

    const handleCta = (e, product) => {
        // GA: Begin Checkout Event
        if (window.gtag) {
            window.gtag('event', 'begin_checkout', {
                item_name: product.title,
                value: product.isFree ? 0 : 117,
                currency: 'PHP'
            });
            console.log('Checkout started:', product.title);

            // GA: Outbound Link Click (for Payhip)
            if (!product.isFree && product.link.includes('payhip.com')) {
                window.gtag('event', 'click', {
                    link_domain: 'payhip.com',
                    link_url: product.link,
                    outbound: true
                });
            }
        }

        if (product.isFree) {
            e.preventDefault();
            const modal = document.getElementById('free-tracker-modal');
            if (modal) modal.showModal();
        }
    };

    return (
        <section id="products" className="py-24 bg-white relative z-10">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Choose Your Path to Academic Success</h2>
                    <p className="text-xl text-gray-600">Premium templates backed by our 30-day money-back guarantee.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mx-auto max-w-6xl">
                    {products.map((p, i) => (
                        <ProductCard
                            key={i}
                            {...p}
                            onCtaClick={(e) => handleCta(e, p)}
                        />
                    ))}
                </div>
            </div>

            {/* Native Dialog for Email Capture */}
            <dialog id="free-tracker-modal" className="p-0 rounded-2xl shadow-2xl backdrop:bg-black/50 open:animate-fade-in text-left m-auto">
                <div className="p-8 max-w-md bg-white w-[90vw] md:w-full">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold font-heading text-gray-900">Get Your Free Tracker</h3>
                        <form method="dialog">
                            <button className="text-gray-400 hover:text-gray-600 p-2 text-xl">✕</button>
                        </form>
                    </div>
                    <p className="text-gray-600 mb-6">Join 1,200+ students using Easy Sheets. Enter your email to receive the free budget tracker instant download link.</p>

                    <form name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="product" value="free-budget-tracker" />

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" name="name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="student@university.edu" />
                            </div>
                            <button type="submit" className="w-full py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-teal-500/30">
                                Send Me The Tracker
                            </button>
                            <p className="text-xs text-gray-400 text-center mt-2">We respect your inbox. Unsubscribe anytime.</p>
                        </div>
                    </form>
                </div>
            </dialog>
        </section>
    );
}
