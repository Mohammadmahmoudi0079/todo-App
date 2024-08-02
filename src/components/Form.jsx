import React, { useState } from 'react'

const Form = ({createTodo}) => {

  const [value, setValue] = useState('')
  const handleSubmit = e =>{
    e.preventDefault()
    value !=  "" ? createTodo(value): null ;
    setValue('')
  }
  return (
    <form className='flex justify-between items-center mb-4 font-primary w-full' onSubmit={handleSubmit}>
      <input type='text' className='outline-none bg-transparent border border-gray-600 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' 
      placeholder='What task do you have today?' value={value} 
      onChange={(e)=> setValue(e.target.value)} />

      <button className='bg-gray-500 border-none p-2 text-white cursor-pointer rounded '>Add Task</button>

    </form>
  )
}

export default Form
