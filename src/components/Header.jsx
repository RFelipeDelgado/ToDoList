import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = ({ showCompleted, setShowCompleted }) => {

    const toggleCompleted = () => {
        setShowCompleted(!showCompleted)
    }

    return (
        <header className='header'>
            <h1 className='header__titulo'>Lista de tareas</h1>
            {showCompleted ?
                <button
                    onClick={() => toggleCompleted()}
                    className='header__boton'
                >
                    No mostrar tareas completadas
                    <FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton' />
                </button>
                :
                <button
                    onClick={() => toggleCompleted()}
                    className='header__boton'
                >
                    Mostrar tareas completadas
                    <FontAwesomeIcon icon={faEye} className='header__icono-boton' />
                </button>

            }
        </header>
    );
}

export default Header;