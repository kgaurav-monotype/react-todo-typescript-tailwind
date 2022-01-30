import React, {useRef} from "react";

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleTodo: (e:React.SyntheticEvent)=> void
}

const InputFeild:React.FC<Props> = ({todo, setTodo, handleTodo}) => {

    const inputFeild = useRef<HTMLInputElement>(null);
    
  return <form className='w-[500px] m-auto relative' onSubmit={(e)=>{handleTodo(e);inputFeild.current?.blur()}}>
      <input ref={inputFeild} className='p-4 w-full rounded-md' type="text" placeholder='Enter your task' value={todo} onChange={e=>setTodo(e.target.value)} />
      <button className='btn-submit' type="submit">Go</button>
  </form>;
};

export default InputFeild;
