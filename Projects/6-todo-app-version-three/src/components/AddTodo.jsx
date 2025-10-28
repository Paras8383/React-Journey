import { useState } from 'react'
import { BiMessageAdd } from "react-icons/bi";
function AddTodo({ onAddButton }){
  const [todoText, setTodoText] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const addButton = () =>{
    onAddButton(todoText, todoDate);

    setTodoDate("");
    setTodoText("")
  }
return  (
     <div className="container text-center">
  <div className="row kg-row">
    <div className="col-6">
      <input type="text" placeholder="Enter ToDo here" value={todoText} onChange={(event) => setTodoText(event.target.value)}/>
    </div>
    <div className="col-4">
     <input type="date" value={todoDate} onChange={(event) => setTodoDate(event.target.value)}/>
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success kg-button" onClick={() => addButton(todoText, todoDate)}><BiMessageAdd />
</button>
    </div>
  </div>
  </div>
)
}
export default AddTodo