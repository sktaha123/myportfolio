// Web Vitals Performance Monitoring
// This utility tracks Core Web Vitals for performance optimization

let vitalsData = {
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null
};

// Report to console in development
const reportVital = (metric) => {
    vitalsData[metric.name] = metric.value;

    if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${metric.name}:`, metric.value.toFixed(2), metric.rating);
    }

    // You can send this to analytics in production
    // Example: sendToAnalytics(metric);
};

// Cumulative Layout Shift (CLS)
const observeCLS = () => {
    let clsValue = 0;
    let clsEntries = [];

    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
                clsValue += entry.value;
                clsEntries.push(entry);
            }
        }
    });

    observer.observe({ type: 'layout-shift', buffered: true });

    // Report after page is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            reportVital({
                name: 'CLS',
                value: clsValue,
                rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
            });
            observer.disconnect();
        }
    });
};

// Largest Contentful Paint (LCP)
const observeLCP = () => {
    const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];

        reportVital({
            name: 'LCP',
            value: lastEntry.renderTime || lastEntry.loadTime,
            rating: lastEntry.renderTime < 2500 ? 'good' : lastEntry.renderTime < 4000 ? 'needs-improvement' : 'poor'
        });
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });
};

// First Input Delay (FID)
const observeFID = () => {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            reportVital({
                name: 'FID',
                value: entry.processingStart - entry.startTime,
                rating: entry.processingStart - entry.startTime < 100 ? 'good' : entry.processingStart - entry.startTime < 300 ? 'needs-improvement' : 'poor'
            });
        }
    });

    observer.observe({ type: 'first-input', buffered: true });
};

// First Contentful Paint (FCP)
const observeFCP = () => {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
                reportVital({
                    name: 'FCP',
                    value: entry.startTime,
                    rating: entry.startTime < 1800 ? 'good' : entry.startTime < 3000 ? 'needs-improvement' : 'poor'
                });
            }
        }
    });

    observer.observe({ type: 'paint', buffered: true });
};

// Time to First Byte (TTFB)
const observeTTFB = () => {
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        reportVital({
            name: 'TTFB',
            value: ttfb,
            rating: ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs-improvement' : 'poor'
        });
    }
};

// Initialize all observers
export const initPerformanceMonitoring = () => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
        return;
    }

    try {
        observeCLS();
        observeLCP();
        observeFID();
        observeFCP();
        observeTTFB();
    } catch (error) {
        console.error('Performance monitoring error:', error);
    }
};

// Get current vitals data
export const getVitalsData = () => vitalsData;

// Export for use in analytics
export default initPerformanceMonitoring;
