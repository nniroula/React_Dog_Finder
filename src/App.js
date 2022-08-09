import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import VendingMachine from "./VendingMachine";
// import Soda from "./Soda";
import HomePage from "./HomePage";
import Perry from "./Perry";
import Duke from './Duke';
import Tubby from "./Tubby";
import Whiskey from "./Whiskey";

function App() {

    // preload App with default props
    // App.defaultProps = {

    /*
    const defaultProps = {
        dogs: [
          {
            name: "Whiskey",
            age: 5,
            src: whiskey,
            facts: [
              "Whiskey loves eating popcorn.",
              "Whiskey is a terrible guard dog.",
              "Whiskey wants to cuddle with you!"
            ]
          },
          {
            name: "Duke",
            age: 3,
            src: duke,
            facts: [
              "Duke believes that ball is life.",
              "Duke likes snow.",
              "Duke enjoys pawing other dogs."
            ]
          },
          {
            name: "Perry",
            age: 4,
            src: perry,
            facts: [
              "Perry loves all humans.",
              "Perry demolishes all snacks.",
              "Perry hates the rain."
            ]
          },
          {
            name: "Tubby",
            age: 4,
            src: tubby,
            facts: [
              "Tubby is really stupid.",
              "Tubby does not like walks.",
              "Angelina used to hate Tubby, but claims not to anymore."
            ]
          }
        ]
      }
      */
    // above is the prealoaded props
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dogs" exact>
          <HomePage />
        </Route>
        <Route exact path="/dogs/perry">
            <Perry />
        </Route>
        <Route exact path="/dogs/duke">
            <Duke />
        </Route>
        <Route exact path="/dogs/tubby">
            <Tubby />
        </Route>
        <Route exact path="/dogs/whiskey">
            <Whiskey />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
