import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompSubHeader from './CompSubHeader';

describe('<CompSubHeader />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<CompSubHeader />);
    const compSubHeader = getByTestId('CompSubHeader');

    expect(compSubHeader).toBeInTheDocument();
  });
});