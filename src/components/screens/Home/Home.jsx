import React, { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField'

import { useGlobalContext } from '../../../context/context'
import TodosItem from './item/TodosItem'



const Home = () => {
	const{setTodos} = useGlobalContext()


	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-10'>Todo-App</h1>
			<TodosItem/>
			
			<CreateTodoField setTodos={setTodos} />
		</div>
	)
}

export default Home
