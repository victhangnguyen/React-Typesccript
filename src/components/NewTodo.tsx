import React from 'react';
import "./NewTodo.css"

type NewTodoProps = {
  onAddTodo: (enteredText: string) => void;
};
//! onAddTodo will be a function that will point at a function
//! expects one parameter that will be the Text

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = React.useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault(); //! to prevent debt default which is to send a Real Request to the Server (Browser default)
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };
  console.log(textInputRef);
  return (
    <form action="" onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor="todo-text">TodoText</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD BUTTON</button>
    </form>
  );
};

export default NewTodo;
