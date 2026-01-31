
import { Instagram, Github, Linkedin, Twitter } from 'lucide-react';
import React, { useState, useRef } from 'react';



const Hero = () => {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <section className="relative  w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute  inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#d1dce0]  to-[#d1dce0]"></div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 py-12 md:py-0">
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CONTENT: Name & Socials */}
          <div className="order-2 md:-mt-25   md:order-1 md:col-span-4 flex flex-col justify-center space-y-8 text-center md:text-left">
            <div>
              <h1 className="mb-4">
                <span className="font-bit font-semibold text-xl bg-gradient-to-r from-black/95 to-black/50 bg-clip-text text-transparent tracking-tight">
                  Hello !
                </span>
                <br />
                <span className="font-mono font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tighter text-text-strong leading-none">
                  I am <br />Taha Sk
                </span>
              </h1>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xs uppercase bg-gradient-to-r from-black to-black/40 bg-clip-text text-transparent tracking-[0.2em]">
                Find Me Online
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-text-body">
                <a href="#" className="hover:text-accent-primary transition-colors group">
                  <Instagram size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="hover:text-accent-primary transition-colors group">
                  <Github size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="hover:text-accent-secondary transition-colors group">
                  <Linkedin size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="hover:text-accent-secondary transition-colors group">
                  <Twitter size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* CENTER CONTENT: The Image */}
          <div className="md:-mt-25 order-1 md:order-2 md:col-span-4 flex justify-center">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-[70vh] max-h-[600px] overflow-hidden rounded-full md:rounded-t-full shadow-2xl"
      >
        {/* The original image */}
        <img
          src="/images/taha.png"
          alt="Taha"
          className="w-full h-full object-cover"
        />

        {/* The Inversion Layer: Added without changing parent styles */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: isHovering ? 1 : 0,
            transition: 'opacity 0.2s ease',
            backgroundImage: 'url(/images/taha.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'invert(1)',
            WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`,
            maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`,
          }}
        />
      </div>
    </div>

          {/* RIGHT CONTENT: Bio & CTA */}
          <div className="md:-mt-25 order-3 md:order-3 md:col-span-4 flex flex-col justify-center space-y-6 text-center md:text-right">
            <h2 className="text-2xl md:text-3xl font-rale font-bold text-text-strong">
              Full Stack Developer <br className="hidden md:block" /> & UI/UX Designer
            </h2>
            <p className="font-para2 text-base md:text-lg leading-relaxed text-text-body">
              I build modern, user-focused web applications that combine clean design 
              with reliable functionality. From crafting intuitive interfaces to 
              developing scalable backend solutions.
            </p>
            <div>
              <button className="font-rale font-semibold text-white bg-black px-8 py-3 rounded-xl cursor-pointer 
                               transition-all duration-150 hover:bg-gray-400 hover:shadow-xl shadow-lg 
                               hover:scale-105 hover:text-black">
                Explore Projects
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;