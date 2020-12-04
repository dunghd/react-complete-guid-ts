import React, { Component } from 'react';
import './App.css';
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
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ] as IPersonProps[],
    otherState: 'some other value',
    showPersons: false
  } as IAppState;

  switchNameHandler = (newName: string) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ] as IPersonProps[]
    });
  };

  nameChangedHandler = (event: any) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 },
      ] as IPersonProps[]
    });
  };

  togglePersonHandler = () => {
    const doseShow = this.state.showPersons;

    this.setState({ showPersons: !doseShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}
        >Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
