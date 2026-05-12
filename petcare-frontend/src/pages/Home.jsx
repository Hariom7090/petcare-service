import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Grooming from "../components/Grooming";
import Veterinary from "../components/Veterinary";
import Tips from "../components/Tips";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Grooming />
      <Veterinary />
      <Tips />
      <Appointment />
      <Footer />
    </>
  );
}

export default Home;
