import React from 'react';
import styled from 'styled-components';

//import './Person.css';


const StyledDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 5px solid blue;
            box-shadow: 0 2px 3px #ccc;
            padding:16px;
            text-align: center;

            @media(min-width: 500px){
                    width: 450px;
            } 
            `;

const Person = ( props ) => {
//    const style = {
  //      '@media (min-width: 500px)': {
    //        width: '450px'
      //  }
    //}
    return (
        //<div className= "Person" style = {style}>
        <StyledDiv>
        <p onClick={props.click}>
             Hi i'm {props.name } i am {props.age} years old</p>

        <p> {props.children} </p>
        <input type= "text" onChange={props.changed} value={props.name}></input>
        </StyledDiv>
    )
};
export default Person;