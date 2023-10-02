import React from 'react';
import Task from './Task'

const TaskList = ({ tasks, setTasks, showCompleted }) => {

    const toggleCompleted = (id) => {
        console.log("edit task con id: " + id);
        setTasks(tasks.map((element) => {
            if (element.id === id) {
                return { ...element, completed: !element.completed }
            }
            return element
        }))
    }

    const taskEdit = (id, newTask) => {
        setTasks(tasks.map((element) => {
            if (element.id === id) {
                return { ...element, texto: newTask }
            }
            return element
        }))
    }

    const deleteTask = (id, newTask) => {
        setTasks(tasks.filter((element) => {
            if (element.id !== id) {
                return element;
            }
            return;
        }))
    }
    return (
        <ul className='lista-tareas'>
            {tasks.length > 0 ? tasks.map((element) => {
                if (showCompleted) {
                    return <Task
                        key={element.id}
                        task={element}
                        toggleCompleted={toggleCompleted}
                        taskEdit={taskEdit}
                        deleteTask={deleteTask}
                    />
                } else if (!element.completed) {
                    return <Task
                        key={element.id}
                        task={element}
                        toggleCompleted={toggleCompleted}
                        taskEdit={taskEdit}
                        deleteTask={deleteTask}
                    />
                }
                return

            })
                :
                <div className='lista-tareas__mensaje'>
                    ~No hay tareas~

                </div>
            }
        </ul>
    );
}

export default TaskList;