"use client";

import { useEffect, useRef } from "react";
import AboutArchitect from "./components/AboutArchitect";
import ConnectWithUs from "./components/ConnectWithUs";
import ConstructionUpdates from "./components/ConstructionUpdates";
import Hero from "./components/Hero";
import MasterfullyPlanned from "./components/MasterfullyPlanned";
import NavBar from "./components/NavBar";
import SustainablyDesigned from "./components/SustainablyDesigned";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import Disclaimer from "./components/Disclaimer";
import { useDisclaimerStore } from "@/stores/useDisclaimerStore";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { show } = useDisclaimerStore();

  useEffect(() => {
    window.scrollBy({
      top: 500
    })
  }, [])
  return (
    <div ref={ref} className={`w-screen h-screen overflow-x-hidden relative ${show && "overflow-hidden"}`}>
      <NavBar />
      <Hero />
     
      <ImageGallery />
      <MasterfullyPlanned />
      <Disclaimer />
      <ConstructionUpdates />
      <SustainablyDesigned />
      <ConnectWithUs />
      <AboutArchitect />
      <Footer />
    </div>
  );
}
