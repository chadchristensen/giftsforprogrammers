describe('Admin Page', () => {
    describe('Unauthorized', () => {
        it('should redirect unauthorized users to the home page', () => {
            cy.visit('/admin/posts');

            cy.location("pathname").should("eq", "/");
        });
    });

    describe('Authorized', () => {
    });
});