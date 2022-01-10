import React , {useState} from 'react'; 
import Task from './tesk';
import './content.css'; 
function Content(props) {  
    let ourTasks = props.DATA.map(task => (
        <Task name = {task.name} id = {task.id} completed = {task.completed} key = {task.key} deleteTask = {props.deleteTask} editTask = {props.editTask}/>
    )
        )
    return(
    <div className='content'>
    <h3 className='num-task'> {props.DATA.length > 0 ? props.DATA.length : ''} {props.DATA.length > 1 ? 'Tasks' : props.DATA.length === 0 ? 'No Tasks' : 'Task' }  Remaining </h3>
    <ul>
        {ourTasks}
    </ul>
    </div>      
    )
}
export default Content; 