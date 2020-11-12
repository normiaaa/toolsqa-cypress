describe('Verify the functionality of elements', function() {
    before(() => {
        cy.visit('https://demoqa.com/elements');
    });

    it('Verify the Text Box section', () => {

        cy.get('#item-0').click();
        cy.get('#userName').type('Testing Test');
        cy.get('#useremail').type('Test@testtest.com');
        cy.get('#currentAddress').type('Street Test, number 100, floor -1');
        cy.get('#permanentAddress').type('Testing blablablablablablabla');
        cy.get('#submit').click();
        cy.get('#name').should('contains.text', 'Testing Test');
        cy.get('#email').should('contains.text', 'Test@testtest.com');
        cy.get('.border > #currentAddress').should('contains.text', 'Current Address :Street Test, number 100, floor -1');
        cy.get('.border > #permanentAddress').should('contains.text', 'Testing blablablablablablabla');
    });

    it('Verify the Check Box section', () => {

        cy.get('#item-1').click();
        cy.get('.rct-checkbox > .rct-icon').click();
        cy.get('#result').should('contains.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
        cy.get('.rct-collapse').click();
        cy.get('.rct-node-collapsed').eq(0).should('be.visible').and('have.text', 'Desktop');
        cy.get('.rct-node-collapsed').eq(1).should('be.visible').and('have.text', 'Documents');
        cy.get('.rct-node-collapsed').eq(2).should('be.visible').and('have.text', 'Downloads');
        cy.get('.rct-node-expanded > ol > :nth-child(1) > .rct-text > .rct-collapse > .rct-icon').click();
        cy.get('.rct-node-leaf').eq(0).should('be.visible').and('have.text', 'Notes');
        cy.get('.rct-node-leaf').eq(1).should('be.visible').and('have.text', 'Commands');
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > .rct-text > .rct-collapse > .rct-icon').click();
        cy.get('.rct-node-collapsed').eq(0).should('be.visible').and('have.text', 'WorkSpace');
        cy.get('.rct-node-collapsed').eq(1).should('be.visible').and('have.text', 'Office');
        cy.get(':nth-child(3) > .rct-text > .rct-collapse > .rct-icon').click();
        cy.get('.rct-node-leaf').eq(2).should('be.visible').and('have.text', 'Word File.doc');
        cy.get('.rct-node-leaf').eq(3).should('be.visible').and('have.text', 'Excel File.doc');
        cy.get('.rct-option-collapse-all').click();
        cy.get('.rct-option-expand-all').click();

    });

    it('Verify the Radio button section', () => {

        cy.get('#item-2').click();
        cy.get('#yesRadio').check({force:true});
        cy.get('.mt-3').should('contains.text', 'Yes');
        cy.get('#impressiveRadio').check({force:true});
        cy.get('.mt-3').should('contains.text', 'Impressive');

    });

    it('Verify the Web Tables section', () => {

        cy.get('#item-3').click();
        const arr = [{firstName:'First Name', lastName:'Last Name', age:'age', email:'email', salary:'salary', department:'department'},
                     {firstName:'Cierra', lastName:'Vega', age:'39', email:'cierra@example.com', salary:'10000', department:'Insurance'},
                     {firstName:'Alden', lastName:'Cantrell', age:'45', email:'alden@example.com', salary:'12000', department:'Compliance'},
                     {firstName:'Kierra', lastName:'Gentry', age:'29', email:'kierra@example.com', salary:'2000', department:'Legal'},
                     ];
        
        for (let i = 1; i < arr.length; i++) {
            const obj = arr[i];
            Object.keys(obj).forEach((key, index) => {
                cy.get('.rt-tr').eq(i).find('.rt-td').eq(index).should('have.text', obj[key]);
            });

        } 




    });
});
