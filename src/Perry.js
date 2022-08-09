import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Perry.css";
import perryImg from './perry.jpg';

function Perry() {
  return (
    <>
        <h1>Hello from Perry!!!</h1>
        <div className="Perry">
        <img src={perryImg} alt="perry dog" />
        <Message>
            <h1><Link to="/dogs">go back</Link></h1>
        </Message>
        {/* <img src={perryImg} alt="perry dog" /> */}
        </div>
    </>
  );
}

export default Perry;
