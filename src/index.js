// Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// Create a React component

const App = () => {

  const buttonText = {text: 'Click me'};
  const Buttonstyle = {backgroundColor: 'black', color: 'white', margin: '0 3px'};
 
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name: &nbsp;
      </label>
      <input id="name" type="text" />
      <button style={Buttonstyle}>
          {buttonText.text}
      </button>
    </div>
  );
};

// Take the React component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
