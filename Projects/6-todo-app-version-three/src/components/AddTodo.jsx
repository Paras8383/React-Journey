import { useRef } from 'react'
import { BiMessageAdd } from "react-icons/bi";
function AddTodo({ handleAddButton }){

  const todoTextElement = useRef()
  const todoDateElement = useRef()

  const addButton = (event) => {
    event.preventDefault();
    let todoText = todoTextElement.current.value;
    let todoDate = todoDateElement.current.value;
    todoTextElement.current.value= "";
    todoDateElement.current.value="";
    handleAddButton(todoText, todoDate)
  }
return  (
     <div className="container text-center">
  <form className="row kg-row" onSubmit={addButton}>
    <div className="col-6">
      <input type="text" placeholder="Enter ToDo here" ref={todoTextElement}/>
    </div>
    <div className="col-4">
     <input type="date" ref={todoDateElement} />
    </div>
    <div className="col-2">
      <button className="btn btn-success kg-button"><BiMessageAdd />
</button>
    </div>
  </form>
  </div>
)
}
export default AddTodo