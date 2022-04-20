/// <reference types="cypress"/>

context('Home Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should render the home page and display a message', () => {
        cy.get('[data-cy=home-title]').contains('Welcome');
    });
});

export {};
