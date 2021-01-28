import React from "react";
import ReactDOM from "react-dom";

const Todolist = (props) => {

   
    return (
        <>

    <li>{props.item}
    <button className="deletebutton" onClick={() => {

    props.onselect(props.id);
    }}>x</button>
    </li>
    </>
    );

};

export default Todolist;
