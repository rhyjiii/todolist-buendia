import React, { useState, } from "react";
import "../App.css";

function TaskList() {
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);
    const [showNote, setShowNote] = useState(false);
  
    const handleChange = (event) => {
      setInputText(event.target.value);
    };
  
    const addItems = () => {
      if (inputText.trim() !== '') {
        setItems([...items, inputText]);
        setInputText('');
        setShowNote(false);
      } else {
        setShowNote(true);
      }
    };
  
    const deleteItem = (index) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday:'long',
        today: 'numeric',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

return (
    <div className="border">
     <div className="date">{formattedDate}</div>
      <div className="head">
        <h2>To-Do List....</h2>
      </div>
      <div className="forms">
        <input onChange={handleChange} type="text" placeholder="Assign Task...." value={inputText} required/>
        <button className="button" onClick={addItems}>
          <span className="span">Assign</span> 
        </button>
        {showNote && <p>Please fill up the input field.</p>}
      </div>
      <div>
        <ul  className="list">
          {items.map((todoItem, index) => (
            <li key={index}>
              <span>{todoItem}</span>
              <button className="delete" onClick={() => deleteItem(index)}>
                <span className="span">Delete</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TaskList;