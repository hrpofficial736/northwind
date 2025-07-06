import AboutArchitect from "./components/AboutArchitect";
import AmaltasTower from "./components/AmaltasTower";
import ConstructionUpdates from "./components/ConstructionUpdates";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import RareLiving from "./components/RareLiving";
import SustainablyDesigned from "./components/SustainablyDesigned";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <RareLiving />
      <AmaltasTower />
      <Testimonial />
      <AboutArchitect />
      <ConstructionUpdates />
      <SustainablyDesigned />
    </div>
  );
}
