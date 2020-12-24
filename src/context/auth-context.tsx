import React from 'react';

export interface IPropsAuthContext {
  authenticated: boolean,
  login: () => void
};

const authContext = React.createContext({
  authenticated: false,
  login: () => { }
} as IPropsAuthContext);

export default authContext;