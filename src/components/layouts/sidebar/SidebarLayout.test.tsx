/**
 * @jest-environment jsdom
 */

import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import React from 'react';
import SidebarLayout from './SidebarLayout';

describe('BaseTemplate', () => {
    it('renders the Home link', () => {
        render(<SidebarLayout />);

        const homeLink = screen.getByText('Home');
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveTextContent('Home');
        expect(homeLink).toBeInstanceOf(HTMLAnchorElement);
    });
    it('renders the About link', () => {
        render(<SidebarLayout />);

        const aboutLink = screen.getByText('About');
        expect(aboutLink).toBeInTheDocument();
        expect(aboutLink).toHaveTextContent('About');
        expect(aboutLink).toBeInstanceOf(HTMLAnchorElement);
    });
    it('renders the Contact link', () => {
        render(<SidebarLayout />);

        const contactLink = screen.getByText('Contact');
        expect(contactLink).toBeInTheDocument();
        expect(contactLink).toHaveTextContent('Contact');
        expect(contactLink).toBeInstanceOf(HTMLAnchorElement);
    });
    it('updates text on input', () => {
        render(<SidebarLayout />);

        const inputElement = screen.getByPlaceholderText('Search...');
        userEvent.type(inputElement, 'test');
        expect(inputElement).toHaveValue('test');
    });
});
