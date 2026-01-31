import React from "react";
import Navbar from "./Navbar";
import { Instagram, Github, Linkedin, Twitter } from 'lucide-react';


const heroStats = [
  { title: "Projects Built", value: "8+" },
  { title: "Technologies Learned", value: "6+" },
  { title: "Hands-On Practice", value: "12+" },
  { title: "UI Designs", value: "15+" },
  { title: "Problems Solved", value: "100+" },
];

const Hero = () => {
  return (
    <section className="w-full bg-[#] min-h-scree1/10bg-transparent-300 ">
      <div className="absolute inset-0 z-0 pointer-events-none
                bg-gradient-to-r
                from-[#d1dce0] 
                via-transparent
                to-[#d1dce0]">
      </div>
      
      <div className="max-w-[90rem] xl:max-w-[100rem] bg-transparent-400  relative z-10 flex justify-center h-screen mx-auto">

        <div className="md:h-[90%] md:w-[39%]   bg-transparent-100 absolute top-1/10 -translate-y-1/10 left-0">
          <div className="w-[85%] h-[85%] absolute top-1/10 left-1/2 -translate-x-1/2 -translate-y-1/10 bg-transparent-200">
            <div className="absolute flex flex-col  justify-center inset-0 bg-transparent-500 space-y-6 p-8">
              <h1 className="mb-10 ">
                <span className="font-bit font-semibold text-xl  bg-gradient-to-r
             from-black/95
             via-blac/40
             to-black/50
             bg-clip-text
             text-transparent tracking-tight">
                  Hello !
                </span>
                <br />
                <span className="font-mono font-bold text-7xl md:text-8xl tracking-tighter text-text-strong">
                  I am <br />Taha Sk
                </span>
              </h1>

              <div className="space-y-4">
                <h2 className="font-mono text-xs uppercase
                 bg-gradient-to-r
             from-black
             to-black/40
             bg-clip-text
             text-transparent tracking-[0.2em] ">
                  Find Me Online
                </h2>

                <div className="flex flex-wrap gap-6 text-text-body">

                  <a href="#" className="flex items-center gap-2 hover:text-accent-primary transition-colors group">
                    <Instagram size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />

                  </a>

                  <a href="#" className="flex items-center gap-2 hover:text-accent-primary transition-colors group">
                    <Github size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />

                  </a>

                  <a href="#" className="flex items-center gap-2 hover:text-accent-secondary transition-colors group">
                    <Linkedin size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />

                  </a>

                  <a href="#" className="flex items-center gap-2 hover:text-accent-secondary transition-colors group">
                    <Twitter size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />

                  </a>

                </div>
              </div>
            </div>


          </div>
        </div>


        <div className="md:h-[85%] md:w-[30%]  mx-auto bg-transparent-100  absolute top-1/110 -translate-y-1/110 md:rounded-full shadow-2xl shadow-deep overflow-hidden  z-10">
          <img
            src="/images/taha.png"
            alt="Hero"
            className="w-full h-full  object-cover md:rounded-t-full"
          />
        
        </div>

        <div className="md:h-[90%] md:w-[39%]  bg-transparent-100 absolute top-1/10 -translate-y-1/10 right-0">
          <div className="w-[85%] h-[85%] absolute top-1/10 left-1/2 -translate-x-1/2 -translate-y-1/10 bg-transparent-200">
            <div className="absolute flex flex-col text-right  justify-center inset-0 bg-transparent-500 space-y-6 p-8">
              <h1 className="text-right text-2xl md:text-3xl font-rale font-bold text-text-strong mt-10">Full Stack Developer <br />& UI/UX Designer</h1>
              <p className="font-para2 text-lg">I build modern, user-focused web applications that combine clean design with reliable functionality. From crafting intuitive interfaces to developing scalable backend solutions, I focus on creating seamless digital experiences that solve real problems and perform efficiently across devices.</p>
              <div>
                <button className="font-rale font-semibold
                 text-white md:text-md
                 bg-black px-4 py-2 rounded-xl cursor-pointer 
                 transition-all duration-150
                  hover:bg-gray-400 hover:shadow-xl shadow-lg hover:scale-102
                   hover:text-black ">Explore Work</button>
              </div>


            </div>
          </div>
        </div>




      </div>
    </section>
  );
};

export default Hero;



// <div className="flex justify-end">
//             <div className="flex flex-col gap-6 text-right">
//               {heroStats.map((item, index) => (
//                 <div key={index}>
//                   <p className="text-accent-primary text-3xl font-semibold">
//                     {item.value}
//                   </p>
//                   <p className="text-accent-secondary">
//                     {item.title}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>