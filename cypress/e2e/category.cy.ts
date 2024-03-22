describe('Category Page', () => {
    describe('Crib Category Page', () => {
        beforeEach(() => {
            cy.visit('/crib');
        });

        it('should include a page title with the category name', () => {
            cy.get('h1').contains('Crib');
        });

        it('should only include posts with the category of Crib', () => {
            cy.get('[data-test="post-card"]').each((elem) => {
                cy.wrap(elem).contains('Crib')
            });
        });
    });

    describe('Threads Category Page', () => {
        beforeEach(() => {
            cy.visit('/threads');
        });

        it('should include a page title with the category name', () => {
            cy.get('h1').contains('Threads');
        });

        it('should only include posts with the category of Threads', () => {
            cy.get('[data-test="post-card"]').each((elem) => {
                cy.wrap(elem).contains('Threads')
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