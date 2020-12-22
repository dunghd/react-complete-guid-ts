import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

export interface ICockpitProps {
  title: string,
  // persons: IPersonProps[],
  personsLength: number,
  showPersons: boolean,
  clicked: (event: any) => void
};

const Cockpit = (props: ICockpitProps) => {
  useEffect(() => {
    console.log('[Cockpit.tsx useEffect]');

    const timer = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.tsx cleanup work in useEffect]');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.tsx 2nd useEffect]');

    return () => {
      console.log('[Cockpit.tsx cleanup work in 2nd useEffect]');
    };
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >Toggle Persons
    </button>
    </div>
  );
};

export default React.memo(Cockpit);