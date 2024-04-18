import React, { useState } from "react";
import "./App.css";
import UserClass from "./UserClass";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor of About ");
  }
  componentDidMount() {
    console.log("component din mount About  ");
  }
  render() {
    console.log("Render About");
    return (
      <main>
        {/* <About name={"Kunal Arya functional"} /> */}
        <UserClass name={"Kunal Arya Class "} />
      </main>
    );
  }
}

// export default function App() {
//   return (
//     <main>
//       {/* <About name={"Kunal Arya functional"} /> */}
//       <UserClass name={"Kunal Arya Class "} />
//     </main>
//   );
// }

// export const About = (props) => {
//   const [count, setcount] = useState(0);
//   const [count2, setcount2] = useState(0);

//   return (
//     <div>
//       <h1>About Team Page</h1>
//       <h3>Name : {props.name}</h3>
//       <h3>Location : Bhopal</h3>
//       <h3>Conatact : Kunalkrraj@gmail.com</h3>
//       <h3>Count: {count}</h3>
//       <h3>Count2: {count2}</h3>

//       <button onClick={() => setcount(count + 1)}>Increase</button>
//       <hr />
//     </div>
//   );
// };
