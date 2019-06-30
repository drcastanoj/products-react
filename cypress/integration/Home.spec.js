describe('First Test', () => {
    it('is working', () => {
        cy.visit('/');
        cy.get('h1').should('have', 'Home');
    });
});
