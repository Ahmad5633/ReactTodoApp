import React, { useState } from "react";
import TodoTable from "./TodoTable";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [nextId, setNextId] = useState(1);

  const addTodo = (taskName, status) => {
    setTodos([...todos, { id: nextId, name: taskName, status }]);
    setNextId(nextId + 1);
  };

  const editTodo = (id, updatedTaskName, updatedStatus) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, name: updatedTaskName, status: updatedStatus }
          : todo
      )
    );
    setEditingTodo(null);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (todo) => {
    setEditingTodo(todo);
    setShowForm(true);
  };

  const handleFormSubmit = (taskName, status) => {
    if (editingTodo) {
      editTodo(editingTodo.id, taskName, status);
    } else {
      addTodo(taskName, status);
    }
    setShowForm(false);
  };

  const handleCancel = () => {
    setEditingTodo(null);
    setShowForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List Demo App</h1>
      <span className=" bg-yellow-100">Do it now</span>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setEditingTodo(null);
            setShowForm(true);
          }}
          className="bg-white border-2 border-blue-500 text-blue-500 px-4 py-2 rounded shadow-md hover:bg-blue-100 hover:shadow-lg transition-shadow duration-300"
        >
          Add Task
        </button>
      </div>
      {showForm && (
        <TodoForm
          onSubmit={handleFormSubmit}
          editingTodo={editingTodo}
          onCancel={handleCancel}
        />
      )}
      <TodoTable todos={todos} onRemove={removeTodo} onEdit={startEditing} />
    </div>
  );
}

export default App;
