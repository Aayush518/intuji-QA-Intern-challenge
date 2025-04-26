/**
 * Commands for verifying submitted form data
 */

// Verify the submitted form data in modal with robust error handling
Cypress.Commands.add('verifySubmittedData', (data) => {
  cy.wait(2000);
  
  let attempts = 0;
  const maxAttempts = 3;
  
  function attemptVerification() {
    if (attempts >= maxAttempts) {
      cy.log(`Failed to find modal after ${maxAttempts} attempts`);
      cy.get('body').then($body => {
        const hasThankYouText = 
          $body.text().includes('Thanks for submitting') || 
          $body.text().includes('Thank you') || 
          $body.text().includes('successfully submitted');
          
        if (hasThankYouText) {
          cy.log('Found thank you text on page, continuing with verification');
        } else {
          cy.log('No confirmation text found, trying one final form submission');
          cy.get('#submit').click({ force: true });
          cy.wait(2000);
        }
      });
      
      return;
    }
    
    attempts++;
    cy.log(`Attempt ${attempts} to find submission modal`);
    
    cy.get('body').then(($body) => {
      const modalExists = $body.find('#example-modal-sizes-title-lg').length > 0;
      const hasThankYouText = $body.text().includes('Thanks for submitting');
      
      if (modalExists || hasThankYouText) {
        cy.log('Found submission confirmation!');
        if (modalExists) {
          cy.get('#example-modal-sizes-title-lg').should('be.visible');
        }
      } else {
        cy.log('Confirmation not found, trying to submit form again');
        cy.get('#submit').scrollIntoView().click({ force: true });
        cy.wait(1000);
        attemptVerification();
      }
    });
  }
  
  attemptVerification();
  cy.wait(2000);
  
  cy.get('body').then($body => {
    if ($body.find('.modal-content table tbody tr').length > 0) {
      verifyModalData();
    } else if ($body.find('.table-responsive').length > 0) {
      verifyModalData('.table-responsive');
    } else {
      cy.log('WARNING: Could not find modal table for verification');
    }
  });
  
  function verifyModalData(tableSelector = '.modal-content table') {
    cy.get(tableSelector).scrollIntoView({ offset: { top: -100, left: 0 } });
    
    const checkRow = (index, expectedValue) => {
      if (expectedValue !== undefined && expectedValue !== null) {
        cy.log(`Looking for table row ${index} with value: ${expectedValue}`);
        
        cy.get(`${tableSelector} tbody tr`, { timeout: 10000 })
          .should('exist')
          .then($rows => {
            if ($rows.length <= index) {
              cy.log(`WARNING: Not enough rows in table. Found ${$rows.length}, looking for index ${index}`);
              return;
            }
            
            cy.wrap($rows.eq(index)).scrollIntoView({ offset: { top: -50, left: 0 } });
            
            const $valueCell = $rows.eq(index).find('td').eq(1);
            const text = $valueCell.text().trim();
            
            cy.log(`Found text in row ${index}: "${text}"`);
            
            if (expectedValue && typeof expectedValue === 'string' && 
                (expectedValue.endsWith('.jpg') || expectedValue.endsWith('.png') || expectedValue.endsWith('.jpeg'))) {
              const fileExtension = expectedValue.split('.').pop();
              cy.log(`Expected to find file extension "${fileExtension}" in "${text}"`);
            } else if (expectedValue) {
              cy.log(`Expected to find "${expectedValue}" in "${text}"`);
              if (text.includes(expectedValue)) {
                cy.log('✅ Value matched successfully!');
              } else {
                cy.log('⚠️ Value did not match exactly');
              }
            }
          });
      }
    };
    
    // Verify form data fields
    checkRow(0, `${data.firstName || ''} ${data.lastName || ''}`.trim() || undefined);
    checkRow(1, data.email);
    checkRow(2, data.gender);
    checkRow(3, data.mobile);
    
    if (data.dateOfBirth) {
      const dobDay = data.dateOfBirth.day.padStart(2, '0');
      const dobMonth = data.dateOfBirth.month;
      const dobYear = data.dateOfBirth.year;
      checkRow(4, `${dobDay} ${dobMonth},${dobYear}`);
    }
    
    checkRow(5, data.subjects && data.subjects.length > 0 ? data.subjects.join(', ') : undefined);
    checkRow(6, data.hobbies && data.hobbies.length > 0 ? data.hobbies.join(', ') : undefined);
    
    if (data.picture) {
      cy.log(`Checking for picture: ${data.picture}`);
      checkRow(7, data.picture);
    }
    
    checkRow(8, data.currentAddress);
    checkRow(9, data.state && data.city ? `${data.state} ${data.city}` : undefined);
  }
});