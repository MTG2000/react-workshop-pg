const { createContext, useState } = require("react");

export const TodosContext = createContext();

const initialData = [
  { id: 1, text: "Do The Dishes", isCompleted: false },
  { id: 2, text: "Take out the trash", isCompleted: true },
  { id: 3, text: "Watch AOT", isCompleted: false },
];

let idCounter = 10;

export default function TodosContextProvider(props) {
  const [todos, setTodos] = useState(initialData);
  const [filter, setFilter] = useState("all");

  const handleAddTodo = (text) => {
    const newTodo = {
      id: idCounter++,
      text: text,
      isCompleted: false,
    };
    // Add todo
    setTodos([...todos, newTodo]);
  };

  const handleRemove = (id) => {
    // REMOVE TODO
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    // TOGGLE TODO
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      })
    );
  };

  const handleSetFilter = (value) => setFilter(value);

  const filteredTodos = todos.filter((todo) => {
    return (
      filter === "all" ||
      (filter === "completed" && todo.isCompleted) ||
      (filter === "pending" && !todo.isCompleted)
    );
  });

  return (
    <TodosContext.Provider
      value={{
        todos: filteredTodos,
        filter,
        setFilter,
        handleAddTodo,
        handleRemove,
        handleSetFilter,
        handleToggle,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
