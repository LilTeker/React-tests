import React from "react";
import reactDom from "react-dom";

function HelloWorld() {
  return(
    <div>
      <Hello/>
    </div>
  ); 
}

function Hello() {

  let bool = false;

  return(
    <span>Holas {bool ? "verda" : "mentiras"}</span>
  );
}

reactDom.render(
  <HelloWorld/>, document.querySelector("#root")
);