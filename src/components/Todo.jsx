import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'

const Todo = ({task,deleteTodo,editTodo}) => {
  return (
    <div className='flex justify-between items-center bg-gray-600 text-white py-3 rounded-md mb-1 cursor-pointer'>
     <p className='fontfont-primary pl-5'>{task.task} </p>
     <div className='flex items-center gap-x-4 pr-5'>
      <AiFillEdit className='text-xl' onClick={()=> editTodo(task.id)}/>
      <BsFillTrashFill className='text-xl ' onClick={()=> deleteTodo(task.id)}/>
     </div>
    </div>
  )
}

export default Todo
