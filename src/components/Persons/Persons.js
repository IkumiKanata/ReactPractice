import React from "react";
import Person from "./Person/Person"

const persons = (props) => props.persons.map((person, index) => {
    return <Person
      click={() => props.clicked(index)}
      name={person.name} 
      age={person.age}
      key={person.id}
      changed={(event) => props.changed(event, person.id)} /> //3 props, persons, clicked, changed are given from App.js as props.  you dont wrap this with {} because this is not jsx, but vanilla js expression 
  });

export default persons;