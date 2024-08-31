import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn Jest/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);

    const addTodoInput = screen.getByPlaceholderText(/Add a new todo/i);
    const addTodoButton = screen.getByText(/Add/i);

    fireEvent.change(addTodoInput, { target: { value: 'Learn Testing' } });
    fireEvent.click(addTodoButton);

    expect(screen.getByText(/Learn Testing/i)).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    render(<TodoList />);

    const todoItem = screen.getByText(/Learn React/i);
    fireEvent.click(todoItem);

    expect(todoItem).toHaveClass('completed');
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass('completed');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);

    const addTodoInput = screen.getByPlaceholderText(/Add a new todo/i);
    const addTodoButton = screen.getByText(/Add/i);

    fireEvent.change(addTodoInput, { target: { value: 'Learn Testing' } });
    fireEvent.click(addTodoButton);

    const todoItem = screen.getByText(/Learn Testing/i);
    const deleteButton = screen.getByText(/Delete/i);

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
