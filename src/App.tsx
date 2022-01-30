import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './model';

/*
let name:string;
let age:number | string; // age can have both number and string value
let isActive:boolean; // isActive can have true or false
let hobbies:string[]; // hobbies can have an array of strings
let role:[number,string]; // Tuple can have an array of 1 nummber and 1 string 

type Person = {
  name:string,
  age?:number
} // Person Object definition

let person:Person = {
  name: "Kumar Gaurav"
}

let persons:Person[]; // Array of Person object

persons = [
  {
    name: "ashu"
  },
  {
    name: 'kavish'
  }
];
*/

function App() {

  const [todo, setTodo] = useState<string>("") // string type todos
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodo = (e:React.SyntheticEvent)=>{
    e.preventDefault();
    if(todo){
    setTodos([...todos,{id:Date.now(), todo, isDone: false}]);
    setTodo("");
    }
  }
  return (
    <div className=" bg-gradient-to-br from-pink-600 to-indigo-600 p-10 min-h-[100vh]">
      <h1 className="main-heading">Todo App</h1>
      <div>
        <InputFeild todo = {todo} setTodo = {setTodo} handleTodo={handleTodo}/>
      </div>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
