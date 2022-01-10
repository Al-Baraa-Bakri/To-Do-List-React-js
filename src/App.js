import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './enter';
import Enter from './enter';
import Task from './tesk';
import Content from './content';
import {nanoid} from 'nanoid'


function App() {

  const initDATA = [
    { id: 0, name: "Eat", completed: true },
    { id: 1, name: "Sleep", completed: !true },
    { id: 2, name: "Play", completed: !true }
  ];
  const [newTask, setTask] = useState('');
  const [DATA, setData] = useState(initDATA);
  function addTask(text) {
    if (text !== "") {
      let newTask = { id: "TODO-" + nanoid(), name: text, completed: false };
      setData([...DATA, newTask]);
    }
  }
  function deleteTask(id) {
    let newDataAfterDelete = DATA.filter(task => id !== task.id);
    setData(newDataAfterDelete);
  }

  function handleCheek(id) { 
    console.log(DATA.map(task => task)); 

    let newDataAfterAditCheek = DATA.map(task =>  {
      if (id === task.id) { 
        return {...task , completed : !task.completed}
      }
      return task
    }
      )
  //  console.log(newDataAfterAditCheek.map(task => task)); 
    setData(newDataAfterAditCheek);  
  }
  function handleActive() {
    console.log(DATA.map(task => task)); 
    let onlyActiveTasks = DATA.filter(task => 
        task.completed !== true
      )
  //  console.log(onlyActiveTasks.map(task => task)); 
      
      setData(onlyActiveTasks); 
  }
  function handleCompleted() {
    let onlyCompletedTasks = DATA.filter(task => 
      task.completed === true
    )
    setData(onlyCompletedTasks); 
  }
  function handleAll() {
    console.log(DATA)
    setData(DATA); 
  }

  //Handle Edit

  function editTask (id , newName) { 
    let newDataAfterAditName = DATA.map(task => {
       if (id === task.id) {
         if(newName !== "")
         return {...task , name : newName};
        
       }
       return task
      }
    )
    setData(newDataAfterAditName);
  }
  return (
    <div className='main'>
      <h1 className='heading'> What Need To Be Done ? </h1>
      <Enter addTask={addTask}  handleActive = {handleActive} handleCompleted = {handleCompleted} handleAll = {handleAll} />
      <Content DATA={DATA} newTask={newTask} deleteTask={deleteTask} editTask = {editTask} handleCheek = {handleCheek}/>
    </div>
  )
}
export default App; 
