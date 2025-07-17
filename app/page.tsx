"use client";

import { useEffect, useRef } from "react";
import AboutArchitect from "./components/AboutArchitect";
import AmaltasTower from "./components/AmaltasTower";
import ConnectWithUs from "./components/ConnectWithUs";
import ConstructionUpdates from "./components/ConstructionUpdates";
import Hero from "./components/Hero";
import MasterfullyPlanned from "./components/MasterfullyPlanned";
import NavBar from "./components/NavBar";
import SustainablyDesigned from "./components/SustainablyDesigned";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import { useDisclaimerStore } from "@/stores/useDisclaimerStore";
import Disclaimer from "./components/Disclaimer";
import FullImage from "./components/FullImage";
import { useFullImageStore } from "@/stores/useFullImageStore";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { show } = useDisclaimerStore();
  const { display } = useFullImageStore();

  useEffect(() => {
    window.scrollBy({
      top: 500
    })
  }, [])
  return (
    <div ref={ref} className={`w-screen h-screen overflow-x-hidden relative ${show && "overflow-hidden"}`}>
      <NavBar ref={ref} />
      <Hero />
      <AmaltasTower />
      <ImageGallery />
      <MasterfullyPlanned />
      <Disclaimer />
      <ConstructionUpdates ref={ref} />
      <SustainablyDesigned />
      <ConnectWithUs />
      <AboutArchitect />
      <Footer />
    </div>
  );
}
