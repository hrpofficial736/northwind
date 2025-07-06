

import { manropeFont } from '@/utils/fonts';
import React, { ReactElement } from 'react';


const SecondaryButton = ({ text, className, icon }: { text: string; className?: string, icon?: ReactElement }) => {
  return (
    <button className={`secondary-btn ${manropeFont.className} font-[600] ${className} gap-2`}>
        { icon } { text }
    </button>
  )
}

export default SecondaryButton
