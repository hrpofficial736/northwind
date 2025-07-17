"use client";

import PrimaryButton from '@/components/buttons/PrimaryButton';
import HamBurger from '@/components/icons/HamBurger';
import React, { RefObject, useState } from 'react';
import Navigation from './Navigation';
import { useDisclaimerStore } from '@/stores/useDisclaimerStore';

const NavBar = ({ ref }: { ref: RefObject<HTMLDivElement | null>}) => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const { show } = useDisclaimerStore();
  return (
    <div>
      <div className={`bg-[rgba(194,181,133,0.5)] w-full px-[17px] py-[8px] flex items-center justify-between ${(show) && "blur-2xl"}`}>
      <div onClick={() => setShowNavigation(true)}>
        <HamBurger />
      </div>
      <PrimaryButton onTap={()=>{
        document.getElementById("connect-with-us")?.scrollIntoView({behavior:"smooth"})
      }}   text="Enquire Now" className="p-[12px_36px] max-sm:hidden" />
      
    </div>

    <Navigation ref={ref} show={showNavigation} setShow={setShowNavigation} />
    </div>
  )
}

export default NavBar
