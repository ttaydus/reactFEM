import React from 'react';
import { render } from 'react-dom'
// import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {

//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Chubbs",
//       animal: "Dog",
//       breed: "Tasmanian Devil"
//     }),
//     React.createElement(Pet, {
//       name: "Mr. Bo Jangles",
//       animal: "Cat",
//       breed: "Mixed"
//     }),
//     React.createElement(Pet, {
//       name: "Flap",
//       animal: "Bird",
//       breed: "Exotic"
//     })
//   ]);
// };

return (
  <div>
    <h1 id="somehing-important">Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Chubbs" animal="Dog" breed="Tasmanian Devil"/>
      <Pet name="Mr. Bo Jangles" animal="Cat" breed="Mixed"/>
      <Pet name="Flap" animal="" breed="Parrott"/> */}
  </div>
  )
};

render(<App />, document.getElementById("root"));
