import React, { Component, PureComponent } from "react";

//Pure component : nó sẽ tích hợp sẵn method shouldComponentUpdate, và nó sẽ dụng cơ chế là shallow compare( ===)
export default class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      numberChild: 1,
      count: 1,
      intervalId: 0,
    };
    console.log("constructor child");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps child", props, state);
    return {
      ...state,
      numberChild: props.number * 2,
    };
  }

  componentDidMount() {
    let timer = setInterval(() => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
    this.setState({ intervalId: timer });
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("shouldComponentUpdate", nextProps, nextState, this.props);
  //     if (this.props.number === nextProps.number) {
  //       return false;
  //     }
  //     return true;
  //   }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    console.log("componentWillUnmount Child");
  }
  render() {
    console.log("render child", this.state.count);
    return <div>Child {this.state.numberChild}</div>;
  }

  //   componentDidMount() {
  //     // call api => data =>setState=>
  //     console.log("componentDidMount child");
  //   }
}
