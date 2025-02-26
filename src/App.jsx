import ContactSection from "../src/pages/contact-section";
import EventShowcase from "../src/pages/event-showcase";
import Hero from "../src/pages/hero";
import TeamSection from "../src/pages/team-section";
import Footer from "./pages/footer";
import Navbar from "./pages/navbar";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <EventShowcase />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
