

import { createContext,useContext,useState } from "react";
import { data } from "../data";


const AppContext = createContext();

const AppProvider = ({children}) => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

    const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))


    // const [title, setTitle] = useState('')

    // const addTodo = title => {
	// 	setTodos(prev => [
	// 		{
	// 			_id: new Date(),
	// 			title,
	// 			isCompleted: false,
	// 		},
	// 		...prev,
	// 	])
	// 	setTitle('')
	// }


    return(
        <AppContext.Provider value={{setTodos,todos,changeTodo,removeTodo}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}

