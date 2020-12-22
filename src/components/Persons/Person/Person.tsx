import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';

export interface IPersonProps {
  id: string,
  name: string,
  age: number,
  click?: (event: any) => void,
  changed?: (event: any) => void,
  children?: React.ReactNode
};

interface IPersonState { };

class Person extends Component<IPersonProps, IPersonState> {
  render() {
    console.log('[Person.tsx] rendering...');

    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p> {this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}>
        </input>
      </Aux>
    );
  };
}

export default Person;