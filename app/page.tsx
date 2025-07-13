"use client";

import { useRef } from "react";
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
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={ref} className="w-screen h-screen overflow-x-hidden relative">
      <NavBar ref={ref} />
      <Hero />
      <RareLiving className="max-lg:hidden" />
      <AmaltasTower />
      <ImageGallery />
      <MasterfullyPlanned />

      <AboutArchitect />
      <ConstructionUpdates />
      <SustainablyDesigned />
      <ConnectWithUs />
      <Footer />
    </div>
  );
}
