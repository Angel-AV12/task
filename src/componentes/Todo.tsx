import { useState } from "react";
import { Listtask } from "./list";
export const TodoApp = ()=>{
    const [newtask,setnewtask] = useState<string>('');
    const [list,setlist] = useState<string[]>([]);
    const handleradd = () =>{
        if(newtask.trim() === '') return
        setlist(taskprevius =>[...taskprevius,newtask])
        setnewtask('')
    }

    const handlerdelete = (index:number) =>{
        setlist(tasks => tasks.filter((_,i)=>i !== index))
    }

    return(
      <div>
        <h1>List of task</h1>
        <div className="flex">
            <input type="text"  value={newtask}
            onChange={(e)=>setnewtask(e.target.value)}
            placeholder="New task"/>
            <button onClick={handleradd}>Add task</button>
        </div>
        <Listtask listtask={list} deletetask={handlerdelete}></Listtask>
        </div>  
    );
}