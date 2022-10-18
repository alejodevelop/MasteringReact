import React, { useState } from "react";

function ToDoItem(props) {

    function handleClick() {

    }

    return <div onClick={() => {
        props.onCheck(props.onCheck(props.id));
    }}>
        <li onClick={handleClick} >{props.text}</li>
    </div>;
}


export default ToDoItem;







// function ToDoItem(props) {

//     const [click, setClick] = useState(false);

//     function getClick(event) {
//         setClick(prevValue => { return !prevValue });
//         console.log(click);
//     };


//     return 
// }