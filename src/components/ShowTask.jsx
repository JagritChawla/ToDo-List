export const ShowTask = ({tasklist,setTasklist,task,setTask}) => {

    const handleEdit = (id)=>{
        const selectedTask = tasklist.find(element => element.id == id);
        setTask(selectedTask);
    }
    const handleDelete = (id)=>{
        const newList = tasklist.filter((element)=> element.id != id)
        setTasklist(newList);
    }
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button onClick={()=>setTasklist([])} className="clearAll">Clear All</button>
            </div>

            <ul>
                {tasklist.map((element) => (
                    <li key={element.id}>
                        <p>
                            <span className="name">{element.name}</span>
                            <span className="time">{element.time}</span>
                        </p>
                        <i onClick={()=>handleEdit(element.id)} className="bi bi-pencil-square"></i>
                        <i onClick={()=>handleDelete(element.id)} className="bi bi-trash"></i>
                    </li>
                ))}

            </ul>

        </section>
    )
}
