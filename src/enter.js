import React, {useState} from 'react'; 
import './enter.css'; 
import FilterButton from './filterButton';


  


function Enter(props) {

    let FILTERS_MAP = {
        'All Tasks' : () => true,
        'Active' : task => !task.completed , 
        'completed' : task => task.completed
      }
  const FILTERS_NAME = Object.keys(FILTERS_MAP); 

    const [name , setName] = useState('');
    const [filter, setfilter] = useState('All Tasks');
    const filterList = FILTERS_NAME.map(name => (
        <FilterButton key = {name} name = {name} isPressed = {name === filter} setFilter = {setfilter} />
    ));
    function handleSubmit(e) {
        e.preventDefault(); 
        props.addTask(name); 
        setName('');
        console.log(FILTERS_NAME.filter(FILTERS_MAP["All Tasks"]))
    }
    function handleChange(e) {
        setName(e.target.value)
    }
    return(
        <div className='input'>
        <form onSubmit={handleSubmit}>
            <div className='input__addTask'>
                <input
                type ="text" 
                id = "input-task"
                className='input__addTask__enter'
                name='text'
                autoComplete='off' 
                onChange={handleChange}
                value={name}
                />
                <button className=' input__addTask__add ' type='submit'  > 
                        Add 
                </button>
            </div>
        </form>
            <div className='input__select'>
                {filterList}  
            </div>
        </div>
    )
 
}
export default Enter; 