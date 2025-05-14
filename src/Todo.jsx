export default function Todo({ task, isdone }) {
    // consditonal rendering way 1
    // console.log(task, isdone)
    // if(isdone){
    //     return (
    //         <h3>finished {task}</h3>
    //     )
    // }else{
    //     return (
    //         <h3>work on {task}</h3>
    //     )
    // }

    //  consditonal rendering way 2

    // if (isdone) {
    //     return (
    //         <li>{task} finished</li>
    //     )
    // }
    // return <li>{task} processing</li>

    // consditonal rendering way 3

    // return (
    //     <li>{isdone ? 'finished' : 'work on'} : {task}</li>
    // )

    // consditonal rendering way 4: &&

    // return (
    //     <li>{task} {isdone && ': done'}</li>
    // )

    // consditonal rendering way 5: ||

    // return (
    //     <li>{task} {isdone || ': do it'}</li>
    // )

    // consditonal rendering way 6
    const todoStyle = {
        border : "2px solid olive",
        padding : "10px",
        borderRadius : "10px",
    }
    let listitem;
    if(isdone){
        listitem = <li>{task} : ✅</li>
    }
    else{
        listitem = <li>{task} : ❌</li>
    }
    return <div style={todoStyle}>{listitem}</div>;
}