import React from 'react'

function AddTodo() {
  return (
    <div className='w-full h-full fixed top-0 left-0 flex items-center justify-center z-[100]'>
        <div className='w-full h-full absolute bg-[rgba(0,0,0,0.4)] cursor-pointer'></div>
        <div className='container px-4'>
            <form className='md:w-[500px] mx-auto py-6 px-6 md:py-10 md:px-20 bg-white relative rounded-sm'>
                <label htmlFor="title" className='mb-5 block'>
                    <span className='after:content-["*"] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700'>Title</span>
                    <input type="text" className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1' placeholder='Title' id='title'/>
                </label>
                <label htmlFor="priority" className='mb-5 block'>
                    <span className='after:content-["*"] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700'>Select Priority</span>
                    <select type="text" className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1' placeholder='Title' id='priority'> 
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                    </select>
                </label>
                <label htmlFor="description" className='mb-5 block'>
                    <span className='after:content-["*"] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700'>Description</span>
                    <textarea type="text" className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1' placeholder='description' />
                </label>
                <div className='flex gap-[5px]'>
                    <button className='bg-blue-400 hover:bg-blue-600 text-white px-3 py-2 rounded-sm mr-2'>Submit</button>
                    <button className='bg-slate-400 hover:bg-slate-600 text-white px-3 py-2 rounded-sm mr-2'>Cancel</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTodo
