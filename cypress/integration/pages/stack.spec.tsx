/// <reference types="cypress"/>

const favoriteStack = ['Javascript', 'TypeScript', 'React.js', 'Next.js', 'GraphQL', 'Amazon Web Services', 'Firebase'];

context('Stack', () => {
    beforeEach(() => {
        cy.visit('/stack');
    });

    it('should render the stack page and display the favorite stack', () => {
        cy.get('ul>li').each((item, index) => {
            cy.wrap(item).should('contain.text', favoriteStack[index]);
        });
    });
});

export {};
