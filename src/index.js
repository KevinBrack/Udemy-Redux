import React from "react";
import ReactDOM from "react-dom";

const YoutubeAPI = process.env.YOUTUBE_KEY;

// Create a new component
// This component should produce some html
const App = () => {
  console.log(YoutubeAPI);
  return <div>Hi!</div>;
};

// Take this component's generated html and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector("#app"));
