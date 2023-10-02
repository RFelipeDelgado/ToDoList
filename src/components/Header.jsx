import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = ({ showCompleted, setShowCompleted }) => {
    const [eye, setEye] = useState(true)

    const eyeHandler = () => {
        setEye(!eye)
    }

    return (
        <header className='header'>
            <h1 className='header__titulo'>Lista de tareas</h1>
            {showCompleted ?
            <button onClick={eyeHandler} className='header__boton'>
                No mostrar tareas completadas
                <FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton' />
            </button>
            :
            <button onClick={eyeHandler} className='header__boton'>
                No mostrar tareas completadas
                <FontAwesomeIcon icon={faEye} className='header__icono-boton' />
            </button>
            
        }
        </header>
    );
}

export default Header;