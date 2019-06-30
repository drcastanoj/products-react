describe('Products Page', () => {
    it('Validating urls', () => {
        cy.visit('/products');
        cy.get('.item-category__content').eq(1).click()
        cy.url().should('eq', 'http://localhost:3000/products/Tech')
        cy.get('.item-category__content').eq(2).click()
        cy.url().should('eq', 'http://localhost:3000/products/Services')
        cy.get('.item-category__content').last().click()
        cy.url().should('eq', 'http://localhost:3000/products/Office')
        cy.get('.item-category__content').first().click()
        cy.url().should('eq', 'http://localhost:3000/products/')
    });

    it('should filter products by clicks on categories ', () => {
        cy.visit('/products');
        cy.get('.card-product').should('have.length', 10)
        cy.get('.hidden-products').should('have.length', 0)
        cy.get('.item-category__content').eq(1).click()
        cy.get('.card-product').should('have.length', 7)
        cy.get('.hidden-products').should('have.length', 1)
        cy.get('.item-category__content').eq(2).click()
        cy.get('.card-product').should('have.length', 5)
        cy.get('.hidden-products').should('have.length', 1)
        cy.get('.item-category__content').last().click()
        cy.get('.card-product').should('have.length', 5)
        cy.get('.hidden-products').should('have.length', 1)
        cy.get('.item-category__content').first().click()
        cy.get('.card-product').should('have.length', 10)
        cy.get('.hidden-products').should('have.length', 0)
    });

    it('should hide  or to show text hidden  ', () => {
        cy.visit('/products');
        cy.get('.hidden-products').should('have.length', 0)
        cy.get('.item-category__content').eq(1).click()
        cy.get('.hidden-products').should('have.length', 1)
        cy.get('.item-category__content').eq(2).click()
        cy.get('.hidden-products').should('have.length', 1)
        cy.get('.item-category__content').last().click()
        cy.get('.hidden-products').should('have.length', 1)
        cy.get('.item-category__content').first().click()
        cy.get('.hidden-products').should('have.length', 0)
    });
});
