import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Perry.css";
import dukeImg from './duke.jpg';

function Duke() {
  return (
    <>
        <h1>Hello from Duke!!!</h1>
        <div className="Perry">
        <img src={dukeImg} alt="duke dog" />
        <Message>
            <h1><Link to="/dogs">go back</Link></h1>
        </Message>
        {/* <img src={perryImg} alt="perry dog" /> */}
        </div>
    </>
  );
}

export default Duke;
