import React,{ useState } from 'react';
import { Todo } from '../model';

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoCard = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);

    const handleDone =(id:number)=>{
        setTodos(todos.map((todo)=>
            todo.id === id ? {...todo, isDone:!todo.isDone} : todo
        ))
    }
    
    const handleDelete =(id:number)=>{
        setTodos(todos.filter((todo)=>
            todo.id !== id
        ))
    }



    return <div className='group cursor-pointer relative p-8 rounded-md bg-white col-span-1 min-h-[100px]  shadow-lg'>
        <h2 contentEditable className={`text-lg text-gray-600 ${todo.isDone ? 'line-through' : ''}`}>{todo.todo}</h2>
        
        <div className='p-1 rounded-l-full flex space-x-0.5 absolute right-0 -top-6 bg-indigo-900 text-white shadow-md transition ease-in duration-300'>
            
            <span onClick={(e)=>handleDelete(todo.id)} className='cursor-pointer hover:bg-red-400 inline-block p-2 rounded-full transition duration-300 ease-in'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg></span>
            <span onClick={(e)=>handleDone(todo.id)} className='cursor-pointer hover:bg-green-400 inline-block p-2 rounded-full transition duration-300 ease-in'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg></span>
        </div>
    </div>;
};

export default TodoCard;
