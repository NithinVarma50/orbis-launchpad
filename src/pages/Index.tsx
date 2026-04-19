import Hero from "@/components/Hero";
import About from "@/components/About";
import Collection from "@/components/Collection";
import CTA from "@/components/CTA";
import TextureOverlay from "@/components/TextureOverlay";

const Index = () => {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: "#010828" }}>
      <Hero />
      <About />
      <Collection />
      <CTA />
      <TextureOverlay />
    </main>
  );
};

export default Index;
