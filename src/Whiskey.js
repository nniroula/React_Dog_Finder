import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Perry.css";
import whiskeyImg from './whiskey.jpg';

function Whiskey() {
  return (
    <>
        <h1>Hello from Perry!!!</h1>
        <div className="Perry">
            <img src={whiskeyImg} alt="whiske dog" />
            <Message>
                <h1><Link to="/dogs">go back</Link></h1>
            </Message>
        </div>
    </>
  );
}

export default Whiskey;
