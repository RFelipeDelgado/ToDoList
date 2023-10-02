import React, { useState, useEffect } from 'react';

import './App.css'
import FormularioTareas from './components/Form'
import Header from './components/Header.jsx'
import TaskList from './components/TaskList';

const App = () => {
  //Get tasks from local storage, if there are. If not, returns empty array
  const getTasksFromLocalStorageXd = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
  const [tasks, setTasks] = useState(getTasksFromLocalStorageXd)

  //Get current state of showTasks, from local storage
  const getShowCompletedFromLocalStorageHehe = localStorage.getItem("showCompleted") ? JSON.parse(localStorage.getItem("showCompleted")) : false;
  const [showCompleted, setShowCompleted] = useState(getShowCompletedFromLocalStorageHehe)

  //Saves tasks in local storage
  useEffect(() => {
    console.log("Cambiaron las tasks");
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  
  //Saves showTasks current state
  useEffect(() => {
    localStorage.setItem("showCompleted", showCompleted.toString())
  }, [showCompleted])
  
  return (
    <div className='contenedor'>
      <Header setShowCompleted={setShowCompleted} showCompleted={showCompleted} />
      <FormularioTareas tasks={tasks} setTasks={setTasks} />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        showCompleted={showCompleted}
      />
    </div>
  )
}

export default App
