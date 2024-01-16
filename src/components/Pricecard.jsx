import React from 'react'
import {motion} from 'framer-motion'

import Bullet from './Bullet';
import TextButton from './TextButton';
export default function Pricecard({card}) {
    const {name,price,bullets,theme}=card;
    console.log(bullets)
  return (
    <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:1, delay:.3}} className={`w-[18em] p-8 space-y-3 rounded-[1em] border-2 ${theme==="dark"?" bg-black text-white":" bg-white text-black border-gray-600"}`}>
            <div className="text-2xl">{name}</div>
            <div><span className="text-2xl font-bold">{price} $</span> / month</div>
            <div className="text-gray-400">For small and medium scale business</div>
            <div className="flex flex-col space-y-3 py-3">

                {bullets.map((bullet,index)=>(
                  <Bullet key={index} theme={theme} >
                    {bullet}
                    </Bullet>
                ))}
                
             
            </div>
            <div className="flex justify-center">
               <TextButton theme={theme}>
                Buy Now
               </TextButton>
            </div>
            </motion.div>
  )
}
