import React, { Component } from 'react';
import './App.css';
import Person, { IPersonProps } from './Person/Person';

export interface IAppProps {
}

interface IAppState {
  persons: Array<IPersonProps>;
  otherState: string
}

class App extends Component<IAppProps, IAppState> {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ] as IPersonProps[],
    otherState: 'some other value'
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
        <h1>Hi, I'm React App</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler(`DDH!!!`)}
        > Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'DDH TEST 123')}
          changed={this.nameChangedHandler}
        >TEST TEST TEST</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
