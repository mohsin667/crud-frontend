import React from 'react'
import {SlOptionsVertical} from "react-icons/sl"
import {RiDeleteBinLine} from "react-icons/ri"
import Edit from './Edit'
function TodoCards() {
  return (
    <div className='bg-gray-100 rounded-md md:w-[calc(100%-200px)] mt-[10px] p-[15px] flex flex-wrap items-start gap-[15px]'>
      {/* Cards */}
      <div className='p-[10px] self-stretch rounded-md bg-[#d1e5f7] tex-sm md:w-[calc(100%/3-10px)] flex flex-col gap-[10px]'>
        <div className='flex justify-between items-start'>
            <h3 className=''>Lorem Ipsum</h3>
            <div className='relative flex items-center gap-1'>
                <RiDeleteBinLine className='text-[18px] cursor-pointer' />
                <SlOptionsVertical className='cursor-pointer'/>
            </div>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, qui.</p>

        <div className='flex justify-between items-center mt-3 ml-[-5px]'>
            <label htmlFor="card" className='inline-flex'>
                <input type="checkbox" className='checked:bg-blue-500 relative left-1 w-4 mr-2' /> Done 
            </label>
            <div className='w-[15px] h-[15px] rounded-full' style={{background: "#f87171"}}></div>
        </div>
      </div>

      <div className='p-[10px] self-stretch rounded-md bg-[#d1e5f7] tex-sm md:w-[calc(100%/3-10px)] flex flex-col gap-[10px]'>
        <div className='flex justify-between items-start'>
            <h3 className='line-through'>Lorem Ipsum</h3>
            <div className='relative flex items-center gap-1'>
                <RiDeleteBinLine className='text-[18px] cursor-pointer' />
                <SlOptionsVertical className='cursor-pointer'/>
                {/* <Edit /> */}
            </div>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, qui.</p>

        <div className='flex justify-between items-center mt-3 ml-[-5px]'>
            <label htmlFor="card" className='inline-flex'>
                <input type="checkbox" className='checked:bg-blue-500 relative left-1 w-4 mr-2' /> Done 
            </label>
            <div className='w-[15px] h-[15px] rounded-full' style={{background: "#f87171"}}></div>
        </div>
      </div>
    </div>
  )
}

export default TodoCards
