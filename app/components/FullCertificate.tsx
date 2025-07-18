"use client";


import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Cross from '@/components/icons/Cross';

const FullCertificate = ({display,setDisplay}:{display:boolean;setDisplay:React.Dispatch<React.SetStateAction<boolean>>}) => {

  return (
    <AnimatePresence>
      {display && (
        <motion.div
            initial={{
                opacity: 0
            }} animate={{
                opacity: 1
            }}
            transition={{
                duration: 0.3,
                type: "tween"
            }}
            exit={{
                opacity: 0
            }}
        className="bg-secondary w-[90vw] h-[60vh] lg:h-[110vh] blur-0 backdrop-brightness-200 outline-2 outline-border p-[10px_20px] rounded-2xl flex flex-col absolute z-[9999999] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div
            onClick={() => setDisplay(false)}
            className="self-start lg:self-end p-2 rounded-xl cursor-pointer"
          >
            <Cross />
          </div>

          <div style={{
            backgroundImage: `url("/assets/certificate.jpg")`
          }} className="w-[90%] h-[90%] rounded-xl bg-cover bg-center self-center mt-[20px]" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FullCertificate;
