/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import React from 'react';
import BaseTemplate from './BaseTemplate';

describe('BaseTemplate', () => {
    it('renders the given text', () => {
        render(<BaseTemplate sampleTextProp='Hello world!' />);

        const text = screen.getByText('Hello world!');
        expect(text).toBeInTheDocument();
        expect(text).toHaveTextContent('Hello world!');
    });
});
