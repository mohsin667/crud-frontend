import React from 'react'
import {FiPlus} from 'react-icons/fi'
import {FaTasks} from 'react-icons/fa'
import AddTodo from './AddTodo'

function TopNav() {
  return (
    <>
    <div className='text-[50px] mb-6 flex items-center justify-between'>
      <FaTasks color='#66cca9' />
      <div className='cursor-pointer'>
        <FiPlus />
      </div>
    </div>
    {/* <AddTodo /> */}
    </>
  )
}

export default TopNav
