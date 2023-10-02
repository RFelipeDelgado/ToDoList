import React, {useState} from 'react';

import './App.css'
import FormularioTareas from './components/Form'
import Header from './components/Header.jsx'
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([])

  const [showCompleted, setShowCompleted] = useState(false)
  return (
    <div className='contenedor'>
      <Header setShowCompleted={setShowCompleted} showCompleted={showCompleted}/>
      <FormularioTareas tasks={tasks} setTasks={setTasks}/>
      <TaskList 
      tasks={tasks} 
      setTasks={setTasks}
      showCompleted={showCompleted}
      />
    </div>
  )
}

export default App
