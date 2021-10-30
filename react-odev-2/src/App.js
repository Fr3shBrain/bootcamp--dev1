import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

const initialData = [
  { id: "1", name: "Learn JavaScript", done: true },
  { id: "2", name: "Learn React", done: false },
  { id: "3", name: "Have a life!", done: false },
];

function App() {
  const [todos, setTodos] = useState(initialData);
  const [newTodos, setNewTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const defaultTodoItem = { id: Math.random(), name: "", done: false };
  const [todoItem, setTodoItem] = useState(defaultTodoItem);

  const onChangeInput = (event) => {
    setTodoItem({ ...todoItem, name: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!todoItem.name.length) {
      alert("Write something");
      return false;
    }
    setTodos([...todos, todoItem]);
  };

  console.log(todos);
  let todosMap = () => {
    return activeFilter === "Active"
      ? setNewTodos(todos.filter((todo) => todo.done === false))
      : activeFilter === "Completed"
      ? setNewTodos(todos.filter((todo) => todo.done === true))
      : setNewTodos(todos);
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [newTodos]);

  useEffect(() => {
    todosMap();
  }, [activeFilter, todos]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const checkTodo = (todo) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      )
    );
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo
            onSubmit={onSubmit}
            todoItem={todoItem}
            onChangeInput={onChangeInput}
          />
        </header>
        {/* <!-- This section should be hidden by default and shown when there are todos --> */}
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <TodoList
            newTodos={newTodos}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        </section>

        {/* <!-- This footer should hidden by default and shown when there are todos --> */}
        <Footer
          newTodos={newTodos}
          setActiveFilter={setActiveFilter}
          clearCompleted={clearCompleted}
        />
      </section>
    </div>
  );
}

export default App;
