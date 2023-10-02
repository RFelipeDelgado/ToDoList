import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, toggleCompleted, taskEdit, deleteTask }) => {
    const [editTask, setEditTask] = useState(false)
    const [newTask, setNewTask] = useState(task.texto)

    const handleSubmit = (e) => {
        e.preventDefault();
        taskEdit(task.id, newTask)
        setEditTask(false)
    }


    return (
        <li
            className='lista-tareas__tarea'
        >
            <FontAwesomeIcon
                icon={task.completed ? faCheck : faXmark}
                className='lista-tareas__icono lista-tareas__icono-check'
                onClick={() => toggleCompleted(task.id)}
            />
            <div className='lista-tarea__texto'>
                {editTask ?
                    <form action='' className='formulario-editar-tarea' onSubmit={handleSubmit}>
                        <input
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            type='text'
                            className='formulario-editar-tarea__input'
                        />
                        <button
                            type='submit'
                            className='formulario-editar-tarea__btn'
                        >
                            Editar tarea
                        </button>
                    </form>
                    :
                    task.texto
                }
            </div>
            <div className='lista-tarea__contenedor-botones'>
                <FontAwesomeIcon
                    onClick={() => setEditTask(!editTask)}
                    icon={faEdit}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                />
                <FontAwesomeIcon
                onClick={() => deleteTask(task.id)}
                    icon={faTimes}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                />
            </div>
        </li>
    );
}

export default Task;