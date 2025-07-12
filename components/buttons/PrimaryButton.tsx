
import { manropeFont } from '@/utils/fonts';
import clsx from 'clsx';
import React from 'react';


const PrimaryButton = ({ text, className, onTap }: { text: string; className?: string, onTap?: () => void; }) => {
  return (
    <button onClick={onTap} className={clsx(`primary-btn ${manropeFont.className} font-[600] max-w-[400px]`, className)}>
        { text }
    </button>
  )
}

export default PrimaryButton
