import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'madeline', age:'20'},
      {name:'lydiah', age:'22'},
      {name: 'Russ', age:'31'}
    ]
  }
 switchNameHandler = () => {
   console.log('Was clicked!');
 }
  render() {
    return (
      <div className="App">
       
        <h1> HI im the react app</h1>
        <p>This is really working </p>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}> My hobbies : talking</Person>
        <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}/>
        
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', null, 'does this work now'));
  }
}

export default App;
