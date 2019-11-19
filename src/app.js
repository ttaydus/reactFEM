import React from 'react';
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Chubbs",
      animal: "Dog",
      breed: "Tasmanian Devil"
    }),
    React.createElement(Pet, {
      name: "Mr. Bo Jangles",
      animal: "Cat",
      breed: "Mixed"
    }),
    React.createElement(Pet, {
      name: "Flap",
      animal: "Bird",
      breed: "Exotic"
    })
  ]);
};

render(React.createElement(App), 
document.getElementById("root"));
