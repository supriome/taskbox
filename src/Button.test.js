import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('render button hello world', () => {
	const { getByText } = render(<Button />);
	const Element = getByText(/button hello world/i);
	expect(Element).toBeInTheDocument();
});
