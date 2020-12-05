import React from 'react';
import './Person.css';

export interface IPersonProps {
  id: string,
  name: string,
  age: number,
  click?: (event: any) => void,
  changed?: (event: any) => void,
  children?: React.ReactNode
};

const person: React.FC<IPersonProps> = (props: IPersonProps) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
}

export default person;