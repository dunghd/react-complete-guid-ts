import React from 'react';

export interface IWithClassProps {
  classes: string
};

const withClass = (props: React.PropsWithChildren<IWithClassProps>) => (
  <div className={props.classes}>
    {props.children}
  </div>
);

export default withClass;