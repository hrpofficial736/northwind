

import { manropeFont } from '@/utils/fonts';
import React from 'react';


const SecondaryButton = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button className={`secondary-btn ${manropeFont.className} font-[600] ${className}`}>
        { text }
    </button>
  )
}

export default SecondaryButton
