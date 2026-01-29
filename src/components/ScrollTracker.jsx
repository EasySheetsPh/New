import { useEffect } from 'react';

export default function ScrollTracker() {
    useEffect(() => {
        if (!window.gtag) return;

        const trackedPercentages = [25, 50, 75, 90];
        const fired = new Set();

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            trackedPercentages.forEach(percent => {
                if (scrollPercent >= percent && !fired.has(percent)) {
                    fired.add(percent);
                    window.gtag('event', 'scroll', {
                        percent_scrolled: percent
                    });
                    // console.log(`Scrolled ${percent}%`);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null;
}
