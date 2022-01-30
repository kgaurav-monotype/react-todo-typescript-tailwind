import React from 'react';
import { Todo } from '../model';
import TodoCard from './TodoCard';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: Props) => {
    return <div className='p-20'>
        <div className={`${todos.length > 0 ? "grid grid-cols-3 gap-10" : "text-center"}`}>
            {
                todos.length > 0 ? todos.map(todo =>
                    <TodoCard todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                ) : <h2 className='text-4xl text-white font-thin'>You don't have any todo item.</h2>}</div>
    </div>;
};

export default TodoList;
