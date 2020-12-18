import React from 'react';
import { IPersonProps } from '../Persons/Person/Person';

import classes from './Cockpit.module.css';

export interface ICockpitProps {
  persons: IPersonProps[],
  showPersons: boolean,
  clicked: (event: any) => void
};

const cockpit = (props: ICockpitProps) => {

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >Toggle Persons
    </button>
    </div>
  );
};

export default cockpit;