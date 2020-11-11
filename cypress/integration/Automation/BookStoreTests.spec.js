describe('Check the functionality of the bookstore page', function() {
    before(() => {
        cy.visit('https://demoqa.com/books');
    });

    it('Verify the title is correct', () => {

        cy.get('.main-header').should('have.text', 'Book Store');
    });

    it('Type to search displays the Title, Author and Publisher correctly', () => {

        cy.get('#searchBox').type('Speaking JavaScript');
        cy.get('span[id="see-book-Speaking\ JavaScript"] > a').should('have.text', 'Speaking JavaScript');
        cy.get('.rt-tbody > .rt-tr-group > .rt-tr').first().find('.rt-td').eq(2).should('have.text', 'Axel Rauschmayer');
        cy.get('.rt-tbody > .rt-tr-group > .rt-tr').first().find('.rt-td').eq(3).should('have.text', 'O\'Reilly Media');
        cy.get('span[id="see-book-Speaking\ JavaScript"] > a').click();
        cy.url().should('include', 'book=9781449365035');
    });

    it('Verify if the categories are displayed correctly within the selected book page', () => {

        cy.get('#ISBN-label').should('have.text', 'ISBN : ');
        cy.get('#title-label').should('have.text', 'Title : ');
        cy.get('#subtitle-label').should('have.text', 'Sub Title : ');
        cy.get('#author-label').should('have.text', 'Author : ');
        cy.get('#publisher-label').should('have.text', 'Publisher : ');
        cy.get('#pages-label').should('have.text', 'Total Pages : ');
        cy.get('#description-label').should('have.text', 'Description : ');
        cy.get('#website-label').should('have.text', 'Website : ');
    });
});
