import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import { IPersonProps } from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

export interface IAppProps {
  appTitle: string
};

interface IAppState {
  persons: Array<IPersonProps>;
  otherState: string
  showPersons: boolean,
  showCockpit: boolean
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    console.log('[App.tsx] constructor');
  }

  state = {
    persons: [
      { id: "1", name: 'Max', age: 28 },
      { id: "2", name: 'Manu', age: 29 },
      { id: "3", name: 'Stephanie', age: 26 }
    ] as IPersonProps[],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  } as IAppState;

  static getDerivedStateFromProps(props: IAppProps, state: IAppState) {
    console.log('[App.tsx] getDerivedStateFromProps', props);

    return state;
  }

  // componentWillMount() {
  //   console.log('[App.tsx] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.tsx] componentDidMount');
  }

  shouldComponentUpdate(nextProps: IAppProps, nextState: IAppState) {
    console.log('[App.tsx] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.tsx] componentDidUpdate');
  }

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
    console.log('[App.tsx] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} >
      </Persons>;
    }

    return (
      <WithClass classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false })
          }}
        >Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
          />
        ) : null}
        {persons}
      </WithClass>
    );
  }
}

export default App;
