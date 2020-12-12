import React from 'react';
import styled from 'styled-components';

import './Person.css';

export interface IPersonProps {
  id: string,
  name: string,
  age: number,
  click?: (event: any) => void,
  changed?: (event: any) => void,
  children?: React.ReactNode
};

const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px)  {
        width: 450px;
    }
  `;

const person: React.FC<IPersonProps> = (props: IPersonProps) => {
  const style = {
    '@media (min-width: 600px)': {
      width: '450px',
      backgroundColor: 'red'
    }
  };

  return (
    // <div className="Person" style={style}>
    <StyleDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p> {props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </StyleDiv >
  );
}

export default person;