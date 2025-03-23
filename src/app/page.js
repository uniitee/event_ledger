import { Events } from "@/components/events/events";
import Footer from "@/components/hero/footer";
import { Hero } from "@/components/hero/hero";
import Navbar from "@/components/hero/navbar";

export default function Home() {
  return (
    <div className=" bg-black">
      {/* <GridBackgroundDemo /> */}
      <Navbar />
      <Hero />
      <Events />
      <Footer />
    </div>
  );
}
