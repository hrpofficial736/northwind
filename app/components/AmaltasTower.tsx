
import { manropeFont } from '@/utils/fonts'
import React from 'react'

const AmaltasTower = () => {
  return (
    <section className="bg-primary p-[120px_36px] relative h-[1049px] w-full z-[9999]">
      <div className={`f-c-row gap-[48px] ${manropeFont.className}`}>
        <p className="text-xl">3BHK</p>
        <p className="text-xl">4BHK</p>
        <p className="text-xl">4.5BHK</p>
      </div>
      <h1 className="font-boskaMedium text-[128px]">amaltas tower</h1>
    </section>
  )
}

export default AmaltasTower
