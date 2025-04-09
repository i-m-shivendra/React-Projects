import React, { useState } from 'react'

function ToDoList(){

    const [tasks,setTasks] = useState(["Eat Breakfast","Take a shower",
                                          "Walk the dog"]);
    const [newTask,setNewtask] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    
    function handleInputChange(event){
       setNewtask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            if(isEdit){
                // Update the existing task
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = newTask;
                setTasks(updatedTasks);

                // Reset back to add mode
                setIsEdit(false);
                setEditIndex(null);
            } else {
                // Add a new task
                setTasks(t=> [...t, newTask]);
            }
            setNewtask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }

    function updateTask(index){
        setIsEdit(true);
        setEditIndex(index);
        setNewtask(tasks[index]);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = 
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = 
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do List</h1>

            <div>
                <input 
                    type="text"
                    placeholder={isEdit ? "Update a task..." : "Enter a task..."}
                    value={newTask}
                    onChange={handleInputChange}
                />

                <button
                    className="add-button"
                    onClick={addTask}>
                    {isEdit ? "Update" : "Add"}
                </button>

                {isEdit && (
                    <button
                        className="cancel-button"
                        onClick={() => {
                            setIsEdit(false);
                            setEditIndex(null);
                            setNewtask("");
                        }}>
                        Cancel
                    </button>
                )}
           </div>

           <ol>
              {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text"> {task} </span>
                    <button
                        className="update-button"
                        onClick={ () => updateTask(index)}>
                        Update
                    </button>
                    <button
                        className="delete-button"
                        onClick={ () => deleteTask(index)}>
                        Delete
                    </button>

                    <button
                        className="move-button"
                        onClick={ () => moveTaskUp(index)}>
                        Up
                    </button>

                    <button
                        className="move-button"
                        onClick={ () => moveTaskDown(index)}>
                        Down
                    </button>

                </li>
              )}
           </ol>

        </div>
    );

}
export default ToDoList
