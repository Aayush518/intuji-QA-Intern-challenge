/**
 * Commands for handling file uploads and address form sections
 */

// Upload a picture to the form
Cypress.Commands.add('uploadPicture', (filePath) => {
  cy.fixture(filePath, 'binary')
    .then(Cypress.Blob.binaryStringToBlob)
    .then(fileContent => {
      cy.get('#uploadPicture').attachFile(
        { 
          fileContent, 
          fileName: filePath,
          mimeType: 'image/jpeg',
          encoding: 'utf8',
          lastModified: new Date().getTime()
        },
        { 
          subjectType: 'input',
          force: true 
        }
      );
      
      cy.get('#uploadPicture')
        .then($input => {
          const files = $input[0].files;
          if (files.length > 0) {
            cy.log(`File "${files[0].name}" was attached successfully`);
          }
        });
    });
});

// Set address information including state and city dropdowns
Cypress.Commands.add('setAddress', (data) => {
  if (data.currentAddress) cy.get('#currentAddress').type(data.currentAddress);
  
  if (data.state) {
    cy.get('#state').click();
    cy.get('#state input').type(data.state, { force: true });
    cy.get('.css-26l3qy-menu').contains(data.state).click({ force: true });
    cy.wait(500);
  }
  
  if (data.city) {
    cy.get('#city').should('be.visible').click();
    cy.get('#city').should('have.class', 'css-2b097c-container');
    cy.get('#city input').type(data.city, { force: true });
    cy.get('.css-26l3qy-menu').should('be.visible')
      .contains(data.city).click({ force: true }); 
  }
});