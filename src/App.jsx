import BioCard from "./components/BioCard";
import Footer from "./components/Footer";
import GalleryCarousel from "./components/GalleryCarousel";
import Hero from "./components/Hero";
import PickupLine from "./components/PickupLine";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a1a47] via-[#3e2b58] to-[#4b1e6c] text-white">
      <Hero />
      <main className="max-w-3xl mx-auto p-4 space-y-8">
        <BioCard />
        <GalleryCarousel />
        <PickupLine />
      </main>
      <Footer />
    </div>
  );
}

export default App;
