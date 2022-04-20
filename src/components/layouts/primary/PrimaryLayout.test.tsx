/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import React from 'react';
import PrimaryLayout from './PrimaryLayout';

describe('BaseTemplate', () => {
    it('renders the given children', () => {
        render(
            <PrimaryLayout>
                <p>Test</p>
            </PrimaryLayout>
        );

        const childrenElement = screen.getByText('Test');
        expect(childrenElement).toBeInTheDocument();
        expect(childrenElement).toHaveTextContent('Test');
        expect(childrenElement).toBeInstanceOf(HTMLParagraphElement);
    });
});
