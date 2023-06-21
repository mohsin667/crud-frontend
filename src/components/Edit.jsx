import React from 'react'

function Edit() {
  return (
    <div className='absolute bg-white p-3 right-0 rounded-md top-[30px] shadow-md z-[99] flex flex-col'>
      <label htmlFor="eidt" className='mb-[10px] w-full'>Eidt Title
        <input type="text" className='border rounded-sm mb-3 border-slate-300 mt-1 py-1 px-2 w-full' id='eidt' />
      </label>
      <label htmlFor="select" className='w-full mb-[10px]'>Select Priority
        <select id="select" className='border w-full h-[34px] rounded-sm mb-3'>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
      </label>
      <label htmlFor="description" className='mb-[15px] w-full'>Edit Description
        <textarea className='border rounded-sm border-slate-300 mt-1 py-1 px-2' id='description' />
      </label>

        <div className='flex gap-[5px]'>
            <button className='bg-blue-400 hover:bg-blue-600 text-white px-3 py-2 rounded-sm mr-2'>Change</button>
            <button className='bg-slate-400 hover:bg-slate-600 text-white px-3 py-2 rounded-sm mr-2'>Cancel</button>
        </div>
    </div>
  )
}

export default Edit
