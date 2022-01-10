import React , {useState} from 'react';
import './task.css';
function Task(props) {
    const [isEditing, setEdit] = useState(false); 
    const [newName, setnewName] = useState('')
    function handleChange(e) {
        
        setnewName(e.target.value); 
    }
    function handleSubmit(e) {
        console.log(newName);
        props.editTask(props.id , newName); 
        setnewName(''); 
        setEdit(false);
    }
    function handleCansel() {
        setEdit(false);
    }
    let viewTemplate = (
        <>
       
        <div className='cheak-task'>
            <input type = 'checkbox' defaultChecked = {props.completed} htmlFor = {props.id} onClick={() => props.handleCheek(props.id)}/>
            <span> {props.name} </span>
        </div>
            <div className='content__task__options'> 
                <button className='content__task__edit' onClick = {() => setEdit(true) }> 
                    Edit 
                </button>
                <button className='content__task__delete' onClick = {() => props.deleteTask(props.id)} > 
                    Delete 
                </button>
            </div>
        
            </>
    )

    
    let editTemplate = (
      
        <div className='editView'>
            <p> New Name For {props.name} </p>
            
            <input type = "text" id = {props.id} onChange={handleChange}></input>
            <div className='content__task__options'> 
            <button className='content__task__cansel' onClick={handleCansel}> 
                Cansel 
            </button>
            <button className='content__task__save'  onClick={handleSubmit}> 
                Save 
            </button>
            </div>
        </div>
    
      
    )
    return( <li className="content__task">{isEditing ? editTemplate : viewTemplate}</li> )
}
export default Task; 