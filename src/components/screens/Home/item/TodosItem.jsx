import React from 'react'
import { useGlobalContext } from '../../../../context/context'
import TodoItem from './TodoItem'

function TodosItem() {
    const{todos} = useGlobalContext()
  return (
    <div>
        {todos.map((item)=>{
            return <TodoItem key={item.id}{...item}/>
        })}
    </div>
  )
}

export default TodosItem