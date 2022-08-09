import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
// import vendingMachineImg from "./VendingMachine.png";

function HomePage() {
    return (
    <div
    //   className="VendingMachine"
    //   style={{ backgroundImage: `url(${vendingMachineImg})` }}
    >
      <Message>
        <h1>hello, here is dog finder app</h1>
      </Message>
      <Message>
        <h1><Link to="/dogs/perry">Perry</Link></h1>
        {/* <h1><Link to="/chips">chips</Link></h1>
        <h1><Link to="/sardines">fresh sardines</Link></h1> */}
      </Message>
    </div >
  );
}

export default HomePage;
