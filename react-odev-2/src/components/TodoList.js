import React from "react";

const TodoList = ({ newTodos, deleteTodo, checkTodo }) => {
  return (
    <ul className="todo-list">
      {newTodos &&
        newTodos.map((todo) => (
          <li className={todo.done ? "completed" : ""} key={todo.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => checkTodo(todo)}
              />
              <label>{todo.name}</label>
              <button
                className="destroy"
                onClick={() => deleteTodo(todo)}
              ></button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
