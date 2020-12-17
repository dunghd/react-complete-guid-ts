import React, { Component, ErrorInfo } from "react";

export interface IErrorBoundaryProps {
};

interface IErrorBoundaryState {
  hasError: boolean,
  errorMessage: string
};

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  state = {
    hasError: false,
    errorMessage: ''
  } as IErrorBoundaryState;

  componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
    this.setState({ hasError: true, errorMessage: error.message });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    }
    else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;