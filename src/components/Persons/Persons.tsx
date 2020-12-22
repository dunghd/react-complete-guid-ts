import React, { PureComponent } from 'react';
import Person, { IPersonProps } from './Person/Person';

export interface IPersonsProps {
  persons: IPersonProps[],
  clicked: (index: number) => void,
  changed: (event: any, personId: string) => void,
  children?: React.ReactNode
};

interface IPersonsState { };

class Persons extends PureComponent<IPersonsProps, IPersonsState> {
  // static getDerivedStateFromProps(props: IPersonsProps, state: IPersonsState) {
  //   console.log('[Persons.tsx] getDerivedStateFromProps');  
  //   return state;
  // }

  // componentWillReceiveProps(props: IPersonsProps) {
  //   console.log('[Persons.tsx] componentWillReceiveProps', props);
  // }

  // shouldComponentUpdate(nextProps: IPersonsProps, nextState: IPersonsState) {
  //   console.log('[Persons.tsx] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons
  //     || nextProps.changed !== this.props.changed
  //     || nextProps.clicked !== this.props.clicked) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps: IPersonsProps, prevState: IPersonsState) {
    console.log('[Persons.tsx] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps: IPersonsProps, prevState: IPersonsState, snapshot: object) {
    console.log('[Persons.tsx] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.tsx] componentWillUnmount');
  }

  render() {
    console.log('[Persons.tsx] rendering...');

    return <>{this.props.persons.map((person, index) => {
      return <Person
        id={person.id}
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)} />
    })} </>
  };
};

export default Persons;