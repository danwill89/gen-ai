import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './card';

describe('Card component', () => {
  it('calculates name length correctly for a single character', () => {
    render(<Card name="A" age={20} />);
    expect(screen.getByText(/Name Length: 1/i)).toBeInTheDocument();
  });

  it('calculates name length correctly for a short name', () => {
    render(<Card name="Amy" age={25} />);
    expect(screen.getByText(/Name Length: 3/i)).toBeInTheDocument();
  });

  it('calculates name length correctly for a medium name', () => {
    render(<Card name="Samantha" age={30} />);
    expect(screen.getByText(/Name Length: 8/i)).toBeInTheDocument();
  });

  it('calculates name length correctly for a long name', () => {
    render(<Card name="Christopher" age={35} />);
    expect(screen.getByText(/Name Length: 11/i)).toBeInTheDocument();
  });

  it('calculates name length correctly for a name with spaces', () => {
    render(<Card name="John Doe" age={40} />);
    expect(screen.getByText(/Name Length: 8/i)).toBeInTheDocument();
  });
});
