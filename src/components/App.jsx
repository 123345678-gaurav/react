import React, { useState } from "react";
import Todolist from "./Todolist";


const App = () =>{

  const [listItem , setlistItem] = useState("");
  const [items, setitems] = useState([]);

 
  const handleChange = (event) => {
    setlistItem(event.target.value);
  };

  const handleClick = () =>{
    setitems((olditems) => {
return [...olditems , listItem];
    });
    setlistItem("");
  };
  const handledelete = (id) =>{
    console.log("Deleted");
    setitems((olditems) =>{
      return olditems.filter((arrElem , index) => {
return index !== id;
      })
    })
};


return(
<>
<div className="main_class">
  <div className="child_class">
    <h1>ToDo List</h1>
    <input type="text" placeholder="Add Items" value={listItem} onChange={handleChange}></input>
    <button onClick={handleClick}>+</button>
    <ol>

    {items.map((item , index) => {
      return <Todolist 
      item={item}
        key={index}
        id={index}
        onselect={handledelete}
      />;

    })}

    </ol>
  </div>
</div>
</>
  )

};

export default App;
