describe('Category Page', () => {
    describe('Clothing Category Page', () => {
        beforeEach(() => {
            cy.visit('/clothing');
        });

        it('should include a page title with the category name', () => {
            cy.get('h1').contains('Clothing');
        });

        it('should only include posts with the category of Clothing', () => {
            cy.get('[data-test="post-card"]').each((elem) => {
                cy.wrap(elem).contains('Clothing')
            });
        });
    });

    describe('Household Category Page', () => {
        beforeEach(() => {
            cy.visit('/household');
        });

        it('should include a page title with the category name', () => {
            cy.get('h1').contains('Household');
        });

        it('should only include posts with the category of Household', () => {
            cy.get('[data-test="post-card"]').each((elem) => {
                cy.wrap(elem).contains('Household')
            });
        });
    });

    describe('Tech Category Page', () => {
        beforeEach(() => {
            cy.visit('/tech');
        });

        it('should include a page title with the category name', () => {
            cy.get('h1').contains('Tech');
        });

        it('should only include posts with the category of Tech', () => {
            cy.get('[data-test="post-card"]').each((elem) => {
                cy.wrap(elem).contains('Tech')
            });
        });
    });
});