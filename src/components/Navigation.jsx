import React from 'react'
import {BsFillCheckCircleFill} from "react-icons/bs"
import {CgMenuGridO} from "react-icons/cg"
function Navigation() {
  return (
    <nav>
      <ul className='flex gap-[10px] md:gap-0 flex-wrap md:flex-col'>
        <li className='flex p-2 gap-2 md:my-[7.5px] items-center bg-gray-100 rounded-md text-slate-950 cursor-pointer'>
            <div className='w-6 h-6 rounded-full flex items-center justify-center' style={{background: "rgb(101,205,170)"}}><CgMenuGridO color='#fff' /></div>All
        </li>
        <li className='flex p-2 gap-2 md:my-[7.5px] bg-gray-100 rounded-md text-slate-950 cursor-pointer'>
            <div className='w-6 h-6 rounded-full' style={{background: "rgb(248, 113, 113)"}}></div> High Priority
        </li>
        <li className='flex p-2 gap-2 md:my-[7.5px] bg-gray-100 rounded-md text-slate-950 cursor-pointer'>
            <div className='w-6 h-6 rounded-full' style={{background: "rgb(250, 204, 22)"}}></div> Medium Severity
        </li>
        <li className='flex p-2 gap-2 md:my-[7.5px] bg-gray-100 rounded-md text-slate-950 cursor-pointer'>
            <div className='w-6 h-6 rounded-full' style={{background: "rgb(101, 205, 170)"}}></div> Low Severity
        </li>
        <li className='flex p-2 gap-2 md:my-[7.5px] items-center bg-gray-100 rounded-md text-slate-950 cursor-pointer'>
            <div className='w-6 h-6 rounded-full flex items-center justify-center' style={{background: "rgb(101,205,170)"}}><BsFillCheckCircleFill color='#fff' /></div>Completed
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
