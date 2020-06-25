//import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auxilliary from '../../../HOC/Auxilliary';
import classes from './Person.css';
import withClass from '../../../HOC/withClass';
import AuthContext from '../../../context/auth-context';




class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    
    render(){
    console.log('[Person.js] rendering...');
        return (
            <Auxilliary>
                    {this.context.authenticated?  <p>Authenticated!</p> :  <p>please log in</p> }
               
               
            <p onClick={this.props.click}>
                 Hi i'm {this.props.name } i am {this.props.age} years old</p>
    
            <p key ="i2"> {this.props.children} </p>
            <input key ="i3" 
           // ref= {(inputEl) => {this.inputElement = inputEl}}
           ref={this.inputElementRef}
            type= "text" 
            onChange={this.props.changed} 
            value={this.props.name} />
            </Auxilliary>
        );
    };
    }
  Person.PropTypes = {
      click: PropTypes.func,
      name: PropTypes.string,
      age: PropTypes.number,
      changed: PropTypes.func
  }
 
export default withClass(Person, classes.Person);