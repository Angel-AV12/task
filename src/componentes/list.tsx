import { Task } from "./task"

type Props ={
    listtask: string[]
    deletetask: (index:number) => void
}

export const Listtask = ({listtask,deletetask}:Props)=>{
    return(
        <div className="taskList">
            {listtask.map((task,index)=>(
                <Task key={index} task={task} deletetask={()=> deletetask(index)}></Task>
            ))}
        </div>
    )
}