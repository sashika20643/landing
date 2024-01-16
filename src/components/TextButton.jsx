import React from 'react'

export default function TextButton({children,theme="dark"}) {
  return (
    <button className={`${theme==="light"?" bg-black text-white":" bg-white text-black"} transform rounded px-8 py-1.5 hover:scale-125  transition-transform duration-300 ease-in-out`}>{children}</button>

  )
}
