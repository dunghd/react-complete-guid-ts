import React from 'react';
import Person, { IPersonProps } from './Person/Person';

export interface IPersonsProps {
  persons: IPersonProps[],
  clicked: (index: number) => void,
  changed: (event: any, personId: string) => void,
  children?: React.ReactNode
};

const persons = (props: IPersonsProps) => {
  return <>{props.persons.map((person, index) => {
    return <Person
      id={person.id}
      key={person.id}
      name={person.name}
      age={person.age}
      click={() => props.clicked(index)}
      changed={(event) => props.changed(event, person.id)} />
  })} </>
};

export default persons;