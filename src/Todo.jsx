export default function Todo({task,isdone}) {
    console.log(task, isdone)
    if(isdone){
        return (
            <h3>finished {task}</h3>
        )
    }else{
        return (
            <h3>work on {task}</h3>
        )
    }
}