import { useState, useEffect } from "react";
import '../styles/To-Do-List.css';

function ToDoList() {
    const [date, setDate] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [addTask, setAddTask] = useState("");
    const [editTask, setEditTask] = useState([]);
    const [editedText, setEditedText] = useState([]);

    useEffect(() => {
        const today = new Date();
        const todayArray = today.toString().split(" ");
        setDate(todayArray);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (addTask.trim() === "") return;

        const newTask = {
            id: Date.now(),
            name: addTask
        };
        

        setTasks([...tasks, newTask]);
        setEditTask([...editTask, false]);
        setEditedText([...editedText, addTask]);

        setAddTask("")
    }

    const handleDelete = (id) => {

    const index = tasks.findIndex((t) => t.id === id);

    const updatedTasks = tasks.filter((task) => task.id !== id);
    const updatedEditTask = [...editTask];
    const updatedEditedText = [...editedText];

    updatedEditTask.splice(index, 1);
    updatedEditedText.splice(index, 1);

    setTasks(updatedTasks);
    setEditTask(updatedEditTask);
    setEditedText(updatedEditedText);
    }

    const handleEdit = (id) => {

    const index = tasks.findIndex((task) => task.id === id);
    const updatedEditTask = [...editTask];
    updatedEditTask[index] = true;
    setEditTask(updatedEditTask);
    };

    const handleSave = (id) => {

    const index = tasks.findIndex((task) => task.id === id);
    const updatedTasks = [...tasks];
    updatedTasks[index].name = editedText[index];
    setTasks(updatedTasks);

    const updatedEditTask = [...editTask];
    updatedEditTask[index] = false;
    setEditTask(updatedEditTask);
    }

    const handleCancel = (id) => {

    const index = tasks.findIndex((task) => task.id === id);
    const updatedEditTask = [...editTask];
    updatedEditTask[index] = false;
    setEditTask(updatedEditTask);
    }

    const handleTextChange = (index, value) => {

    const updatedText = [...editedText];
    updatedText[index] = value;
    setEditedText(updatedText);
  };

    return <div className="toDoList-container">
        <div className="title-container">
            <span className="date">
            {date.length >= 4 ? `${date[1]} ${date[2]} ${date[3]}` : "Chargement..."}
            </span>
            <h1 className="to-do-Title">To-Do List</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <input
            value={addTask}
            type="text"
            placeholder="Ajouter une tâche..."
            onChange={(e) => setAddTask(e.target.value)}
            />
        <button className="submitBtn" type="submit">Ajouter</button>
        </form>
        <ul>
            {tasks.map((task, index) => (
                <li key={task.id} className="item">
                    <textarea
                        disabled={!editTask[index]}
                        className="taskarea"
                        value={editedText[index]}
                        onChange={(e) => handleTextChange(index, e.target.value)}
                    />

                    <div className="edit-controller" style={{ display: editTask[index] ? "none" : "block" }}>

                    <button className="deleteBtn" onClick={() => handleDelete(task.id)}><i className="fa-solid fa-check deleteBtn"></i></button>

                    <button className="editBtn" onClick={() => handleEdit(task.id)}><i className="fa-regular fa-pen-to-square editBtn"></i></button>

                    </div>
                <div className="update-controller"  style={{ display: editTask[index] ? "block" : "none" }}>
                    
                    <button className="saveBtn" onClick={() => handleSave(task.id)}><i class="fa-solid fa-floppy-disk"></i></button>

                    <button className="cancelBtn" onClick={() => handleCancel(task.id)}><i class="fa-solid fa-ban"></i></button>

                </div>
                </li>
            ))}
        </ul>
    </div>
}

export default ToDoList;