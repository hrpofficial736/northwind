
import { manropeFont } from '@/utils/fonts';
import React from 'react';


const PrimaryButton = ({ text, className, onTap }: { text: string; className?: string, onTap?: () => void; }) => {
  return (
    <button onClick={onTap} className={`primary-btn ${manropeFont.className} font-[600] ${className}`}>
        { text }
    </button>
  )
}

export default PrimaryButton
