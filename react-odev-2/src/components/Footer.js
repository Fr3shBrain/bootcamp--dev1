import React from "react";

const Footer = ({ newTodos, setActiveFilter, clearCompleted }) => {
  return (
    <footer className="footer">
      {/* <!-- This should be `0 items left` by default --> */}
      <span className="todo-count">
        <strong>{newTodos.length}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a className="selected" onClick={() => setActiveFilter("All")}>
            All
          </a>
        </li>
        <li>
          <a onClick={() => setActiveFilter("Active")}>Active</a>
        </li>
        <li>
          <a onClick={() => setActiveFilter("Completed")}>Completed</a>
        </li>
      </ul>

      {/* <!-- Hidden if no completed items are left ↓ --> */}
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
