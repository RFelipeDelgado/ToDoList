import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';


const FormularioTareas = ({tasks, setTasks}) => {
    const [inputTask, setInputTask] = useState("")


    const handleInput = (e) => {
        setInputTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks([...tasks, {id:uuidv4(), texto:inputTask.charAt(0).toUpperCase() + inputTask.slice(1), completed: false}])
        setInputTask("")
    }

    return (
        <form action='' className='formulario-tareas' onSubmit={handleSubmit}>
            <input
                type="text"
                className='formulario-tareas__input'
                placeholder='Escribe una tarea'
                value={inputTask}
                onChange={(e) => handleInput(e)}
            />
            <button
                type='submit'
                className='formulario-tareas__btn'
            >
                <FontAwesomeIcon icon={faCirclePlus} color='blue' className='header__icono-boton' />

            </button>
        </form>
    );
}

export default FormularioTareas;