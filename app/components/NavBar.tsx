
import PrimaryButton from '@/components/buttons/PrimaryButton';
import HamBurger from '@/components/icons/HamBurger';
import React from 'react';

const NavBar = () => {
  return (
    <div className="bg-[rgba(194,181,133,0.5)] w-full px-[17px] py-[8px] flex items-center justify-between">
      <HamBurger />
      <PrimaryButton text="Enquire Now" className="p-[12px_36px]" />
    </div>
  )
}

export default NavBar
