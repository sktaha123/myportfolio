import { useEffect, useState } from 'react';

/**
 * Hook to detect if user prefers reduced motion
 * Automatically disables/reduces animations for accessibility
 */
export const useReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return prefersReducedMotion;
};

/**
 * Hook for optimized scroll position tracking
 * Uses RAF for better performance
 */
export const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
};

/**
 * Hook for intersection observer (lazy loading, animations on scroll)
 * More performant than scroll listeners
 */
export const useIntersectionObserver = (options = {}) => {
    const [ref, setRef] = useState(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
                ...options,
            }
        );

        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref, options]);

    return [setRef, isIntersecting];
};

/**
 * Hook for debouncing values (useful for search, resize)
 */
export const useDebounce = (value, delay = 300) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
};

/**
 * Hook for window size with debouncing
 * Prevents excessive re-renders on resize
 */
export const useWindowSize = () => {
    const [size, setSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        let timeoutId = null;

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }, 150);
        };

        window.addEventListener('resize', handleResize, { passive: true });
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return size;
};

/**
 * Hook for media queries
 */
export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);

        const listener = (e) => setMatches(e.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
};

export default {
    useReducedMotion,
    useScrollPosition,
    useIntersectionObserver,
    useDebounce,
    useWindowSize,
    useMediaQuery,
};
