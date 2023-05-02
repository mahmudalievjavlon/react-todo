import React from 'react'
import cn from 'classnames'
import { BsTrash } from 'react-icons/bs'

import Check from './Check'
import { useGlobalContext } from '../../../../context/context'

const TodoItem = ({_id,title,isCompleted}) => {
	const{changeTodo, removeTodo} = useGlobalContext()
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
			<button
				className='flex items-center'
				onClick={() => changeTodo(_id)}
			>
				<Check isCompleted={isCompleted} />
				<span
					className={cn({
						'line-through':isCompleted,
					})}
				>
					{title}
				</span>
			</button>
			<button onClick={() => removeTodo(_id)}>
				<BsTrash
					size={22}
					className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
				/>
			</button>
		</div>
	)
}

export default TodoItem
