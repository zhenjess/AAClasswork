import React from "react";

const TodoIdx = (props) => {
  // debugger
  return (
    <div>
      <h2>All Todos</h2>
      <ul>
      {props.todos.map( todo => {
        return <li key={todo.id}>{todo.title}</li>
      })}
      </ul>
    </div>
  );
};

export default TodoIdx;