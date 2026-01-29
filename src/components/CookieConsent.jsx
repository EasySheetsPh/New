import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div id="cookie-banner" className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center sm:text-left">
                This website uses cookies to improve your experience and analyze traffic. By using this site, you agree to our use of cookies.
            </p>
            <div className="flex gap-4">
                <a href="/privacy-policy.html" className="text-gray-400 hover:text-white text-sm underline transition-colors">
                    Learn More
                </a>
                <button
                    onClick={handleAccept}
                    className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold px-6 py-2 rounded-lg transition-colors"
                >
                    Accept
                </button>
            </div>
        </div>
    );
}
