export const metadata = {
  title: "Home - Creative",
  description: "Page description",
};
import Hero from "@/components/hero1";
import About from "@/components/about";
import Features from "@/components/features";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Footer />
    </>
  );
}
