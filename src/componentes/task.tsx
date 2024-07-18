type Props ={
task:string
deletetask: ()=>void
}

export const Task = ({task,deletetask}:Props)=>{
    return(
        <div className="task"><span>{task}</span>
        <button onClick={deletetask}>Add task</button>
        </div>
    )
}