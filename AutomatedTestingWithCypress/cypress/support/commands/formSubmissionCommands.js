/**
 * Commands for form submission and verification
 */

// Submit form with reliable retry logic
Cypress.Commands.add('submitForm', () => {
  cy.get('#submit').scrollIntoView().should('be.visible');
  cy.get('#submit').click({ force: true });
  
  cy.wait(1000);
  cy.get('body').then($body => {
    if ($body.find('#example-modal-sizes-title-lg').length === 0) {
      cy.log('First submit click did not show modal, trying again with different approach');
      cy.window().scrollTo('bottom');
      cy.get('#submit').click({ force: true });
      
      cy.wait(1000);
      cy.get('body').then($body2 => {
        if ($body2.find('#example-modal-sizes-title-lg').length === 0) {
          cy.log('Second submit click did not show modal, trying with enter key');
          cy.get('#submit').focus().type('{enter}', { force: true });
        }
      });
    }
  });
});

// Close the confirmation modal
Cypress.Commands.add('closeModal', () => {
  cy.get('#closeLargeModal').click();
});