import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function HomePage() {
    return (
    <div>
      <Message>
        <h1>hello, here is dog finder app</h1>
      </Message>
      <Message>
        <h3><Link to="/dogs/perry">Perry</Link></h3>
        <h3><Link to="/dogs/duke">Duke</Link></h3>
        <h3><Link to="/dogs/tubby">Tubby</Link></h3>
        <h3><Link to="/dogs/whiskey">Whiskey</Link></h3>
      </Message>
    </div >
  );
}

export default HomePage;
