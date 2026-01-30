import React from "react";

const heroStats = [
  { title: "Projects Built", value: "8+" },
  { title: "Technologies Learned", value: "6+" },
  { title: "Hands-On Practice", value: "12+" },
  { title: "UI Designs", value: "15+" },
  { title: "Problems Solved", value: "100+" },
];

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-bg-main flex items-start lg:items-center">
      <div className="max-w-[90rem] mx-auto w-full px-6">

        {/* ================= MOBILE : FOUNDER CARD ================= */}
        <div className="lg:hidden flex flex-col items-center text-center gap-6 pt-6">

          {/* Text */}
          <div className="flex flex-col gap-2">
            <h2 className="text-text-body text-lg font-medium">
              Hey! I am{" "}
              <span className="text-text-strong font-semibold">Taha</span>
            </h2>

            <h1 className="text-text-heading text-3xl font-rale font-semibold leading-tight">
              Full-Stack Developer <br /><span className="text-accent-primary">UI/UX</span>{" "}
              Designer
            </h1>
          </div>

          {/* Image Card */}
          <div className="w-[15rem] h-[19rem] rounded-xl overflow-hidden shadow-xl bg-bg-muted">
            <img
              src="/images/taha.png"
              alt="Taha"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Compact Stats */}
          <div className="flex gap-6 mt-2">
            <div>
              <p className="text-accent-primary text-xl font-semibold">8+</p>
              <p className="text-xs text-accent-secondary">Projects</p>
            </div>
            <div>
              <p className="text-accent-primary text-xl font-semibold">12+</p>
              <p className="text-xs text-accent-secondary">Months</p>
            </div>
            <div>
              <p className="text-accent-primary text-xl font-semibold">100+</p>
              <p className="text-xs text-accent-secondary">Problems</p>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP / LAPTOP ================= */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-12">

          {/* LEFT TEXT */}
          <div className="flex justify-start">
            <div className="max-w-xl flex flex-col gap-4">

              <h2 className="text-text-body text-3xl font-taha font-medium">
                Hey! I am{" "}
                <span className="text-text-strong font-semibold">Taha</span>
              </h2>

              <h1 className="text-text-heading text-6xl font-rale font-semibold leading-tight">
                Full-Stack Developer <br />
                <span className="text-accent-primary">UI/UX</span>
                <span className="text-text-muted"> Designer</span>
              </h1>

              <p className="text-text-body font-para text-lg leading-relaxed">
                Building complete web experiences—from <br />
                concept and design to deployment.
              </p>

            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <div className="w-[26rem] h-[90vh] bg-bg-muted rounded-b-full shadow-2xl overflow-hidden">
              <img
                src="/images/taha.png"
                alt="Taha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="flex justify-end">
            <div className="flex flex-col gap-6 text-right">
              {heroStats.map((item, index) => (
                <div key={index}>
                  <p className="text-accent-primary text-3xl font-rale font-semibold">
                    {item.value}
                  </p>
                  <p className="text-accent-secondary font-para">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;