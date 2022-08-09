import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Perry.css";
import tubbyImg from './tubby.jpg';

function Tubby() {
  return (
    <>
        <h1>Hello from Perry!!!</h1>
        <div className="Perry">
        <img src={tubbyImg} alt="tubby dog" />
        <Message>
            <h1><Link to="/dogs">go back</Link></h1>
        </Message>
        </div>
    </>
  );
}

export default Tubby;
