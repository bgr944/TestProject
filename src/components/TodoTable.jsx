import React from "react";

function TodoTable(props) {
    return (
        <>
          <table>
            <thead>
              <tr>
              <th>Date</th>
              <th>Priority</th>
                <th>Description</th>
          </tr>
          </thead>
          <tbody>
              {props.todos.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.priority}</td>
                      <td>{item.description}</td>
                      <td><button onClick={() => props.deleteTodo(index)}>Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoTable;