import React from 'react';
import './filterButton.css';
function FilterButton (props) {
    return (
        <button
        type='button'
        className={props.isPressed ? 'activeNow' : ''}
        onClick={() => props.setFilter(props.name)}
        > {props.name} </button>
    )
}
export default FilterButton; 