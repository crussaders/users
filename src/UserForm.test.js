import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import UserForm from './UserForm';

describe('UserForm', () => {
  test('renders the form correctly', () => {
    render(<UserForm onUserAdd={() => {}} />);
    
    // Check if the name input is rendered
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    
    // Check if the email input is rendered
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    
    // Check if the button is rendered
    expect(screen.getByRole('button', { name: /add user/i })).toBeInTheDocument();
  });

  test('updates input fields correctly', () => {
    render(<UserForm onUserAdd={() => {}} />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    
    // Simulate user typing into the name input
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
    
    // Simulate user typing into the email input
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput.value).toBe('john@example.com');
  });

  test('submits the form correctly', () => {
    const mockOnUserAdd = jest.fn();
    render(<UserForm onUserAdd={mockOnUserAdd} />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const button = screen.getByRole('button', { name: /add user/i });
    
    // Simulate user typing into the inputs
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    
    // Simulate form submission
    fireEvent.click(button);
    
    // Check if the onUserAdd function was called with the correct data
    expect(mockOnUserAdd).toHaveBeenCalledWith({ name: 'John Doe', email: 'john@example.com' });
    
    // Ensure the onUserAdd function was called exactly once
    expect(mockOnUserAdd).toHaveBeenCalledTimes(1);
  });
});
