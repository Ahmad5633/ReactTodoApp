import React, { useState, useEffect } from "react";

function TodoForm({ onSubmit, editingTodo, onCancel }) {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (editingTodo) {
      setTaskName(editingTodo.name);
      setStatus(editingTodo.status);
    } else {
      setTaskName("");
      setStatus("Todo");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onSubmit(taskName, status);
      setTaskName("");
      setStatus("Todo");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="taskName">
          Task Name
        </label>
        <input
          id="taskName"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          placeholder="Enter task"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="status">
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="Todo">Todo</option>
          <option value="Complete">Complete</option>
          <option value="In Progress">In Progress</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingTodo ? "Update Task" : "Add Task"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
