import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
// import Radium from "radium";
import styled from "styled-components";

const StyledButton = styled.button`

  background-color: ${props => props.alt ? "red" : "green"} ;
  // 上の式は const funcName = function (props) {} と一緒　つまり関数を作ってpropsを引数として受け取っていてそのreturnに条件演算子を使っている
  color:white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? "pink" : "lightgreen"} ;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } ); //switching showPerson to false or true which triggers rerender and if statement below in the render
  }

  render () {
  
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons 
            persons ={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />
          {/* {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })} */}
        </div>
      );
      // style.backgroundColor = "red"
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red") // classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold") // classes = ["red", "bold"] need transforming to a string tho
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
