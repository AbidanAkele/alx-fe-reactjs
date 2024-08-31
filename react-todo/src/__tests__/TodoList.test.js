import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('adds a new todo', () => {
    render(<TodoList />);

    // Locate the input field and button in the AddTodoForm
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    // Simulate user input
    fireEvent.change(input, { target: { value: 'New Todo' } });

    // Simulate form submission
    fireEvent.click(button);

    // Verify that the new todo has been added to the list
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });
});
