describe('Complete and submit the form', function() {
    before(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('Should correctly fill in the form', () => {

        cy.get('#firstName').type('Aaaa').should('have.value', 'Aaaa');
        cy.get('#lastName').type('Bbbbb');
        cy.get('#userEmail').type('random@asffa.com');
        cy.get('#gender-radio-2').click({force:true});
        cy.get('#userNumber').type('07664234234');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('July');
        cy.get('.react-datepicker__year-select').select('1995');
        cy.get('.react-datepicker__day--018').click();
        cy.get('.subjects-auto-complete__value-container').type('English');
        cy.get('#react-select-2-option-0').click();
        cy.get('.subjects-auto-complete__value-container').type('Computer Science');
        cy.get('#react-select-2-option-0').click();
        cy.get('.subjects-auto-complete__value-container').type('Arts');
        cy.get('#react-select-2-option-0').click();
        cy.get('#hobbies-checkbox-1').check({force:true});
        cy.get('#hobbies-checkbox-3').check({force:true});
        cy.get('#currentAddress').type('Street Blablabla, number 212, Los Angeles');
    });
});




