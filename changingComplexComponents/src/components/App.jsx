import React, { useState } from "react";

function App() {

  const [FullName, setFullName] = useState({
    fname: "",
    lname: ""
  });

  function handleName(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    // this is a deconstruct if the values from above
    // const { value, name } = event.target;

    // if (inputName == "fName") {
    //   setFullName({ fname: newValue, lname: FullName.lname });
    // } else if (inputName == "lName") {
    //   setFullName({ fname: FullName.fname, lname: newValue });
    // }

    // i replace the simply method above for this that do the same because the cutest teacher dit it, but the other what i made is shorter
    setFullName(prevValue => {
      if (inputName === "fName") {
        return {
          fname: newValue,
          lname: prevValue.lname
        }
      } else if (inputName === "lName") {
        return {
          fname: prevValue.fname,
          lname: newValue
        }
      }
    });

    //event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {FullName.fname} {FullName.lname}</h1>
      <form>
        <input onChange={handleName} value={FullName.fname} name="fName" placeholder="First Name" />
        <input onChange={handleName} value={FullName.lname} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
