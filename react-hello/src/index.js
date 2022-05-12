import React, {useState, useEffect} from "react";
import reactDom from "react-dom";

function HelloWorld() {
  return(
    <div>
      <Hello bool={false}/>
    </div>
  ); 
}

function Hello({bool}) {

  const [stateBool, setBool] = useState("");

  useEffect(() => {
    console.log(`changed stateBoot to ${bool}`);
    setBool(false);
  });
  
  return(
    <span>Holas {stateBool ? "verda" : "mentiras"}</span>
  );
}

reactDom.render(
  <HelloWorld/>, document.querySelector("#root")
);