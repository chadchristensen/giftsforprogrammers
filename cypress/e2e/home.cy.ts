describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Header', () => {
    it('should contain a logo that links to the home page', () => {
      cy.get('[data-test="logo"]').click();
      cy.location("pathname").should("eq", "/");
    });

    it('should contain a link to navigate to the Clothing category', () => {
      cy.contains('Clothing').click();
      cy.url().should('include', '/categories/clothing');
    });

    it('should contain a link to navigate to the Tech category', () => {
      cy.contains('Tech').click();
      cy.url().should('include', '/categories/tech');
    });

    it('should contain a link to navigate to the Household category', () => {
      cy.contains('Household').click();
      cy.url().should('include', '/categories/household');
    });
  });

  describe('Post Card', () => {
    it('should contain an image of the product', () => {
      cy.get('[data-test="post-card"]')
        .eq(0)
        .within(() => {
          cy.get('img').should('have.attr', 'alt', 'canto caecus suppono');
        })
    });

    it('should contain a title that links to the product show page', () => {
      cy.get('[data-test="post-card"]')
        .eq(0)
        .within(() => {
          cy.contains('celo adversus curatio').click();
          cy.location('pathname').should('eq', '/posts/celo-adversus-curatio');
        })
    });

    it('should contain a category label that links to the respective category page', () => {
      cy.get('[data-test="post-card"]')
        .eq(0)
        .within(() => {
          cy.contains('Tech').click();

          cy.location('pathname').should("eq", "/categories/tech");
        })
    });

    it('should contain a description of the product', () => {
      cy.get('[data-test="post-card"]')
        .eq(0)
        .within(() => {
          cy.get('[data-test="post-card-description"]').should('be.visible');
        })
    });

    it('should contain a call to action link', () => {
      cy.get('[data-test="post-card"]')
        .eq(0)
        .within(() => {
          cy.get('[data-test="post-card-description"]').should('be.visible');
          // TODO: Should test that it is an anchor tag
          // TODO: Should test that it navigates to the correct location based on href
        })
    });

  });

})