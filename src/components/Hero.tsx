import SocialIcons from "./SocialIcons";
import LazyVideo from "./LazyVideo";

const NAV = ["Home", "Archive", "Mint", "Transmission", "Signal"];

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden rounded-b-[32px]" aria-label="Hero">
      <LazyVideo
        eager
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
      />

      <div className="relative z-10 max-w-[1831px] mx-auto px-6 sm:px-10 lg:px-16 h-full flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between pt-8">
          <a href="#" className="font-grotesk text-cream text-[16px] uppercase tracking-wider flex items-center gap-2">
            <span aria-hidden>🌐</span> VOIDMARK
          </a>

          <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
            <ul className="flex items-center gap-10">
              {NAV.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-grotesk text-cream text-[13px] uppercase tracking-wider hover:text-neon transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-[120px] hidden lg:block" />
        </header>

        {/* Hero content */}
        <div className="flex-1 flex flex-col justify-end pb-16 lg:pb-24">
          <div className="relative max-w-[780px] lg:ml-0 lg:mr-auto">
            <h1 className="font-grotesk uppercase text-cream text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] sm:leading-[1]">
              Drifting between
              <br />
              what ( was ) and what remains
            </h1>

            <span
              className="font-condiment text-neon absolute right-0 -top-4 sm:top-2 md:top-4 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] -rotate-1 opacity-90"
              style={{ mixBlendMode: "exclusion" }}
            >
              lost in time
            </span>
          </div>

          {/* Mobile social */}
          <div className="lg:hidden mt-10 flex justify-center">
            <SocialIcons orientation="horizontal" />
          </div>
        </div>
      </div>

      {/* Desktop social */}
      <div className="hidden lg:flex absolute top-28 right-16 z-20">
        <SocialIcons orientation="vertical" />
      </div>
    </section>
  );
};

export default Hero;
