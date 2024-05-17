import React, { Component } from "react";

interface IProps {
    children: React.ReactNode;
    appName: string;
}

interface IState {
    hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): IState {
    return { hasError: true };
  }

  public render() : React.ReactNode  {
    console.log('error state', this.state);
    if (this.state.hasError) {
      return <p>Failed to load {this.props.appName}</p>;
    }

    return <>{this.props.children}</>
  }
}

export default ErrorBoundary;