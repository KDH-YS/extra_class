import "./TodoItem.css"
const TodoItem = () =>{
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">Todo...</div>
      <div className="date">Date</div>
    </div>

  );
}

export default TodoItem;