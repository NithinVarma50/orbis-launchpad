const PARA = "A digital object fixed beyond time and place. An exploration of distance, form, and silence in space";

const About = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
      />

      <div className="relative z-10 max-w-[1831px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 lg:py-24 min-h-screen flex flex-col justify-between">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="relative">
            <h2 className="font-grotesk uppercase text-cream text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1]">
              Hello!
              <br />
              I'm orbis
            </h2>
            <span
              className="font-condiment text-neon absolute right-0 -bottom-2 sm:-bottom-3 text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] -rotate-2"
              style={{ mixBlendMode: "exclusion" }}
            >
              Orbis
            </span>
          </div>

          <p className="font-mono uppercase text-cream text-[14px] sm:text-[16px] max-w-[266px] leading-snug">
            {PARA}
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between gap-10 mt-20">
          <div className="flex flex-col gap-6 max-w-[266px]">
            <p className="font-mono uppercase text-cream text-[14px] sm:text-[16px] opacity-70 leading-snug">{PARA}</p>
            <p className="font-mono uppercase text-cream text-[14px] sm:text-[16px] opacity-70 leading-snug">{PARA}</p>
          </div>
          <div className="hidden lg:flex flex-col gap-6 max-w-[266px]">
            <p className="font-mono uppercase text-cream text-[14px] sm:text-[16px] opacity-70 leading-snug">{PARA}</p>
            <p className="font-mono uppercase text-cream text-[14px] sm:text-[16px] opacity-70 leading-snug">{PARA}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
