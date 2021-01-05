import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Ash', age: 39},
      {name: 'Moo', age: 5},
      {name: "Sho", age: 34}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked')
    //this.state.persons[0].name = "Ashley";
    this.setState({
      persons: [
      {name: "Ashley", age: 39},
      {name: 'Matilda', age: 5},
      {name: "Sho", age: 34}
    ],
    showPersons: false
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: event.target.value, age: 39},
      {name: 'Matilda', age: 5},
      {name: "Sho", age: 34}
    ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button style={style} onClick={this.togglePersonHandler} >Toggle Persons</button>
        { 
        this.state.showPersons ? 
          <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangedHandler}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Moo')}>My Hobbies: Playing!</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div> : null
        }
        

      </div>
    );
  }
}

export default App;
