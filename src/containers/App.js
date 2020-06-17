import React, { Component } from 'react';
import classes from './App.css';
//import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons'; 
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 'asd', name: 'Madeline',   age: 20 },

      { id: 'asf', name: 'Lydiah',   age: 22 },

      { id: 'asg', name: 'Russ',     age: 31 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }
  componentWillMount(){
    console.log('[App.js componentWillMount');
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  nameChangeHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    } );

    const person ={
      ...this.state.persons[personIndex]
    };

      ///const person = Object.assign({}, this .state.persons[personIndex])
      person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler= (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }
  
  render() {
    console.log('[App.js] render')
    let persons = null;

<<<<<<< HEAD:src/containers/App.js
    //dynamically rendering content (outputs our content to our template/fn)
    if (this.state.showPersons){
      persons = <Persons 
       persons = {this.state.persons}
       clicked ={this.deletePersonHandler}
       changed = {this.nameChangeHandler} />
    };
=======
    let btnClass = [ ] ;
    
    //dynamically rendering content (outputs our content to our template/fn)
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return(  <Person
              click= { () => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key = {person.id} 
              changed = {(event) => this.nameChangeHandler( event, person.id)} /> )
           

          })} 
          </div>
      );
      btnClass.push(classes.red);
    }

    const assignedClasses = [ ];
    if (this.state.persons.length <=2 ) {
      assignedClasses.push(classes.red); //classes =['red]
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    };

   return (
   
      <div className= {classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className = {assignedClasses.join('')} >This is really working!</p>
       <button className={btnClass.join('')}
        onClick={this.togglePersonsHandler}> Toggle persons
        </button>
>>>>>>> d0df53a7ebc379c0249067a6c978bf6fcb346100:src/App.js

   return (

      <div className= {classes.App}>
        <Cockpit 
        title= {this.props.appTitle}
        showPersons= {this.state.showPersons} 
        persons ={this.state.persons}
        clicked = {this.togglePersonsHandler}/>
        {persons}          
      </div>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
