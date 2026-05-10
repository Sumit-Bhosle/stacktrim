import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
    </div>
  );
}