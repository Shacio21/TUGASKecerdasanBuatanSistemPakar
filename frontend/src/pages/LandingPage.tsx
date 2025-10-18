import Navbar from "../components/Navbar/index";
import Hero from "../components/Hero/index";
import FiturSistemPakar from "../components/FiturSistemPakar";
import MesinSection from "../components/MesinSection";

function landingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FiturSistemPakar />
      <MesinSection />
    </>
  );
}

export default landingPage;
