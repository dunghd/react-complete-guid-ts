import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import { IPersonProps } from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockpit/Cockpit';

export interface IAppProps {
  appTitle: string
};

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
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} >
      </Persons>;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
