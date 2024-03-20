import { useState } from 'react'

import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { ShowTask } from './components/ShowTask'

import './App.css'
import { useEffect } from 'react'

function App() {
  const [tasklist, setTasklist] = useState( JSON.parse(localStorage.getItem("tasklist_in_LocalStorage")) || []); 
  const [task, setTask] = useState({});

  useEffect(()=>{
    localStorage.setItem("tasklist_in_LocalStorage",JSON.stringify(tasklist))
  } , [tasklist])

  return (
    <div className="App">
      <Header />
      <AddTask 
      tasklist={tasklist} 
      setTasklist={setTasklist} 
      task={task} 
      setTask={setTask} 
      />
      <ShowTask 
      tasklist={tasklist} 
      setTasklist={setTasklist} 
      task={task} 
      setTask={setTask} 
      />
    </div>
  )
}

export default App
