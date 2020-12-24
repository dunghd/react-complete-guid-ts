import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

export interface IPersonProps {
  id: string,
  name: string,
  age: number,
  click?: (event: any) => void,
  changed?: (event: any) => void,
  children?: React.ReactNode,
  isAuth: boolean
};

interface IPersonState { };

class Person extends Component<IPersonProps, IPersonState> {
  constructor(props: IPersonProps) {
    super(props);
    this.inputElement = React.createRef();
  }

  static contextType = AuthContext;

  // inputElement: HTMLInputElement | null = null;
  inputElement: React.RefObject<HTMLInputElement>;

  componentDidMount() {
    // this.inputElement?.focus();
    this.inputElement.current?.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.tsx] rendering...');

    return (
      <Aux>
        { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p> {this.props.children}</p>
        <input
          // ref={(inputEl) => { this.inputElement = inputEl }}
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}>
        </input>
      </Aux>
    );
  };
}

export default withClass(Person, classes.Person);