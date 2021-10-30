import React from "react";

const AddTodo = ({ onSubmit, todoItem, onChangeInput }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={todoItem.name}
        onChange={onChangeInput}
      />
    </form>
  );
};

export default AddTodo;
