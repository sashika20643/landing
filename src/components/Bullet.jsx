import React from 'react'
import tick_black from "../assets/tick-circle-black.svg";
import  tick_white from "../assets/tick-circle-white.svg";

export default function Bullet({theme,children}) {
  return (
    <div className="flex gap-3 items-center " >
    <img src={theme=="dark"?tick_white:tick_black} className="w-5 h-5" alt=""/>
    <div>{children}</div>
    </div>
  )
}
