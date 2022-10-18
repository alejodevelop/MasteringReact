import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(props){
  return <Entry id={props.id} key={props.id} icon={props.emoji} name={props.name} meaning={props.meaning} />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        
        {emojipedia.map(createEmoji)}
       
      </dl>
    </div>
  );
}

export default App;
