import React from 'react';

const withClass = <P, S>(WrappedComponent: React.ComponentClass<P, S>, className: string) => {
  return (props: P) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
};

export default withClass;