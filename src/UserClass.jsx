import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // not do this
    // this.state = {
    //   count: 0,
    // };
    console.log("Constructor UserClass");
  }

  componentDidMount() {
    console.log("component din mount UserClass ");
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log("Rneder UserClass");
    return (
      <div>
        <h1> Class Based Component </h1>
        <h1>Name : {name}</h1>
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
