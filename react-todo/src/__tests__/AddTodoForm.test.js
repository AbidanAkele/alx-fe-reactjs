import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm Component', () => {
  test('renders AddTodoForm component', () => {
    render(<AddTodoForm addTodo={() => {}} />);
    expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Todo/i)).toBeInTheDocument();
  });

  test('calls addTodo function on form submission', () => {
    const addTodoMock = jest.fn();
    render(<AddTodoForm addTodo={addTodoMock} />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(addTodoMock).toHaveBeenCalledWith('New Todo');
  });
});
