const NFTS = [
  {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    name: "BEFORE LAUNCH",
    score: "8.7/10",
  },
  {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    name: "SIGNAL LOST",
    score: "9/10",
  },
  {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    name: "YEAR UNKNOWN",
    score: "8.2/10",
  },
];

const Collection = () => {
  return (
    <section className="w-full" style={{ backgroundColor: "#010828" }}>
      <div className="max-w-[1831px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
          <h2 className="font-grotesk uppercase text-cream text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1]">
            Collection of
            <br />
            <span className="ml-12 lg:ml-24 xl:ml-32 inline-block">
              <span className="font-condiment text-neon normal-case mr-3" style={{ mixBlendMode: "exclusion" }}>
                Frozen
              </span>
              moments
            </span>
          </h2>

          <button className="group flex flex-col items-end">
            <div className="flex items-end gap-3">
              <span className="font-grotesk uppercase text-cream text-[32px] sm:text-[44px] lg:text-[60px] leading-none">SEE</span>
              <span className="font-grotesk uppercase text-cream text-[20px] sm:text-[28px] lg:text-[36px] leading-[1] flex flex-col">
                ALL
                <span>FRAGMENTS</span>
              </span>
            </div>
            <div className="bg-neon h-[6px] lg:h-[10px] w-full mt-3" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NFTS.map((nft, i) => (
            <article
              key={i}
              className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors"
            >
              <div className="relative w-full rounded-[24px] overflow-hidden" style={{ paddingBottom: "100%" }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  src={nft.src}
                />

                {/* Top name label */}
                <div className="absolute left-3 right-3 top-3 liquid-glass rounded-[16px] px-4 py-2">
                  <span className="font-grotesk uppercase text-cream text-[14px] tracking-wider">{nft.name}</span>
                </div>

                {/* Overlay bar */}
                <div className="absolute left-3 right-3 bottom-3 liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono uppercase text-cream/70 text-[11px] tracking-wider">
                      Epoch:
                    </span>
                    <span className="font-grotesk text-cream text-[16px]">{nft.score}</span>
                  </div>
                  <button
                    aria-label="View NFT"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform flex items-center justify-center"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
