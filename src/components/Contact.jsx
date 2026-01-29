import React from 'react';

export default function Contact() {
    return (
        <section className="py-24 bg-white border-t border-gray-100" id="contact">
            <div className="container mx-auto px-4 max-w-xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-gray-600">Have a specific question about the trackers? Send us a message.</p>
                </div>

                <form name="contact-page" method="POST" data-netlify="true" className="space-y-6">
                    <input type="hidden" name="form-name" value="contact-page" />

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-colors" placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-colors" placeholder="student@university.edu" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" name="message" rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-colors" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}
