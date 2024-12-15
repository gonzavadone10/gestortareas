import React, { useState } from 'react';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = (e) => {
        e.preventDefault();
        if (newTask.trim() === "") return;

        setTasks([
            ...tasks,
            { id: Date.now(), text: newTask, completed: false },
        ]);
        setNewTask("");
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const editTask = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                const newText = prompt("Edita la tarea:", task.text);
                if (newText !== null) {
                    return { ...task, text: newText };
                }
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const clearCompletedTasks = () => {
        setTasks(tasks.filter((task) => !task.completed));
    };

    const completedCount = tasks.filter(task => task.completed).length;
    const pendingCount = tasks.length - completedCount;

    const sortTasks = () => {
        const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);
        setTasks(sortedTasks);
    };

    return (
        <div className="container">
            <h1>Gestor de Tareas</h1>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Escribe una nueva tarea..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button type="submit">Agregar Tarea</button>
            </form>
            <div className="task-stats">
                <p>Total de tareas: {tasks.length}</p>
                <p>Tareas completadas: {completedCount}</p>
                <p>Tareas pendientes: {pendingCount}</p>
            </div>
            <div className="task-actions">
                <button onClick={sortTasks}>Ordenar por estado</button>
                <button onClick={clearCompletedTasks}>Limpiar completadas</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? "completed" : ""}>
                        <span>{task.text}</span>
                        <div>
                            <button
                                className="complete-btn"
                                onClick={() => toggleComplete(task.id)}
                            >
                                Completar
                            </button>
                            <button
                                className="edit-btn"
                                onClick={() => editTask(task.id)}
                            >
                                Editar
                            </button>
                            <button
                                className="delete-btn"
                                onClick={() => deleteTask(task.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;