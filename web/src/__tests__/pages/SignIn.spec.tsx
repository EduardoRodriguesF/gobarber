import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

// O que fazer quando react-router-dom for importado
jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});
