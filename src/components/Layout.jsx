import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Lenis from 'lenis';
import Navbar from "./Navbar";
import Footer from "./Footer";
import 'lenis/dist/lenis.css'

const Layout = () => {
  const location = useLocation();
  const lenisRef = useRef(null);

  // SMOOTH SCROLL IMPLEMENTATION
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    window.history.scrollRestoration = 'manual';
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="relative z-10 bg-primary-bg text-primary-text min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;