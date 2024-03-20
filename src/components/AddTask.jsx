export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.id) {//if it is true then it means "task" state has some value so we have to handle update instead of submit
            const date = new Date();
             
            const updatedList=tasklist.map((element)=>(
                element.id === task.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : element
            ));
            setTasklist(updatedList);
            setTask({}); 
        } else {
            const date = new Date();

            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasklist([...tasklist, newTask]);
            setTask({}); 

        }

    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add task" name="task" autoComplete="off" maxLength={25} value={task.name || ""} onChange={ (e)=> {setTask({...task , name: e.target.value})} } />
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}
