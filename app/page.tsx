import AboutArchitect from "./components/AboutArchitect";
import AmaltasTower from "./components/AmaltasTower";
import ConnectWithUs from "./components/ConnectWithUs";
import ConstructionUpdates from "./components/ConstructionUpdates";
import Hero from "./components/Hero";
import MasterfullyPlanned from "./components/MasterfullyPlanned";
import NavBar from "./components/NavBar";
import RareLiving from "./components/RareLiving";
import SustainablyDesigned from "./components/SustainablyDesigned";
import WhatTheySayAboutUs from "./components/WhatTheySayAboutUs";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <RareLiving />
      <AmaltasTower />
      <WhatTheySayAboutUs />
      <MasterfullyPlanned />
      <AboutArchitect />
      <ConstructionUpdates />
      <SustainablyDesigned />
      <ConnectWithUs />
    </div>
  );
}
