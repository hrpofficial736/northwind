
import { manropeFont } from '@/utils/fonts';
import React from 'react';


const PrimaryButton = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button className={`primary-btn ${manropeFont.className} font-[600] ${className}`}>
        { text }
    </button>
  )
}

export default PrimaryButton
