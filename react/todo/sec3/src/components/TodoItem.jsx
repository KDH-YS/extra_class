import { useReducer } from "react";
import "./TodoItem.css"
const TodoItem = ({id,isDone,content,date,onUpdate,onDelete}) =>{
  const check = ()=>{
    onUpdate(id);
  }
  const Delete = ()=>{
    onDelete(id);
  }
  useReducer
  return (
    <div className="TodoItem">
      <input checked={isDone} type="checkbox" onChange={check}/>
      <div className="content">{content}</div>
      
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={Delete}>삭제</button>
    </div>
  );
}

export default TodoItem;