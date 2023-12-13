import React from 'react';
import { render, screen } from '@testing-library/react';
import TestComponent from '../components/Test';


describe('Default Car', () => {
  test('renders default car', () => {
    render(<TestComponent />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});