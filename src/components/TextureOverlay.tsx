const TextureOverlay = () => (
  <div
    aria-hidden
    className="pointer-events-none fixed inset-0 z-50"
    style={{
      backgroundImage: "url('/texture.png')",
      backgroundSize: "cover",
      mixBlendMode: "overlay",
      opacity: 0.15,
    }}
  />
);

export default TextureOverlay;
