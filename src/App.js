import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
//import './Person/Person.css';



class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Madeline',   age: 20 },

      { id: 'asf', name: 'Lydiah',   age: 22 },

      { id: 'asg', name: 'Russ',     age: 31 }
    ],
    otherState: 'some other value',
    showPersons: false
  };


  nameChangeHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id == id;
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
    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        baclgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
//dynamically rendering content (outputs our content to our template/fn)
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person
            click= { () => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key = {person.id} 
            changed = {(event) => this.nameChangeHandler( event, person.id)} />

          })} 
          </div>
      );
    //  style.backgroundColor= 'red';
      //over right the hover to get new feature- wrap in square brackets since it is string.
      //style[':hover']= {
        //baclgroundColor: 'salmon',
        //color: 'black'
      //};
    }

    const classes = [ ];
      if (this.state.persons.length <=2 ) {
        classes.push('red'); //classes =['red]
      }
      if (this.state.persons.length <= 1){
        classes.push('bold'); //classes = ['red', 'bold']
      }


    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className = {classes.join (' ')} > This is really working!</p>
       <button
      className ="button"
        onClick={this.togglePersonsHandler}> Toggle persons
        </button>


        {persons}          
      </div>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
