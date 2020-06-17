import React from 'react';

import classes from './Person.css';

const Person = ( props ) => {
    console.log('[Person.js] rendering...');
    return (
        //<div className= "Person" style = {style}>
        <div className = {classes.Person}>
        <p onClick={props.click}>
             Hi i'm {props.name } i am {props.age} years old</p>

        <p> {props.children} </p>
        <input type= "text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};
export default Person;