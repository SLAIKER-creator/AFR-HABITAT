import Header2 from "@/components/Header2";
import Hero2 from "@/components/Hero2";
import Services2 from "@/components/Services2";
import About2 from "@/components/About";
import Zone2 from "@/components/Zone2";
import Map2 from "@/components/Map2";
import Contact2 from "@/components/Contact2";
import Footer2 from "@/components/Footer2";
import Reviews2 from "@/components/Reviews2";
import Reveal2 from "@/components/Reveal2";
import Reveal from "@/components/Reveal2";

export default function Home() {
  return (
    <main>
      <Header2 />
      <Reveal>
        <Hero2 />
      </Reveal>
      <Reveal>
        <Services2 />
      </Reveal>
      <Reveal>
        <About2 />
      </Reveal>
      <Reveal>
        <Zone2 />
      </Reveal>
      <Reveal>
        <Reviews2 />
      </Reveal>
      <Reveal>
        <Map2 />
      </Reveal>
      <Reveal>
        <Contact2 />
      </Reveal>
      <Reveal>
        <Footer2 />
      </Reveal>
    </main>
  );
}
