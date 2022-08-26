import React from 'react';
import "./TodoList.css"
//! an extra inerface that's totally optional
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (todoId: string) => void;
}

//! with React.FC type that is indicated is not a Regular Function but a Function Component
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
