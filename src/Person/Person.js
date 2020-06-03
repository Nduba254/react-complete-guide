import React from 'react';

const Person = ( props ) => {
    return (
        <div className= "Person">
        <p onClick={props.click}>
             Hi i'm {props.name}  
             
             and i am {props.age} years old</p>

        <p> {props.children} </p>
        <input type= "text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};
export default Person;