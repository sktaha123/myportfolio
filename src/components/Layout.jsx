import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Lenis from 'lenis';
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";
import Footer from "./Footer";
import Cursor from "./Cursor";
import PageTransition from "./PageTransition";
import 'lenis/dist/lenis.css';

const Layout = () => {
  const location = useLocation();
  const lenisRef = useRef(null);

  // SMOOTH SCROLL IMPLEMENTATION
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.15,
      wheelMultiplier: 1,
      gestureOrientation: 'vertical',
      normalizeWheel: true,
      smoothWheel: true,
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
  }, [location.pathname]);

  return (
    <div className="bg-primary-bg min-h-screen selection:bg-primary-text selection:text-primary-bg">
      <Cursor />
      <Navbar />

      <main className="relative z-10 min-h-screen overflow-x-clip">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <BottomNav />
      <Footer />
    </div>
  );
};

export default Layout;