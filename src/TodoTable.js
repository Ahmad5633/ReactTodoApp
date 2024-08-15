import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"; // Importing Heroicons

function TodoTable({ todos = [], onRemove, onEdit }) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            {" "}
            <th className="px-4 py-2 text-left text-gray-600"> # </th>
            <th className="px-4 py-2 text-left text-gray-600">Task Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Status</th>
            <th className="px-4 py-2 text-left text-gray-600">Edit</th>
            <th className="px-4 py-2 text-left text-gray-600">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className="border-b border-gray-200">
              <td className="px-4 py-2">{todo.id}</td>
              <td className="px-4 py-2">{todo.name}</td>
              <td className="px-4 py-2">{todo.status}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => onEdit(todo)}
                  className="p-2 border-2 border-blue-500 rounded-lg text-blue-500 hover:bg-blue-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <PencilIcon className="h-6 w-6" />
                </button>
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => onRemove(todo.id)}
                  className="p-2 border-2 border-gray-500 rounded-lg text-gray-500 hover:bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <TrashIcon className="h-6 w-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoTable;
