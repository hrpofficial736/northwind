

import { manropeFont } from '@/utils/fonts';
import React, { ReactElement } from 'react';


const SecondaryButton = ({ text, className, icon, onTap }: { text: string; className?: string, icon?: ReactElement, onTap?: () => void; }) => {
  return (
    <button onClick={onTap} className={`secondary-btn ${manropeFont.className} font-[600] ${className} gap-2 max-w-[300px]`}>
        { icon } { text }
    </button>
  )
}

export default SecondaryButton
