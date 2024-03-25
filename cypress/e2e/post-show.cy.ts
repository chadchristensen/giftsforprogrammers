describe('Post Show Page', () => {
    describe('Post Exists', () => {
        beforeEach(() => {
            cy.visit('/posts/venio-arbor-sequi');
        });

        it('should contain a category badge that links to the respective category page', () => {
            cy.get('[data-test="category-label"]').contains('Household').click();

            cy.location('pathname').should("eq", "/household");
        });

        it('should contain an h1 title that matches the post title', () => {
            cy.get('h1').should('contain.text', 'venio arbor sequi'); // TODO: Should use match text rather than contain
        });

        it('should contain an image with alt text', () => {
            cy.get('img').should('have.attr', 'alt', 'amissio abeo cinis');
        });

        it('should contain a message about affiliate earnings', () => {
            cy.contains('This is an affiliate link and we may earn money if you purchase this item').should('be.visible');
        });

        it('should contain a post description', () => {
            // TODO: Test on actual text
            cy.get('[data-test="post-description"]').should('be.visible');
        });

        it('should contain a call to action that links to the product shop', () => {
            // TODO: Update this to test the URL of the page linked in the CTA
            cy.get('[data-test="call-to-action"]').should('be.visible');
            // cy.get('[data-test="call-to-action"]').click();

            // cy.location().should('');
        });
    });

    describe('Post Does Not Exist', () => {
        it('should navigate to the 404 page when a post does not exist', () => {
            // TODO: Is there a better way to handle the NEXT_NOT_FOUND error?
            cy.log('Handling the NEXT_NOT_FOUND error that Next.js throws');
            cy.on('uncaught:exception', (e, runnable) => {
                if (e.message.includes('NEXT_NOT_FOUND')) {
                    return false;
                } else {
                    return true;
                }
            });

            cy.request({ url: '/posts/fake-post', failOnStatusCode: false }).its('status').should('equal', 404)
            cy.visit('/posts/fake-post', { failOnStatusCode: false });

            cy.get('h1').contains('404 Not Found');
            cy.get('[data-test="not-found-message"]').contains('Our bad. We could not find the post you were looking for.');
            cy.get('a').contains('Go Back Home').click();

            cy.location('pathname').should('eq', '/');
        })
    });
});