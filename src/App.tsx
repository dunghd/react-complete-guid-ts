import React, { Component } from 'react';

import classes from './App.css';
import Person, { IPersonProps } from './Person/Person';

export interface IAppProps {
}

interface IAppState {
  persons: Array<IPersonProps>;
  otherState: string
  showPersons: boolean
}

class App extends Component<IAppProps, IAppState> {
  state = {
    persons: [
      { id: "1", name: 'Max', age: 28 },
      { id: "2", name: 'Manu', age: 29 },
      { id: "3", name: 'Stephanie', age: 26 }
    ] as IPersonProps[],
    otherState: 'some other value',
    showPersons: false
  } as IAppState;

  nameChangedHandler = (event: any, id: string | undefined) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex: number) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doseShow = this.state.showPersons;

    this.setState({ showPersons: !doseShow });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              id={person.id}
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => { this.nameChangedHandler(event, person.id) }} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push('red');
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={classes.Button}
          onClick={this.togglePersonHandler}
        >Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
