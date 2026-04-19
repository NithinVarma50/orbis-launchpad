import { Mail, Globe, Github } from "lucide-react";

const SOCIALS = [
  { Icon: Mail, label: "Email", href: "mailto:varmanithin029@gmail.com" },
  { Icon: Globe, label: "Portfolio", href: "https://pixelprophett-portfolio.vercel.app" },
  { Icon: Github, label: "Github", href: "https://github.com/NithinVarma50" },
];

const CTA = () => {
  return (
    <section className="relative w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
      />

      {/* Heading block right-aligned */}
      <div className="absolute inset-0 flex items-center justify-end lg:pr-[20%] lg:pl-[15%] px-6 sm:px-10">
        <div className="relative text-right">
          <span
            className="font-condiment text-neon absolute -top-4 sm:-top-6 md:-top-10 lg:-top-14 left-0 text-[17px] sm:text-[28px] md:text-[44px] lg:text-[68px] -rotate-2"
            style={{ mixBlendMode: "exclusion" }}
          >
            find your signal
          </span>
          <h2 className="font-grotesk uppercase text-cream text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px] leading-[1.05]">
            <span className="block mb-4 sm:mb-6 md:mb-10 lg:mb-12">DRIFT WITH US.</span>
            TIME HAS NO WALLS HERE.
            <br />
            MARK THE VOID.
            <br />
            TRANSMIT WHAT'S LEFT.
          </h2>
        </div>
      </div>

      {/* Bottom-left socials */}
      <div className="absolute left-[8%] bottom-[12%] sm:bottom-[14%] md:bottom-[16%] lg:bottom-[20%]">
        <div className="liquid-glass rounded-[0.5rem] sm:rounded-[0.75rem] md:rounded-[1rem] lg:rounded-[1.25rem] flex flex-col">
          {SOCIALS.map(({ Icon, label, href }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className={`flex items-center justify-center w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[14vw] sm:h-[6rem] md:h-[5rem] lg:h-[7rem] hover:bg-white/10 transition-colors ${
                i < SOCIALS.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-cream" />
            </a>
          ))}
        </div>
      </div>

      {/* Signature bottom-right */}
      <div className="absolute right-[6%] bottom-[6%]">
        <span
          className="font-condiment text-neon text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] -rotate-2 inline-block"
          style={{ mixBlendMode: "exclusion" }}
        >
          by Nithinvarma
        </span>
      </div>
    </section>
  );
};

export default CTA;
