import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
